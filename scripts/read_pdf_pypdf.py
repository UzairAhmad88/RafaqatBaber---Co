import pypdf

def extract_pdf_text(pdf_path, txt_path):
    try:
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for i, page in enumerate(reader.pages):
            text += f"--- Page {i+1} ---\n"
            text += page.extract_text() + "\n"
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted {pdf_path} to {txt_path}")
    except Exception as e:
        print(f"Error extracting {pdf_path}: {e}")

extract_pdf_text(r"d:\rafaqatbaber\Rafaqat Co..pdf", r"d:\rafaqatbaber\rafaqat-babar-portfolio\scripts\rafaqat_co_pdf.txt")
extract_pdf_text(r"d:\rafaqatbaber\web documantation for Rafaqat Babar.pdf", r"d:\rafaqatbaber\rafaqat-babar-portfolio\scripts\web_doc_pdf.txt")
