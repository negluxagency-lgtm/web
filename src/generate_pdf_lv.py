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
