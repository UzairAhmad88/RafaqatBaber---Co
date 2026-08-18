import zipfile
import xml.etree.ElementTree as ET

def get_docx_text(path):
    try:
        doc = zipfile.ZipFile(path)
        xml_content = doc.read('word/document.xml')
        root = ET.fromstring(xml_content)
        
        # Word XML namespaces
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        paragraphs = []
        for paragraph in root.iter('{' + ns['w'] + '}p'):
            texts = [node.text for node in paragraph.iter('{' + ns['w'] + '}t') if node.text]
            if texts:
                paragraphs.append("".join(texts))
        return "\n".join(paragraphs)
    except Exception as e:
        return f"Error: {e}"

text = get_docx_text(r"d:\rafaqatbaber\web documantation for Rafaqat Babar.docx")
with open(r"d:\rafaqatbaber\rafaqat-babar-portfolio\scripts\extracted_content.txt", "w", encoding="utf-8") as f:
    f.write(text)
print("Done")

