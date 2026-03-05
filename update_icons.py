import re

html_file = 'index.html'

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the custom SVG paths based on Figma screenshot
icons = {
    # 드라이버 (Driver) - Big head, long shaft
    'type-1"><i data-feather="target"></i>': 'type-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V8M12 8c-3 0-5-2-5-4s1-3 5-3 6 1 6 3-1 4-6 4z"/></svg>',
    
    # 우드 (Wood) - Slightly smaller head than driver
    'type-2"><i data-feather="wind"></i>': 'type-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 22V9M10 9C7 9 5 8 5 6s2-3 5-3 6 2 6 5-1 1-6 1z"/></svg>',
    
    # 아이언 (Iron) - Angled metal head
    'type-3"><i data-feather="frown"></i>': 'type-3"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 22L11 8M11 8c-2 0-3 1-5 1 0-1 4-5 8-5h3l-2 3c-1 1-2 1-4 1z"/></svg>',
    
    # 웨지 (Wedge) - High loft angled head
    'type-4"><i data-feather="activity"></i>': 'type-4"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 22L12 9M12 9C9 9 7 11 6 12l5-9h4l-1 5c-1 1-2 1-2 1z"/></svg>',
    
    # 퍼터 (Putter) - Flat bottom head
    'type-5"><i data-feather="minus"></i>': 'type-5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V10M6 10h12v-2H6v2z"/></svg>',
    
    # 골프백 (Golf Bag)
    'type-1"><i data-feather="briefcase"></i>': 'type-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="8" width="12" height="14" rx="2"/><path d="M10 8V5c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v3M6 14h12M14 20v-6"/></svg>',
    
    # 볼 (Ball) - Simple circle with outline
    'type-3"><i data-feather="circle"></i>': 'type-3"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="10" cy="10" r="1" fill="#2F4D3C"/></svg>',
    
    # 신발 (Shoes)
    'type-4"><i data-feather="play"></i>': 'type-4"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-2c0-1.1.9-2 2-2h3l3-4h6a2 2 0 012 2v6H4zM4 16h16M7 16v2M17 16v2"/></svg>',
    
    # 장갑 (Glove)
    'type-1"><i data-feather="hexagon"></i>': 'type-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 10V5a2 2 0 00-2-2h-1a2 2 0 00-2 2v5M12 10V4a2 2 0 00-2-2H9a2 2 0 00-2 2v6M7 10v9a2 2 0 002 2h6a4 4 0 004-4v-7"/></svg>',
    
    # 의류 (Clothes)
    'type-3"><i data-feather="user"></i>': 'type-3"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>',
    
    # 모자 (Hat)
    'type-2"><i data-feather="sun"></i>': 'type-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 14v-4a6 6 0 00-12 0v4M4 14h16M5 14v2M19 14v2"/></svg>',
    
    # 거리측정기 (Rangefinder)
    'type-1"><i data-feather="camera"></i>': 'type-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="16" height="12" rx="2"/><circle cx="9" cy="12" r="3"/><circle cx="16" cy="12" r="1.5"/></svg>',
    
    # 티/마커 (Tee)
    'type-5"><i data-feather="map-pin"></i>': 'type-5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v14M8 6h8M10 6C10 3 14 3 14 6"/></svg>',
    
    # 연습용품 (Training)
    'type-2"><i data-feather="disc"></i>': 'type-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    
    # 피팅 (Fitting/Tool)
    'type-2"><i data-feather="tool"></i>': 'type-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    
    # 트레이닝 (Target)
    'type-4"><i data-feather="crosshair"></i>': 'type-4"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    
    # 투어웨어 (User/Shirt for tour)
    'type-1"><i data-feather="user"></i>': 'type-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2F4D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>',
}

for old, new in icons.items():
    content = content.replace(old, new)

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(content)

