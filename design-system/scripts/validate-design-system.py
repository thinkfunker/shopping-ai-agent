import json
import os
import re

def check_file_exists(path):
    return os.path.exists(path)

def analyze_js_component(path, properties):
    if not os.path.exists(path):
        return ["File not found"]
    
    with open(path, 'r') as f:
        content = f.read()
    
    issues = []
    for prop, data in properties.items():
        if data['type'] == 'string':
            for variant in data['variants']:
                # Simple check for variant presence in JS logic/comments
                if variant not in content:
                    issues.append(f"Missing variant logic for '{prop}={variant}'")
    return issues

def analyze_css_component(path, properties):
    if not os.path.exists(path):
        return ["File not found"]
    
    with open(path, 'r') as f:
        content = f.read()
    
    issues = []
    # 1. Check for expected mapping classes
    for prop, data in properties.items():
        if 'mapping' in data:
            for variant, css_class in data['mapping'].items():
                if css_class.startswith('.'):
                    search_class = css_class
                else:
                    search_class = f".{css_class}"
                    
                if search_class not in content and ':' not in search_class:
                    issues.append(f"Missing CSS class '{search_class}' for variant '{variant}'")

    # 2. Check for hardcoded values (heuristic)
    hardcoded_hex = re.findall(r'#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})', content)
    hardcoded_rgb = re.findall(r'rgb\(.*?\)|rgba\(.*?\)', content)
    
    # Filter out common transparent or standard values if needed, 
    # but for a strict system, almost everything should be a variable.
    for hex_val in hardcoded_hex:
        # Ignore common resets or if it's inside a comment (simple check)
        issues.append(f"Hardcoded hex value found: #{hex_val}")
    
    for rgb_val in hardcoded_rgb:
        if 'var(--' not in rgb_val:
             issues.append(f"Hardcoded RGB value found: {rgb_val}")

    return issues

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    manifest_path = os.path.join(base_dir, 'component-manifest.json')
    
    if not os.path.exists(manifest_path):
        print(f"Error: {manifest_path} not found")
        return

    with open(manifest_path, 'r') as f:
        manifest = json.load(f)

    results = {}
    print("--- Design System Validation Report ---")
    
    for name, config in manifest.get('components', {}).items():
        print(f"\n[Component: {name}]")
        component_dir = os.path.join(base_dir, 'components', name)
        
        # Check for non-nested structure as well (some are flat in components/)
        js_path = os.path.join(component_dir, f"{name}.js")
        if not os.path.exists(js_path):
             js_path = os.path.join(base_dir, 'components', f"{name}.js")
             
        css_path = os.path.join(component_dir, f"{name}.css")
        if not os.path.exists(css_path):
             css_path = os.path.join(base_dir, 'components', f"{name}.css")

        js_issues = analyze_js_component(js_path, config.get('properties', {}))
        css_issues = analyze_css_component(css_path, config.get('properties', {}))
        
        if not js_issues and not css_issues:
            print("  ✅ All checks passed")
        else:
            for issue in js_issues:
                print(f"  ❌ JS: {issue}")
            for issue in css_issues:
                print(f"  ❌ CSS: {issue}")

if __name__ == "__main__":
    main()
