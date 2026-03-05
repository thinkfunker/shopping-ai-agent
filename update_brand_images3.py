import json
import re

app_js_path = "app.js"
with open(app_js_path, "r", encoding="utf-8") as f:
    app_js = f.read()

try:
    pattern = r'brand:\s*\{\s*"questions":\s*(\[.*?\])\s*,\s*"results":\s*(\{.*\})\s*\}(?=\s*,|\s*\};)'
    m = re.search(pattern, app_js, re.DOTALL)
    if m:
        clean_json = m.group(2)
        brace_count = 0
        end_idx = 0
        for i, char in enumerate(clean_json):
            if char == '{': brace_count += 1
            elif char == '}': brace_count -= 1
            if brace_count == 0:
                end_idx = i + 1
                break
        clean_json = clean_json[:end_idx]
        results = json.loads(clean_json)
        
        for t in results:
            for lang in ["ko", "ja"]:
                prods = results[t][lang]["products"]
                for p in prods:
                    ko_name = results[t]["ko"]["products"][prods.index(p)]["productName"]
                    clean_name = ko_name.replace(" ", "_").replace("·", "")
                    p["productImg"] = f"images/brand_prod_{clean_name}.jpg"

        new_res_str = json.dumps(results, ensure_ascii=False)
        app_js = app_js.replace(clean_json, new_res_str)

        with open(app_js_path, "w", encoding="utf-8") as f:
            f.write(app_js)
        print("Updated brand product images.")
    else:
        print("Regex failed to match.")
except Exception as e:
    import traceback
    traceback.print_exc()
