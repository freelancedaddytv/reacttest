#!/usr/bin/env python3
"""
Run this script after saving your chibi avatar as public/avatar-raw.png
It will:
  1. Remove the white background from your avatar
  2. Save public/avatar.png (transparent PNG)
  3. Save public/favicon.png (transparent, 512x512)
  4. Regenerate public/og-image.png with your avatar included
"""

import os, sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

PUBLIC = os.path.join(os.path.dirname(__file__), '..', 'public')
AVATAR_RAW = os.path.join(PUBLIC, 'avatar-raw.png')
AVATAR_OUT = os.path.join(PUBLIC, 'avatar.png')
FAVICON_OUT = os.path.join(PUBLIC, 'favicon.png')
OG_OUT     = os.path.join(PUBLIC, 'og-image.png')

FONT_BOLD = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf'
FONT_REG  = '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf'

GREEN_DARK  = (2, 44, 14)
GREEN_MID   = (5, 78, 22)
GREEN_ACC   = (22, 163, 74)
WHITE       = (255, 255, 255)
SLATE_900   = (15, 23, 42)
SLATE_400   = (148, 163, 184)
GREEN_300   = (134, 239, 172)


def remove_white_bg(img: Image.Image, tolerance: int = 30) -> Image.Image:
    img = img.convert('RGBA')
    data = img.getdata()
    new_data = []
    for r, g, b, a in data:
        if r > 255 - tolerance and g > 255 - tolerance and b > 255 - tolerance:
            new_data.append((r, g, b, 0))
        else:
            new_data.append((r, g, b, a))
    img.putdata(new_data)
    return img


def process_avatar():
    if not os.path.exists(AVATAR_RAW):
        print(f'[!] No avatar found at {AVATAR_RAW}')
        print('    Save your chibi PNG as public/avatar-raw.png and re-run.')
        return None

    print('[+] Removing white background from avatar...')
    raw = Image.open(AVATAR_RAW)
    avatar = remove_white_bg(raw)

    avatar.save(AVATAR_OUT)
    print(f'    Saved -> {AVATAR_OUT}')

    fav = avatar.copy()
    fav.thumbnail((512, 512), Image.LANCZOS)
    favicon_canvas = Image.new('RGBA', (512, 512), (0, 0, 0, 0))
    paste_x = (512 - fav.width) // 2
    paste_y = (512 - fav.height) // 2
    favicon_canvas.paste(fav, (paste_x, paste_y), fav)
    favicon_canvas.save(FAVICON_OUT)
    print(f'    Saved -> {FAVICON_OUT}')

    return avatar


def generate_og(avatar: Image.Image | None = None):
    W, H = 1200, 630
    img = Image.new('RGB', (W, H), SLATE_900)
    draw = ImageDraw.Draw(img)

    # Background gradient (manual banding)
    for y in range(H):
        t = y / H
        r = int(SLATE_900[0] + (GREEN_DARK[0] - SLATE_900[0]) * t * 0.6)
        g = int(SLATE_900[1] + (GREEN_DARK[1] - SLATE_900[1]) * t * 0.6)
        b = int(SLATE_900[2] + (GREEN_DARK[2] - SLATE_900[2]) * t * 0.6)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # Subtle dot grid overlay
    for gx in range(0, W, 48):
        for gy in range(0, H, 48):
            draw.ellipse([gx - 1, gy - 1, gx + 1, gy + 1], fill=(255, 255, 255, 15))

    # Left green accent bar
    draw.rectangle([0, 0, 7, H], fill=GREEN_ACC)

    # Decorative circle (right bg)
    draw.ellipse([700, -200, 1400, 900], fill=GREEN_MID + (255,) if False else GREEN_MID, outline=None)
    # Softer: just draw a large circle with low opacity trick via rectangle
    circ_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    circ_draw = ImageDraw.Draw(circ_layer)
    circ_draw.ellipse([680, -180, 1350, 820], fill=(*GREEN_MID, 80))
    img = img.convert('RGBA')
    img = Image.alpha_composite(img, circ_layer)
    img = img.convert('RGB')
    draw = ImageDraw.Draw(img)

    try:
        font_name_big  = ImageFont.truetype(FONT_BOLD, 72)
        font_name_med  = ImageFont.truetype(FONT_BOLD, 34)
        font_tag       = ImageFont.truetype(FONT_REG,  26)
        font_small     = ImageFont.truetype(FONT_REG,  22)
        font_badge     = ImageFont.truetype(FONT_BOLD, 20)
    except Exception:
        font_name_big = font_name_med = font_tag = font_small = font_badge = ImageFont.load_default()

    # "Available for new projects" badge
    badge_text = 'Available for new projects'
    bx, by = 56, 60
    bw = draw.textlength(badge_text, font=font_badge) + 32
    draw.rounded_rectangle([bx, by, bx + bw, by + 36], radius=18, fill=(*GREEN_ACC, 30), outline=GREEN_ACC)
    draw.text((bx + 16, by + 8), badge_text, font=font_badge, fill=GREEN_300)

    # Name
    draw.text((56, 130), 'Jefrey', font=font_name_big, fill=GREEN_300)
    name2_x = 56 + draw.textlength('Jefrey ', font=font_name_big)
    draw.text((56, 220), 'Landicho', font=font_name_big, fill=WHITE)

    # Title
    draw.text((56, 322), 'AI Automation & Web Developer', font=font_name_med, fill=WHITE)
    draw.text((56, 366), 'for Law Firms', font=font_name_med, fill=(134, 239, 172))

    # Divider
    draw.line([(56, 420), (400, 420)], fill=GREEN_ACC, width=2)

    # Contact line
    draw.text((56, 440), 'jeff@vodesk.com', font=font_tag, fill=SLATE_400)
    draw.text((56, 476), 'linkedin.com/in/jefreylandicho', font=font_small, fill=SLATE_400)
    draw.text((56, 506), 'github.com/freelancedaddytv', font=font_small, fill=SLATE_400)

    # Skills tags
    tags = ['AI Automation', 'Laravel', 'React', 'n8n', 'Legal Tech']
    tx = 56
    ty = 556
    for tag in tags:
        tw = int(draw.textlength(tag, font=font_small)) + 24
        draw.rounded_rectangle([tx, ty, tx + tw, ty + 32], radius=16, fill=GREEN_MID)
        draw.text((tx + 12, ty + 6), tag, font=font_small, fill=GREEN_300)
        tx += tw + 10
        if tx > 620:
            break

    # Avatar on right side
    if avatar is not None:
        av = avatar.convert('RGBA')
        av.thumbnail((480, 580), Image.LANCZOS)
        ax = W - av.width - 40
        ay = (H - av.height) // 2 + 20
        img_rgba = img.convert('RGBA')
        img_rgba.paste(av, (ax, ay), av)
        img = img_rgba.convert('RGB')

    img.save(OG_OUT, 'PNG', optimize=True)
    print(f'[+] OG card saved -> {OG_OUT}')


if __name__ == '__main__':
    avatar = process_avatar()
    generate_og(avatar)
    print('\nDone! Files written to public/')
    if avatar is None:
        print('Re-run after adding public/avatar-raw.png to include your avatar in the OG card.')
