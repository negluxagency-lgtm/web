import os
import sys
import json
import uuid
from http.server import BaseHTTPRequestHandler

# Añadir la carpeta src al path
src_path = os.path.join(os.path.dirname(__file__), "..", "src")
sys.path.append(src_path)

from generate_pdf_ticket import HarrodsReceipt
from generate_pdf_lafayette import LafayetteReceipt
from generate_pdf_lv import LouisVuittonReceipt

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

                logo_path = os.path.join(base_dir, "src", "Galeries-Lafayette-logo.png")
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

                logo_path = os.path.join(base_dir, "src", "Louis_Vuitton_logo.png")
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
                logo_path = os.path.join(base_dir, "src", "Harrods-Logo.png")
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
