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
