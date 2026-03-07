with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

# find the line with "    , 800);"
start_del = -1
for i, line in enumerate(lines):
    if "    , 800);" in line:
        start_del = i
        break

end_del = -1
for i in range(start_del, len(lines)):
    if "// Quiz Navigation Logic" in lines[i]:
        end_del = i
        break

if start_del != -1 and end_del != -1:
    new_lines = lines[:start_del] + lines[end_del:]
    with open("app.js", "w", encoding="utf-8") as f:
        f.writelines(new_lines)
    print(f"Deleted lines from {start_del} to {end_del}")
else:
    print("Could not find lines to delete")
