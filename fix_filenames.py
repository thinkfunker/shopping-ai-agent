import os
import re
import urllib.parse
import hashlib

def get_safe_filename(original):
    # check if only ascii
    if all(ord(c) < 128 for c in original):
        return original
    
    # Hash or simply encode
    name, ext = os.path.splitext(original)
    hash_str = hashlib.md5(name.encode('utf-8')).hexdigest()[:8]
    return f"img_{hash_str}{ext}"

with open("app.js", "r", encoding="utf-8") as f:
    app_content = f.read()

images_dir = "images"
files = os.listdir(images_dir)

changes_made = False

for filename in files:
    if not all(ord(c) < 128 for c in filename):
        safe_name = get_safe_filename(filename)
        old_path = os.path.join(images_dir, filename)
        new_path = os.path.join(images_dir, safe_name)
        
        print(f"Renaming {filename} -> {safe_name}")
        os.rename(old_path, new_path)
        
        # update app.js
        # The app.js has strings like "images/prod_brand_golf_타이틀리스트.jpg"
        old_ref = f"images/{filename}"
        new_ref = f"images/{safe_name}"
        if old_ref in app_content:
            app_content = app_content.replace(old_ref, new_ref)
            changes_made = True
        
        # Also handle url encoded versions just in case
        old_ref_encoded = f"images/{urllib.parse.quote(filename)}"
        if old_ref_encoded in app_content:
            app_content = app_content.replace(old_ref_encoded, new_ref)
            changes_made = True

if changes_made:
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(app_content)
    print("app.js updated.")
else:
    print("No changes made to app.js")
