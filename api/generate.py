import os
import sys
import json
import uuid
from http.server import BaseHTTPRequestHandler

# Añadir la carpeta src al path
src_path = os.path.join(os.path.dirname(__file__), "..", "src")
sys.path.append(src_path)

import os
import argparse
from fpdf import FPDF

class HarrodsReceipt(FPDF):
    def __init__(self, logo_path):
        super().__init__(orientation='P', unit='mm', format=(80, 200))
        self.logo_path = logo_path
        self.set_auto_page_break(auto=True, margin=5)
        self.add_page()
        self.set_font("Courier", size=8)

    def print_header(self, store_data):
        if os.path.exists(self.logo_path):
            self.image(self.logo_path, x=20, y=5, w=40)
            self.ln(25)
        else:
            self.set_font("Courier", 'B', 12)
            self.cell(0, 5, store_data["name"], align='C', new_x="LMARGIN", new_y="NEXT")
            self.set_font("Courier", size=8)
            
        self.cell(0, 3, store_data["address"], align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 3, store_data["city"], align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 3, store_data["phone"], align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 3, store_data["vat"], align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(2)
        self.set_font("Courier", 'B', 10)
        self.cell(0, 5, "CUSTOMER COPY", align='C', new_x="LMARGIN", new_y="NEXT")
        self.set_font("Courier", size=8)
        self.ln(3)
        self.cell(0, 0, "-" * 40, align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

    def print_transaction(self, tx_data):
        self.cell(0, 3, f"Date: {tx_data['date']}  Time: {tx_data['time']}", new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 3, f"Till: {tx_data['till']}  Cashier: {tx_data['cashier']}", new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 3, f"Receipt: {tx_data['receipt_no']}", new_x="LMARGIN", new_y="NEXT")
        self.ln(2)
        self.cell(0, 0, "-" * 40, align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

    def print_items(self, items):
        self.set_font("Courier", 'B', 8)
        self.cell(40, 4, "Item", new_x="RIGHT")
        self.cell(20, 4, "Qty/£", align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_font("Courier", size=8)
        
        for item in items:
            desc = item['desc']
            qty = item['qty']
            price = item['price']
            total_item = qty * price
            
            # Guardamos la posición Y inicial para alinear el precio
            start_y = self.get_y()
            
            # Imprimimos la descripción
            self.multi_cell(40, 4, desc, align="L", new_x="RIGHT", new_y="TOP")
            end_y_desc = self.get_y()
            
            # Volvemos a la Y inicial para el precio
            self.set_y(start_y)
            self.set_x(self.l_margin + 40)
            self.cell(20, 4, f"£{total_item:.2f}", align="R", new_x="LMARGIN", new_y="NEXT")
            end_y_price = self.get_y()
            
            # Aseguramos que el siguiente elemento empiece debajo del más largo
            self.set_y(max(end_y_desc, end_y_price))
            
            if qty > 1:
                self.cell(0, 3, f"  {qty} @ £{price:.2f}", new_x="LMARGIN", new_y="NEXT")
                
        self.ln(2)
        self.cell(0, 0, "-" * 40, align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

    def print_totals(self, totals, payment):
        self.cell(40, 4, "SUBTOTAL", new_x="RIGHT")
        self.cell(20, 4, f"£{totals['subtotal']:.2f}", align="R", new_x="LMARGIN", new_y="NEXT")
        
        self.cell(40, 4, "VAT (included)", new_x="RIGHT")
        self.cell(20, 4, f"£{totals['tax']:.2f}", align="R", new_x="LMARGIN", new_y="NEXT")
        
        self.set_font("Courier", 'B', 10)
        self.ln(1)
        self.cell(40, 5, "TOTAL", new_x="RIGHT")
        self.cell(20, 5, f"£{totals['total']:.2f}", align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_font("Courier", size=8)
        self.ln(2)
        
        self.set_font("Courier", size=8)
        self.cell(40, 4, payment['tendered'], new_x="RIGHT")
        self.cell(20, 4, f"£{payment['amount']:,.2f}", align="R", new_x="LMARGIN", new_y="NEXT")
        self.ln(2)
        
        self.set_font("Courier", size=7)
        for key, val in payment['details']:
            self.cell(0, 3, f"{key:<15} : {val}", new_x="LMARGIN", new_y="NEXT")
            
        self.set_font("Courier", 'B', 8)
        self.cell(40, 5, "AMOUNT", new_x="RIGHT")
        self.cell(20, 5, f"£{payment['amount']:,.2f}", align="R", new_x="LMARGIN", new_y="NEXT")
        self.set_font("Courier", size=8)
        
        self.cell(0, 4, "Please debit my account as shown", align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(2)
        self.cell(0, 4, "Cardholder PIN verified", align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 4, "Please retain for your records", align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(2)
        self.cell(0, 0, "=" * 40, align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

    def print_footer(self, footer_data):
        self.ln(3)
        self.set_font("Courier", 'U', 9)
        self.cell(0, 4, "HARRODS REWARDS DETAILS", align='C', new_x="LMARGIN", new_y="NEXT")
        self.set_font("Courier", size=8)
        self.ln(3)
        
        self.cell(30, 4, "Rewards No.", align="R", new_x="RIGHT")
        self.cell(30, 4, f"   {footer_data['rewards_no']}", new_x="LMARGIN", new_y="NEXT")
        self.ln(3)
        
        import barcode
        from barcode.writer import ImageWriter
        
        barcode_path = os.path.join(os.path.dirname(self.logo_path), "barcode_tmp")
        EAN = barcode.get_barcode_class('code128')
        ean = EAN(footer_data['barcode_data'], writer=ImageWriter())
        ean.save(barcode_path, options={"write_text": False, "module_width": 0.2, "module_height": 6.0, "quiet_zone": 1.0})
        
        barcode_file = barcode_path + ".png"
        
        if os.path.exists(barcode_file):
            self.image(barcode_file, x=15, w=50)
            self.ln(2)
        
        self.set_font("Courier", size=8)
        self.cell(0, 4, footer_data['barcode_data'], align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(3)
        
        for line in footer_data['messages']:
            self.cell(0, 3, line, align='C', new_x="LMARGIN", new_y="NEXT")
            
        if os.path.exists(barcode_file):
            try:
                os.remove(barcode_file)
            except:
                pass

def main():
    parser = argparse.ArgumentParser(description="Generate Harrods Ticket PDF")
    parser.add_argument("--date", type=str, default="15/04/2026", help="Date in DD/MM/YYYY format")
    parser.add_argument("--item", type=str, default="GUCCI SIGNATURE BELT", help="Item description")
    parser.add_argument("--price", type=float, default=350.00, help="Total price")
    parser.add_argument("--output", type=str, default=None, help="Output PDF path")
    
    args = parser.parse_args()

    # Cálculos matemáticos
    total = args.price
    subtotal = total / 1.20
    tax = total - subtotal

    TICKET_DATA = {
        "store": {
            "name": "HARRODS",
            "address": "87-135 Brompton Road",
            "city": "Knightsbridge, London SW1X 7XL",
            "phone": "Tel: +44 (0)20 7730 1234",
            "vat": "VAT Number: 629273423"
        },
        "transaction": {
            "date": args.date,
            "time": "14:32",
            "till": "042",
            "cashier": "1055 - J. Smith",
            "receipt_no": "83749201"
        },
        "items": [
            {"desc": args.item, "qty": 1, "price": total},
        ],
        "totals": {
            "subtotal": subtotal,
            "tax": tax,
            "total": total
        },
        "payment": {
            "tendered": "Visa Debit Tendered",
            "amount": total,
            "details": [
                ("Card", "Visa Debit"),
                ("ICC", "**** **** **** 9016"),
                ("Auth Code", "072512"),
                ("Merchant ID", "***00262"),
                ("Terminal ID", "***0353"),
                ("PAN Seq.", "00"),
                ("AID", "A0000000031010"),
                ("Cryptogram", "40/1A660B845CB0FFC3")
            ]
        },
        "footer": {
            "rewards_no": "*********2394",
            "barcode_data": "00000801342792191015244001",
            "messages": [
                "Open Monday - Saturday until 9pm",
                "Sunday - 11:30am - 6pm",
                "(browsing only between 11:30am 2 12noon)",
                "Follow @Harrods on Instagram and Twitter",
                "and share your #HarrodsMoments"
            ]
        }
    }

    base_dir = "C:/Users/Usuario/nelux-web"
    logo_path = os.path.join(base_dir, "public", "Harrods-Logo.png")
    artifacts_dir = os.path.join(base_dir, "artifacts")
    if args.output:
        output_pdf_path = args.output
    else:
        output_pdf_path = os.path.join(artifacts_dir, "harrods_ticket.pdf")

    if not os.path.exists(artifacts_dir):
        os.makedirs(artifacts_dir)

    print("Inicializando propulsores de materialización PDF paramétrico (Antigravity SDK)...")

    try:
        pdf = HarrodsReceipt(logo_path)
        pdf.print_header(TICKET_DATA["store"])
        pdf.print_transaction(TICKET_DATA["transaction"])
        pdf.print_items(TICKET_DATA["items"])
        pdf.print_totals(TICKET_DATA["totals"], TICKET_DATA["payment"])
        pdf.print_footer(TICKET_DATA["footer"])
        
        pdf.output(output_pdf_path)
        print(f"Éxito: PDF editable materializado en {output_pdf_path}")
    except Exception as e:
        print(f"Turbulencia durante materialización: {e}")

if __name__ == "__main__":
    main()

import os
import argparse
from fpdf import FPDF

class LafayetteReceipt(FPDF):
    def __init__(self, logo_path):
        super().__init__(orientation='P', unit='mm', format=(80, 250))
        self.logo_path = logo_path
        self.set_margins(5, 5, 5)
        self.set_auto_page_break(auto=True, margin=5)
        self.add_page()
        self.set_font("Courier", size=8)

    def print_header(self, store_data, tx_data):
        # --- LOGO ---
        if os.path.exists(self.logo_path):
            self.image(self.logo_path, x=10, y=2, w=60)
            self.ln(38)
        else:
            self.set_font("Courier", 'B', 11)
            self.cell(0, 6, "Galeries Lafayette", align='C', new_x="LMARGIN", new_y="NEXT")
            self.set_font("Courier", size=8)

        # --- WEBSITE ---
        self.set_font("Courier", size=7)
        self.cell(0, 4, "GALERIESLAFAYETTE.COM", align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

        # --- DATE / TIME / NB ARTICLE ---
        self.set_font("Courier", size=8)
        nb_art = tx_data.get("nb_article", "1")
        self.cell(0, 4, f"Date : {tx_data['date']}  {tx_data['time']}  Nb Article:{nb_art}", align='C', new_x="LMARGIN", new_y="NEXT")

        # --- CAISSE / TICKET ---
        # Centramos el bloque combinado
        caisse_ticket = f"Caisse : {tx_data['caisse']}     Ticket : {tx_data['ticket_no']}"
        self.cell(0, 4, caisse_ticket, align='C', new_x="LMARGIN", new_y="NEXT")

        # --- CAISSIER ---
        self.cell(0, 4, f"Caissier : {tx_data['caissier']}", align='C', new_x="LMARGIN", new_y="NEXT")

        self.ln(2)
        self.cell(0, 0, "-" * 38, align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

    def print_items(self, items, vendeur):
        # --- ARTICLE HEADER ---
        self.set_font("Courier", 'B', 8)
        self.cell(0, 4, "Article                Prix EUR", align='C', new_x="LMARGIN", new_y="NEXT")
        self.set_font("Courier", size=8)

        for item in items:
            ref = item.get('ref', '3SN118YJP_H069')
            desc = item['desc']
            total_item = item['qty'] * item['price']

            # Usamos multi_cell para permitir el salto de línea automático si el texto es largo
            line = f"{ref} {desc} * {total_item:.2f}"
            self.multi_cell(0, 4, line, align='C', new_x="LMARGIN", new_y="NEXT")

        self.ln(2)
        self.cell(0, 0, "-" * 38, new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

    def print_totals(self, totals):
        self.set_font("Courier", size=9)

        # --- TOTAL ---
        self.cell(0, 5, f"Total             {totals['total']:.2f} EUR", align='C', new_x="LMARGIN", new_y="NEXT")

        # --- CARTE BANCAIRE ---
        self.set_font("Courier", size=8)
        self.cell(0, 4, f"Carte bancaire         {totals['total']:.2f} EUR", align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 4, "Visa Debit ****9088", align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

        # --- TVA TABLE HEADER ---
        self.set_font("Courier", size=7)
        tva_header = "Taux TVA      Montant H.T.      T.V.A"
        self.cell(0, 3, tva_header, align='C', new_x="LMARGIN", new_y="NEXT")

        # --- TVA TABLE VALUES ---
        tva_values = f"20 %          {totals['subtotal']:.2f}            {totals['tax']:.2f}"
        self.cell(0, 3, tva_values, align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(4)

    def print_footer(self, footer_data):
        # --- MERCI ---
        self.set_font("Courier", 'B', 13)
        self.cell(0, 7, "MERCI", align='C', new_x="LMARGIN", new_y="NEXT")
        self.set_font("Courier", size=7)
        self.ln(1)

        # --- WEB MESSAGE ---
        self.cell(0, 3, "A bientot en magasin et", align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 3, "sur galerieslafayette.com", align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

        # --- STORE ADDRESS ---
        self.set_font("Courier", 'B', 7)
        self.cell(0, 3, footer_data["store_name"], align='C', new_x="LMARGIN", new_y="NEXT")
        self.set_font("Courier", size=7)
        self.cell(0, 3, footer_data["address"], align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 3, footer_data["city"], align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 3, f"Tel : {footer_data['phone']}", align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

        # --- HOURS ---
        for line in footer_data["hours"]:
            self.cell(0, 3, line, align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(4)

        # --- BARCODE ---
        import barcode
        from barcode.writer import ImageWriter

        barcode_path = os.path.join(os.path.dirname(self.logo_path), "barcode_tmp_laf")
        EAN = barcode.get_barcode_class('ean13')
        ean = EAN(footer_data['barcode_data'], writer=ImageWriter())
        ean.save(barcode_path, options={"write_text": False, "module_width": 0.35, "module_height": 12.0, "quiet_zone": 1.0})

        barcode_file = barcode_path + ".png"
        if os.path.exists(barcode_file):
            self.image(barcode_file, x=8, w=65)
            self.ln(2)

        # --- BARCODE NUMBER ---
        self.set_font("Courier", size=7)
        self.cell(0, 3, footer_data['barcode_data'], align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

        # --- RCS ---
        self.cell(0, 3, footer_data["rcs"], align='C', new_x="LMARGIN", new_y="NEXT")

        if os.path.exists(barcode_file):
            try:
                os.remove(barcode_file)
            except:
                pass


def main():
    parser = argparse.ArgumentParser(description="Generate Galeries Lafayette Ticket PDF")
    parser.add_argument("--date", type=str, default="18/06/2020", help="Date DD/MM/YYYY")
    parser.add_argument("--item", type=str, default="DIOR SNEAKER", help="Item description")
    parser.add_argument("--price", type=float, default=890.00, help="Total TTC price")
    parser.add_argument("--output", type=str, default=None, help="Output PDF path")
    
    args = parser.parse_args()

    total = args.price
    subtotal = round(total / 1.20, 2)
    tax = round(total - subtotal, 2)

    TICKET_DATA = {
        "transaction": {
            "date": args.date,
            "time": "10:47",
            "nb_article": "1",
            "caisse": "003",
            "ticket_no": "32584575",
            "caissier": "025874"
        },
        "vendeur": "025874",
        "items": [
            {"ref": "3SN118YJP_H069", "desc": args.item, "qty": 1, "price": total}
        ],
        "totals": {
            "subtotal": subtotal,
            "tax": tax,
            "total": total
        },
        "footer": {
            "store_name": "GL HAUSSMANN",
            "address": "40 bld Haussmann",
            "city": "75446 PARIS CEDEX 09",
            "phone": "01.42.82.34.56",
            "hours": [
                "Tous les Jours de 9h30 a 20h30",
                "et les dimanches de 11h a 20h"
            ],
            "barcode_data": "6746531687496",
            "rcs": "RCS Paris 572 062 594 Cap : 217 404 572"
        }
    }

    base_dir = "C:/Users/Usuario/nelux-web"
    logo_path = os.path.join(base_dir, "public", "Galeries-Lafayette-logo.png")
    artifacts_dir = os.path.join(base_dir, "artifacts")
    
    if args.output:
        output_pdf_path = args.output
    else:
        import time
        timestamp = int(time.time())
        output_pdf_path = os.path.join(artifacts_dir, f"lafayette_ticket_{timestamp}.pdf")

    if not os.path.exists(artifacts_dir):
        os.makedirs(artifacts_dir)

    print("Inicializando propulsores - Motor Lafayette v2 (Antigravity SDK)...")

    try:
        pdf = LafayetteReceipt(logo_path)
        pdf.print_header({}, TICKET_DATA["transaction"])
        pdf.print_items(TICKET_DATA["items"], TICKET_DATA["vendeur"])
        pdf.print_totals(TICKET_DATA["totals"])
        pdf.print_footer(TICKET_DATA["footer"])

        pdf.output(output_pdf_path)
        print(f"Exito: PDF Lafayette v2 materializado en {output_pdf_path}")
    except Exception as e:
        print(f"Turbulencia durante materializacion Lafayette: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()

import os
import argparse
from fpdf import FPDF

class LouisVuittonReceipt(FPDF):
    def __init__(self, logo_path):
        super().__init__(orientation='P', unit='mm', format=(80, 260))
        self.logo_path = logo_path
        self.set_margins(5, 5, 5)
        self.set_auto_page_break(auto=True, margin=5)
        self.add_page()
        self.set_font("Courier", size=8)

    def print_header(self, store_data):
        # --- LOGO ---
        if os.path.exists(self.logo_path):
            self.image(self.logo_path, x=10, y=8, w=60)
            self.ln(24)
        else:
            self.set_font("Courier", 'B', 12)
            self.cell(0, 7, "LOUIS VUITTON", align='C', new_x="LMARGIN", new_y="NEXT")
            self.set_font("Courier", size=8)

        # --- STORE ADDRESS ---
        self.set_font("Courier", size=7)
        self.cell(0, 3.5, store_data["store_name"], align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 3.5, store_data["address"], align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 3.5, store_data["city"], align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 3.5, store_data["country"], align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 3.5, store_data["phone"], align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(5)

    def print_transaction(self, tx_data):
        self.set_font("Courier", size=8)

        # --- STORE / REGISTER ---
        self.cell(35, 4, f"Tienda: {tx_data['store']}", new_x="RIGHT")
        self.cell(35, 4, f"Caja {tx_data['register']}", new_x="LMARGIN", new_y="NEXT")

        # --- DATE / TIME ---
        self.cell(35, 4, f"Fecha: {tx_data['date']}", new_x="RIGHT")
        self.cell(35, 4, f"Hora: {tx_data['time']}", new_x="LMARGIN", new_y="NEXT")

        # --- TICKET / CASHIER ---
        self.cell(0, 4, f"Ticket: {tx_data['ticket']}", new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 4, f"Cajero: {tx_data['cashier']}", new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

        # --- CLIENT ---
        self.cell(0, 4, f"Cliente: {tx_data['client']}", new_x="LMARGIN", new_y="NEXT")
        self.ln(4)

    def print_items(self, items):
        self.set_font("Courier", size=8)

        # --- HEADER ROW ---
        self.cell(30, 4, "Articulo", new_x="RIGHT")
        self.cell(8, 4, "Ud.", new_x="RIGHT")
        self.cell(16, 4, "Precio", align='R', new_x="RIGHT")
        self.cell(16, 4, "Importe", align='R', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 0, "-" * 38, new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

        for item in items:
            qty = item['qty']
            price = item['price']
            total_item = qty * price

            # Referencia del articulo
            self.cell(0, 4, item['ref'], new_x="LMARGIN", new_y="NEXT")

            # SKU, qty, precio, importe
            self.cell(30, 4, item['sku'], new_x="RIGHT")
            self.cell(8, 4, str(qty), new_x="RIGHT")
            self.cell(16, 4, f"{price:,.2f}", align='R', new_x="RIGHT")
            self.cell(16, 4, f"{total_item:,.2f}", align='R', new_x="LMARGIN", new_y="NEXT")

            # Asesor
            self.cell(0, 4, f"Asesor: {item['advisor']}", new_x="LMARGIN", new_y="NEXT")
            self.ln(2)

        self.cell(0, 0, "-" * 38, new_x="LMARGIN", new_y="NEXT")
        self.ln(3)

    def print_totals(self, totals, payment):
        self.set_font("Courier", size=8)

        # --- SUBTOTAL ---
        self.cell(50, 4, "Base imponible", new_x="RIGHT")
        self.cell(20, 4, f"{totals['subtotal']:,.2f}", align='R', new_x="LMARGIN", new_y="NEXT")

        # --- IVA ---
        self.cell(50, 4, "IVA 21%", new_x="RIGHT")
        self.cell(20, 4, f"{totals['tax']:,.2f}", align='R', new_x="LMARGIN", new_y="NEXT")
        self.ln(1)

        # --- TOTAL ---
        self.set_font("Courier", 'B', 9)
        self.cell(50, 5, "TOTAL EUR", new_x="RIGHT")
        self.cell(20, 5, f"{totals['total']:,.2f}", align='R', new_x="LMARGIN", new_y="NEXT")
        self.set_font("Courier", size=8)
        self.ln(4)

        # --- PAGO ---
        self.cell(45, 4, payment['method'], new_x="RIGHT")
        self.cell(25, 4, f"{payment['amount']:,.2f}", align='R', new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

        # --- DETALLES TARJETA ---
        self.set_font("Courier", size=7)
        for key, val in payment['details']:
            self.cell(0, 3, f"{key:<15} : {val}", new_x="LMARGIN", new_y="NEXT")

        self.set_font("Courier", size=8)
        self.ln(2)
        self.cell(0, 4, "Debito autorizado por el titular", align='C', new_x="LMARGIN", new_y="NEXT")
        self.cell(0, 4, "PIN verificado. Conserve este recibo.", align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(3)
        self.cell(0, 0, "=" * 38, align='C', new_x="LMARGIN", new_y="NEXT")
        self.ln(4)

    def print_footer(self, footer_data):
        self.set_font("Courier", size=7)

        for paragraph in footer_data['paragraphs']:
            self.multi_cell(0, 3.5, paragraph, align='L', new_x="LMARGIN", new_y="NEXT")
            self.ln(2)


def main():
    parser = argparse.ArgumentParser(description="Generate Louis Vuitton Ticket PDF")
    parser.add_argument("--date", type=str, default="15/04/2026", help="Date DD/MM/YYYY")
    parser.add_argument("--item", type=str, default="SAC DE JOUR MM", help="Item description")
    parser.add_argument("--price", type=float, default=1850.00, help="Total price (IVA incluido)")
    parser.add_argument("--output", type=str, default=None, help="Output PDF path")

    args = parser.parse_args()

    # IVA espanol 21% incluido en precio (EU style)
    total = args.price
    subtotal = round(total / 1.21, 2)
    tax = round(total - subtotal, 2)

    TICKET_DATA = {
        "store": {
            "store_name": "Louis Vuitton Puerto Banus",
            "address": "Muelle Ribera, Casa N Marbella",
            "city": "29660 Marbella, Malaga",
            "country": "Espana",
            "phone": "Tel: +34 913 75 30 70"
        },
        "transaction": {
            "store": "ES-0842",
            "register": "1",
            "date": args.date,
            "time": "20:27",
            "ticket": "58294",
            "cashier": "AM01",
            "client": "Cliente"
        },
        "items": [
            {
                "ref": args.item,
                "sku": "M45779",
                "qty": 1,
                "price": total,
                "advisor": "AM01"
            }
        ],
        "totals": {
            "subtotal": subtotal,
            "tax": tax,
            "total": total
        },
        "payment": {
            "method": "Visa Debit Tendered",
            "amount": total,
            "details": [
                ("Tarjeta", "VISA Debit"),
                ("N. Tarjeta", "**** **** **** 9088"),
                ("Autorizacion", "483920"),
                ("ID Comercio", "***00842"),
                ("ID Terminal", "***0312"),
                ("AID", "A0000000031010"),
                ("Criptograma", "5A/2F8B3C91DE06AF")
            ]
        },
        "footer": {
            "paragraphs": [
                "Gracias por su compra en Louis Vuitton. Su producto ha sido elaborado por artesanos expertos con los mejores materiales.",
                "Evite el contacto con aceites o productos con base de alcohol como cosmeticos, perfumes o desinfectantes.",
                "Todos los articulos (excepto articulos personalizados, alta relojeria y alta joyeria) pueden ser cambiados o devueltos en un plazo de 30 dias desde la fecha de compra, con el recibo original."
            ]
        }
    }

    base_dir = "C:/Users/Usuario/nelux-web"
    logo_path = os.path.join(base_dir, "public", "Louis_Vuitton_logo.png")
    artifacts_dir = os.path.join(base_dir, "artifacts")

    if args.output:
        output_pdf_path = args.output
    else:
        import time
        timestamp = int(time.time())
        output_pdf_path = os.path.join(artifacts_dir, f"lv_ticket_{timestamp}.pdf")

    if not os.path.exists(artifacts_dir):
        os.makedirs(artifacts_dir)

    print("Inicializando propulsores - Motor Louis Vuitton (Antigravity SDK)...")

    try:
        pdf = LouisVuittonReceipt(logo_path)
        pdf.print_header(TICKET_DATA["store"])
        pdf.print_transaction(TICKET_DATA["transaction"])
        pdf.print_items(TICKET_DATA["items"])
        pdf.print_totals(TICKET_DATA["totals"], TICKET_DATA["payment"])
        pdf.print_footer(TICKET_DATA["footer"])
        pdf.output(output_pdf_path)
        print(f"Exito: PDF LV materializado en {output_pdf_path}")
    except Exception as e:
        print(f"Turbulencia durante materializacion LV: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            payload = json.loads(post_data.decode('utf-8'))

            date = payload.get("date", "15/04/2026")
            item = payload.get("item", "Item")
            price = float(payload.get("price", 0.0))
            store = payload.get("store", "harrods")

            base_dir = os.path.join(os.path.dirname(__file__), "..")
            tmp_dir = "/tmp"  # Vercel serverless has writable /tmp
            output_pdf_path = os.path.join(tmp_dir, f"ticket_{uuid.uuid4().hex}.pdf")

            if store == "lafayette":
                # Lógica de Lafayette
                total = price
                subtotal = total / 1.20
                tax = total - subtotal
                
                TICKET_DATA = {
                    "store_name": "Galeries Lafayette",
                    "address": "40 Boulevard Haussmann",
                    "city": "75009 Paris",
                    "phone": "01 42 82 34 56",
                    "hours": [
                        "Lun-Sam: 9h30-21h30",
                        "Dim: 11h00-20h00"
                    ],
                    "barcode_data": "4006381333931",
                    "rcs": "RCS Paris 572 015 246"
                }
                TX_DATA = {
                    "date": date,
                    "time": "10:47",
                    "nb_article": "1",
                    "caisse": "003",
                    "ticket_no": "32584575",
                    "caissier": "025874"
                }
                ITEMS = [
                    {"ref": "3SN118YJP_H069", "desc": item, "qty": 1, "price": total}
                ]
                TOTALS = {"subtotal": subtotal, "tax": tax, "total": total}

                logo_path = os.path.join(os.path.dirname(__file__), "Galeries-Lafayette-logo.png")
                pdf = LafayetteReceipt(logo_path)
                pdf.print_header(TICKET_DATA, TX_DATA)
                pdf.print_items(ITEMS, TX_DATA['caissier'])
                pdf.print_totals(TOTALS)
                pdf.print_footer(TICKET_DATA)
                pdf.output(output_pdf_path)

            elif store == "lv":
                # Lógica de Louis Vuitton
                total = price
                subtotal = round(total / 1.21, 2)
                tax = round(total - subtotal, 2)
                TICKET_DATA = {
                    "store": {
                        "store_name": "Louis Vuitton Puerto Banus",
                        "address": "Muelle Ribera, Casa N Marbella",
                        "city": "29660 Marbella, Malaga",
                        "country": "Espana",
                        "phone": "Tel: +34 913 75 30 70"
                    },
                    "transaction": {
                        "store": "ES-0842",
                        "register": "1",
                        "date": date,
                        "time": "20:27",
                        "ticket": "58294",
                        "cashier": "AM01",
                        "client": "Cliente"
                    },
                    "items": [
                        {"ref": item, "sku": "M45779", "qty": 1, "price": total, "advisor": "AM01"}
                    ],
                    "totals": {"subtotal": subtotal, "tax": tax, "total": total},
                    "payment": {
                        "method": "Visa Debit Tendered",
                        "amount": total,
                        "details": [
                            ("Tarjeta", "VISA Debit"),
                            ("N. Tarjeta", "**** **** **** 9088"),
                            ("Autorizacion", "483920"),
                            ("ID Comercio", "***00842"),
                            ("ID Terminal", "***0312"),
                            ("AID", "A0000000031010"),
                            ("Criptograma", "5A/2F8B3C91DE06AF")
                        ]
                    },
                    "footer": {
                        "paragraphs": [
                            "Gracias por su compra en Louis Vuitton. Su producto ha sido elaborado por artesanos expertos con los mejores materiales.",
                            "Evite el contacto con aceites o productos con base de alcohol como cosmeticos, perfumes o desinfectantes.",
                            "Todos los articulos pueden ser cambiados o devueltos en un plazo de 30 dias desde la fecha de compra, con el recibo original."
                        ]
                    }
                }

                logo_path = os.path.join(os.path.dirname(__file__), "Louis_Vuitton_logo.png")
                pdf = LouisVuittonReceipt(logo_path)
                pdf.print_header(TICKET_DATA["store"])
                pdf.print_transaction(TICKET_DATA["transaction"])
                pdf.print_items(TICKET_DATA["items"])
                pdf.print_totals(TICKET_DATA["totals"], TICKET_DATA["payment"])
                pdf.print_footer(TICKET_DATA["footer"])
                pdf.output(output_pdf_path)

            else:
                # Lógica Harrods
                total = price
                subtotal = total / 1.20
                tax = total - subtotal
                TICKET_DATA = {
                    "store": {
                        "name": "HARRODS",
                        "address": "87-135 Brompton Road",
                        "city": "Knightsbridge, London SW1X 7XL",
                        "phone": "Tel: +44 (0)20 7730 1234",
                        "vat": "VAT Number: 629273423"
                    },
                    "transaction": {
                        "date": date,
                        "time": "14:32",
                        "till": "042",
                        "cashier": "1055 - J. Smith",
                        "receipt_no": "83749201"
                    },
                    "items": [
                        {"desc": item, "qty": 1, "price": total},
                    ],
                    "totals": {"subtotal": subtotal, "tax": tax, "total": total},
                    "payment": {
                        "tendered": "Visa Debit Tendered",
                        "amount": total,
                        "details": [
                            ("Card", "Visa Debit"),
                            ("ICC", "**** **** **** 9016"),
                            ("Auth Code", "072512"),
                            ("Merchant ID", "***00262"),
                            ("Terminal ID", "***0353"),
                            ("PAN Seq.", "00"),
                            ("AID", "A0000000031010"),
                            ("Cryptogram", "40/1A660B845CB0FFC3")
                        ]
                    },
                    "footer": {
                        "rewards_no": "*********2394",
                        "barcode_data": "00000801342792191015244001",
                        "messages": [
                            "Open Monday - Saturday until 9pm",
                            "Sunday - 11:30am - 6pm",
                            "(browsing only between 11:30am 2 12noon)",
                            "Follow @Harrods on Instagram and Twitter",
                            "and share your #HarrodsMoments"
                        ]
                    }
                }
                logo_path = os.path.join(os.path.dirname(__file__), "Harrods-Logo.png")
                pdf = HarrodsReceipt(logo_path)
                pdf.print_header(TICKET_DATA["store"])
                pdf.print_transaction(TICKET_DATA["transaction"])
                pdf.print_items(TICKET_DATA["items"])
                pdf.print_totals(TICKET_DATA["totals"], TICKET_DATA["payment"])
                pdf.print_footer(TICKET_DATA["footer"])
                pdf.output(output_pdf_path)

            # Leer el PDF y enviarlo
            with open(output_pdf_path, 'rb') as f:
                pdf_bytes = f.read()
            
            # Limpiar archivo temporal
            try:
                os.remove(output_pdf_path)
            except:
                pass

            names = {
                "harrods": f"Harrods_Ticket_{date.replace('/', '-')}.pdf",
                "lafayette": f"GaleriesLafayette_Ticket_{date.replace('/', '-')}.pdf",
                "lv": f"LouisVuitton_Ticket_{date.replace('/', '-')}.pdf"
            }
            filename = names.get(store, "ticket.pdf")

            self.send_response(200)
            self.send_header('Content-Type', 'application/pdf')
            self.send_header('Content-Disposition', f'attachment; filename="{filename}"')
            self.send_header('Content-Length', str(len(pdf_bytes)))
            self.end_headers()
            self.wfile.write(pdf_bytes)

        except Exception as e:
            print("Error generating ticket:", e)
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
