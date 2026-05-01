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
