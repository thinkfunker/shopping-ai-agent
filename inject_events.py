import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to inject an onclick handler into the chips, or add an event listener.
# The easiest way is to modify the get_header function in builder.py and re-run builder.py
# Or, modify builder.py to attach a generic javascript function that we also add into index.html
pass
