import os

def find_placeholders():
    root_dir = r"d:\rafaqatbaber\rafaqat-babar-portfolio"
    extensions = (".tsx", ".ts", ".css", ".json", ".js")
    
    keywords = ["0000", "000-000", "placeholder", "yourname", "example.com", "tel:+", "tel:000"]
    
    for root, dirs, files in os.walk(root_dir):
        if "node_modules" in root or ".next" in root or ".git" in root:
            continue
        for file in files:
            if file.endswith(extensions):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        lines = f.readlines()
                    for idx, line in enumerate(lines):
                        for kw in keywords:
                            if kw in line:
                                print(f"{file} | Line {idx+1}: {line.strip()}")
                                break
                except Exception as e:
                    pass

find_placeholders()
