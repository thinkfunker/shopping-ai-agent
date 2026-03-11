# AI Shopping Agent Image Generation Guide

This document defines the strict rules and aesthetic guidelines for generating image assets for the AI Shopping Agent project. All `generate_image` calls must adhere to these principles to maintain visual fidelity with the Figma design while conveying an **Accessible, Everyday E-Commerce (EC)** vibe.

---

## 1. Core Aesthetic Principles (Casual & Accessible)
- **Everyday Practicality**: Focus on items that feel affordable, high-frequency, and practical for daily life (e.g., casual sneakers, cozy mugs, wireless chargers, picnic tents). Avoid overly luxurious, intimidating, or rare high-end items.
- **No Models (Product Only)**: Images must feature ONLY the product. Do not include human models, hands, or body parts.
- **Transparent Background (Object Cutout)**: For all product images, generate the object as a clean cutout on a **transparent background (PNG)**. Ensure there are absolutely **NO floor shadows (no drop shadows, no cast shadows) and NO reflective surfaces or tables**. The object should be a pure standalone asset that can be placed on any HTML background color.
- **Clean Bright Lighting**: Since there are no shadows allowed on the background, the product itself should maintain bright, natural studio lighting for its own texture and form.
- **Strictly NO TEXT / NO TYPOGRAPHY**: Absolutely NO typography, NO branding, NO labels, and NO letters should be generated anywhere in the image (not on the product, and certainly not on the background). The background MUST be a pure, blank solid color so it does not interfere with the HTML text overlay.
- **Modern Lifestyle Appeal**: Products should look like they belong on popular, accessible EC platforms (e.g., Zozotown, Amazon) but photographed beautifully without visual clutter.
- **Layout Awareness**: Every image must consider the module's aspect ratio and the **White Text Overlay (bottom-left)**. Ensure the main subject leaves breathing room for the text at the bottom.

## 2. Color Palette & Backgrounds
To ensure the **White Text** is always legible, generated images must still use backgrounds that offer enough contrast, often drawing from this provided palette:
- **Core Hex Colors**: `#F33F3A`, `#FF7684`, `#FFC540`, `#008487`, `#6DD0F0`, `#7C9695`, `#EB5D39`, `#DC8C2A`, `#BFE4CB`, `#33AD71`, `#C6C6C6`, `#010C18`
- **Rule**: Pick ONE of these colors to act as the primary solid background color for the shot. The background should be clean, seamless, and largely empty to provide a striking contrast that makes the product stand out. Ensure the bottom-left area provides strong contrast against white text.

## 3. Category-Specific Guidelines (Accessible Shift)

### Fashion & Beauty (ファッション / コスメ)
- **Style**: Casual, approachable, "daily coordinate". Lip balms, hand creams, canvas totes, basic cardigans.
- **Prompt Keywords**: `Casual daily fashion photography`, `Bright natural light`, `Soft pastel surroundings`, `Accessible lifestyle E-commerce`.

### Home & Interior (インテリア / キッチン)
- **Style**: Cozy, functional living. Coffee makers, compact sofas, table lamps, hot sand makers.
- **Prompt Keywords**: `Cozy room setting`, `Warm morning sunlight`, `Minimalist practical home goods`, `Inviting atmosphere`.

### Tech & Culture (PC / 趣味 / カルチャー)
- **Style**: Productive yet relaxed. Wireless mice, tablet stands, paperbacks, affordable record players.
- **Prompt Keywords**: `Clean desk setup`, `Modern casual tech gear`, `Relaxing hobby photography`, `Soft diffused lighting`.

### Outdoor & Sports (アウトドア / スポーツ)
- **Style**: Weekend leisure, family-friendly, beginner sports. Pop-up tents, yoga rollers, walking shoes.
- **Prompt Keywords**: `Sunny park picnic`, `Beginner sports gear`, `Fresh outdoor lighting`, `Vibrant dynamic colors`.

## 4. Pending Image Generation List (Quota Reset Required)
*To be generated when the AI quota resets, using the above principles.*

1. **Outdoor**: `module_outdoor_tent.jpg`, `module_outdoor_lantern.jpg`, `module_outdoor_backpack.jpg`, `module_outdoor_shoes.jpg`
2. **Interior**: `module_interior_sofa.jpg`, `module_interior_lighting.jpg`, `module_interior_coffee.jpg`, `module_interior_speaker.jpg`
3. **Culture**: `module_culture_headphone.jpg`, `module_culture_camera.jpg`, `module_culture_record.jpg`
4. **Beauty**: `module_beauty_perfume.jpg`, `module_beauty_skincare.jpg`, `module_beauty_makeup.jpg`, `module_beauty_haircare.jpg`
**Note**: Books are not sold on the EC platform and therefore are excluded from future image generation.
5. **Tech**: `module_tech_laptop.jpg`, `module_tech_monitor.jpg`, `module_tech_keyboard.jpg`, `module_tech_tablet.jpg`

## 5. Prompt Template Example
> "A beautiful, crisp E-commerce product photo featuring a [PRACTICAL DAILY ITEM, e.g., canvas tote bag]. There are NO PEOPLE and NO MODELS in the image. The product is rendered as a clean cutout on a **transparent background**. There are absolutely NO FLOOR SHADOWS, no drop shadows, and no surfaces. The image should contain ONLY the isolated object. There is ABSOLUTELY NO TEXT, NO FONTS, NO TYPOGRAPHY, and NO LETTERS generated anywhere in the image. The overall mood is accessible and highly practical. 8k resolution, modern minimalist product photography, high-quality transparency."
