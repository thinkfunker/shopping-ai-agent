import re
import os

files = {
    'sports': '/Users/jeongkwon.yoon/.gemini/antigravity/brain/3a9af54e-2974-465b-ad28-5b3ea58e9ed5/.system_generated/steps/550/output.txt',
    'game': '/Users/jeongkwon.yoon/.gemini/antigravity/brain/3a9af54e-2974-465b-ad28-5b3ea58e9ed5/.system_generated/steps/570/output.txt',
    'fashion': '/Users/jeongkwon.yoon/.gemini/antigravity/brain/3a9af54e-2974-465b-ad28-5b3ea58e9ed5/.system_generated/steps/573/output.txt',
    'kitchen': '/Users/jeongkwon.yoon/.gemini/antigravity/brain/3a9af54e-2974-465b-ad28-5b3ea58e9ed5/.system_generated/steps/576/output.txt'
}

def convert_class_to_style(class_str):
    styles = []
    classes = class_str.split()
    for c in classes:
        if c == 'absolute':
            styles.append('position: absolute;')
        elif c == 'relative':
            styles.append('position: relative;')
        elif c.startswith('left-['):
            val = c[len('left-['):-1]
            styles.append(f'left: {val};')
        elif c == 'left-0':
            styles.append('left: 0;')
        elif c.startswith('top-['):
            val = c[len('top-['):-1]
            styles.append(f'top: {val};')
        elif c == 'top-0':
            styles.append('top: 0;')
        elif c.startswith('right-['):
            val = c[len('right-['):-1]
            styles.append(f'right: {val};')
        elif c == 'right-0':
            styles.append('right: 0;')
        elif c.startswith('bottom-['):
            val = c[len('bottom-['):-1]
            styles.append(f'bottom: {val};')
        elif c == 'bottom-0':
            styles.append('bottom: 0;')
        elif c.startswith('w-['):
            val = c[len('w-['):-1]
            styles.append(f'width: {val};')
        elif c == 'w-full':
            styles.append('width: 100%;')
        elif c.startswith('h-['):
            val = c[len('h-['):-1]
            styles.append(f'height: {val};')
        elif c == 'h-full':
            styles.append('height: 100%;')
        elif c.startswith('size-['):
            val = c[len('size-['):-1]
            styles.append(f'width: {val}; height: {val};')
        elif c == 'size-full':
            styles.append('width: 100%; height: 100%;')
        elif c.startswith('bg-['):
            val = c[len('bg-['):-1]
            styles.append(f'background: {val};')
        elif c == 'bg-white':
            styles.append('background: white;')
        elif c.startswith('rounded-['):
            val = c[len('rounded-['):-1]
            styles.append(f'border-radius: {val};')
        elif c.startswith('opacity-'):
            val = int(c.split('-')[1]) / 100.0
            styles.append(f'opacity: {val};')
        elif c == 'overflow-hidden' or c == 'overflow-clip':
            styles.append('overflow: hidden;')
        elif c == 'flex':
            styles.append('display: flex;')
        elif c == 'items-center':
            styles.append('align-items: center;')
        elif c == 'justify-center':
            styles.append('justify-content: center;')
        elif c == 'text-white':
            styles.append('color: white;')
        elif c.startswith('text-['):
            val = c[len('text-['):-1]
            # some are text-[length:var(--...)]
            if 'length:' in val:
                val = val.split(',')[-1].replace(')', '')
            styles.append(f'font-size: {val};')
        elif c == 'whitespace-nowrap':
            styles.append('white-space: nowrap;')
        elif c == 'text-center':
            styles.append('text-align: center;')
        elif c == 'font-bold':
            styles.append('font-weight: bold;')
        elif c == 'object-cover':
            styles.append('object-fit: cover;')
        elif c == 'pointer-events-none':
            styles.append('pointer-events: none;')
        # ignore leading-[...], font-[...], etc for simplicity, or we can handle:
        elif c.startswith('leading-['):
            val = c[len('leading-['):-1]
            if ',' in val:
                val = val.split(',')[-1].replace(')', '')
            styles.append(f'line-height: {val};')
    
    return " ".join(styles)

def process_jsx(text, variables):
    # Strip <System>, <Avatar>, <div data-name="Template Top Navigation"> entirely
    text = re.sub(r'<System[^>]*/>', '', text)
    text = re.sub(r'<Avatar[^>]*/>', '', text)
    
    # We want to remove the template top nav which contains header things, we just want the cards!
    # The template top nav is usually `<div ... data-name="Template Top Navigation" ...> ... </div>`
    # We will do this manually by reading output and only taking card elements.
    pass

import sys
# A better way: just inject tailwind css for the generated code part!
# Wait, why not just use inline tailwind in JS? The constraint is "Avoid using TailwindCSS unless requested".
# If I just generate standard HTML structure with absolute position inline styles...
