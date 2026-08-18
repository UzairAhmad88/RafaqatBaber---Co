import re

def search_text_file(path, name):
    print(f"=== Searching {name} ===")
    with open(path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    keywords = ["kabul", "islamabad", "peshawar", "phone", "email", "address", "fax", "tel", "@", "office"]
    for idx, line in enumerate(lines):
        for kw in keywords:
            if kw in line.lower():
                print(f"Line {idx+1}: {line.strip()}")
                break

search_text_file(r"d:\rafaqatbaber\rafaqat-babar-portfolio\scripts\rafaqat_co_pdf.txt", "Quotation PDF")
search_text_file(r"d:\rafaqatbaber\rafaqat-babar-portfolio\scripts\web_doc_pdf.txt", "Web Doc PDF")
