"""Genera el borde floral de CONAL (SVG) inspirado en el estilo del Instagram @conalaneiap.
Salida: flora_symbols.svg (símbolos + degradados) y flora_markup.html (las 3 composiciones)."""
import math, random, sys, os

OUT = sys.argv[1]
R = random.Random(2026)
f = lambda v: ('%.1f' % v).rstrip('0').rstrip('.')

def catmull(pts):
    """Curva suave cerrada por los puntos (Catmull-Rom → Bézier)."""
    n = len(pts); d = 'M%s %s' % (f(pts[0][0]), f(pts[0][1]))
    for i in range(n):
        p0, p1, p2, p3 = pts[i - 1], pts[i], pts[(i + 1) % n], pts[(i + 2) % n]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += 'C%s %s %s %s %s %s' % tuple(f(v) for v in (*c1, *c2, *p2))
    return d + 'Z'

def blob(cx, cy, rx, ry, rot=0, amp=0, freq=8, n=48, solo_borde=False):
    """Elipse con borde ondulado (pétalos con volantes)."""
    pts = []; a = math.radians(rot)
    for i in range(n):
        t = 2 * math.pi * i / n
        k = 1 + amp * math.sin(freq * t)
        if solo_borde:  # volantes solo en la mitad exterior
            k = 1 + amp * math.sin(freq * t) * max(0, math.cos(t))
        x, y = rx * k * math.cos(t), ry * k * math.sin(t)
        pts.append((cx + x * math.cos(a) - y * math.sin(a), cy + x * math.sin(a) + y * math.cos(a)))
    return catmull(pts)

def polar(r, ang):
    a = math.radians(ang); return r * math.cos(a), r * math.sin(a)

S = []  # símbolos y degradados

# ── Degradados ─────────────────────────────────────────────────────────────
S.append('''<linearGradient id="fg-hoja" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#0A4F2B"/><stop offset=".55" stop-color="#14783C"/><stop offset="1" stop-color="#2E9A45"/></linearGradient>
<linearGradient id="fg-hoja2" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1D7A35"/><stop offset=".6" stop-color="#3DAE4A"/><stop offset="1" stop-color="#8CCB4A"/></linearGradient>
<linearGradient id="fg-hoja3" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#063D22"/><stop offset="1" stop-color="#0F6B36"/></linearGradient>
<radialGradient id="fg-petalo-orq" cx=".2" cy=".5" r=".9"><stop offset="0" stop-color="#FFB3D9"/><stop offset=".45" stop-color="#F04AA0"/><stop offset="1" stop-color="#D0137A"/></radialGradient>
<radialGradient id="fg-sepalo-orq" cx=".1" cy=".5" r="1"><stop offset="0" stop-color="#FF9ACB"/><stop offset="1" stop-color="#E0228A"/></radialGradient>
<radialGradient id="fg-labelo" cx=".5" cy=".25" r=".8"><stop offset="0" stop-color="#5E0636"/><stop offset=".55" stop-color="#9C0F5C"/><stop offset="1" stop-color="#D8268A"/></radialGradient>
<linearGradient id="fg-girasol" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#F29A00"/><stop offset=".5" stop-color="#FFC21A"/><stop offset="1" stop-color="#FFE066"/></linearGradient>
<linearGradient id="fg-girasol2" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#D97E00"/><stop offset="1" stop-color="#F7B000"/></linearGradient>
<radialGradient id="fg-centro" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#7A4A16"/><stop offset=".6" stop-color="#4A2408"/><stop offset="1" stop-color="#2A1203"/></radialGradient>
<linearGradient id="fg-naranja" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#F04E00"/><stop offset=".6" stop-color="#FF8A00"/><stop offset="1" stop-color="#FFC21A"/></linearGradient>
<linearGradient id="fg-azulave" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1B2E9E"/><stop offset="1" stop-color="#4A7BEA"/></linearGradient>
<linearGradient id="fg-espata" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F8F55"/><stop offset=".7" stop-color="#1B5E3B"/><stop offset="1" stop-color="#6B2A5E"/></linearGradient>
<linearGradient id="fg-heliconia" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#C81E1E"/><stop offset=".6" stop-color="#F24B1D"/><stop offset="1" stop-color="#FFC21A"/></linearGradient>
<linearGradient id="fg-tallo" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1F7A35"/><stop offset="1" stop-color="#3DA048"/></linearGradient>''')

# ── Hojas tropicales (base en 0,0, punta hacia arriba, largo 100) ────────────
def hoja(id_, grad, ancho, vena):
    p = 'M0 0C%s -26 %s -68 0 -100C%s -68 %s -26 0 0Z' % (f(-ancho * .9), f(-ancho), f(ancho), f(ancho * .9))
    venas = ''.join('<path d="M0 %s Q%s %s %s %s"/>' % (f(-y), f(s * ancho * .45), f(-y - 10), f(s * ancho * .82), f(-y - 22))
                    for y in range(18, 82, 13) for s in (-1, 1))
    # las venas se recortan con la silueta de la hoja para que no se salgan
    S.append('<clipPath id="cp-%s"><path d="%s"/></clipPath>' % (id_, p))
    S.append('<g id="%s"><path d="%s" fill="url(#%s)"/>'
             '<path d="M0 -1C-1 -36 0 -70 0 -97" fill="none" stroke="%s" stroke-width="1.8" stroke-linecap="round" opacity=".75"/>'
             '<g clip-path="url(#cp-%s)" fill="none" stroke="%s" stroke-width=".9" stroke-linecap="round" opacity=".35">%s</g></g>'
             % (id_, p, grad, vena, id_, vena, venas))
hoja('fl-hoja', 'fg-hoja', 24, '#7FCB6A')
hoja('fl-hoja-clara', 'fg-hoja2', 20, '#D6F29A')
hoja('fl-hoja-oscura', 'fg-hoja3', 28, '#4FA864')

# ── Orquídea cattleya ───────────────────────────────────────────────────────
o = []
for ang in (-90, 145, 35):  # sépalos
    cx, cy = polar(27, ang)
    o.append('<path d="%s" fill="url(#fg-sepalo-orq)" stroke="#B5126F" stroke-width=".7"/>' % blob(cx, cy, 30, 10.5, ang, .03, 6))
for ang in (-28, -152):  # pétalos anchos con volantes
    cx, cy = polar(27, ang)
    o.append('<path d="%s" fill="url(#fg-petalo-orq)" stroke="#B5126F" stroke-width=".7"/>' % blob(cx, cy, 30, 22, ang, .09, 11, 64, True))
    for k in (-14, 0, 14):  # venas
        x2, y2 = polar(48, ang + k * .55)
        o.append('<path d="M%s %s Q%s %s %s %s" fill="none" stroke="#B5126F" stroke-width=".7" opacity=".35"/>'
                 % (f(polar(8, ang)[0]), f(polar(8, ang)[1]), f(polar(30, ang + k)[0]), f(polar(30, ang + k)[1]), f(x2), f(y2)))
o.append('<path d="%s" fill="url(#fg-labelo)" stroke="#FF73B9" stroke-width="1.2"/>' % blob(0, 22, 21, 22, 0, .12, 13, 72))
o.append('<path d="%s" fill="#FFC21A"/>' % blob(0, 13, 7, 12, 0))
o.append('<g fill="none" stroke="#FF7A1A" stroke-width="1.1" stroke-linecap="round"><path d="M-3 6v13M0 5v16M3 6v13"/></g>')
o.append('<ellipse cx="0" cy="2" rx="6" ry="8.5" fill="#FFF0F7" stroke="#F2A9CF" stroke-width=".8"/>')
S.append('<g id=\"fl-orquidea\">%s</g>' % ''.join(o))

# ── Girasol ────────────────────────────────────────────────────────────────
g = []
for ring, (n, r0, L, w, grad, off) in enumerate(((22, 15, 34, 7.5, 'fg-girasol2', 8), (20, 16, 31, 7, 'fg-girasol', 0))):
    for i in range(n):
        a = 360 * i / n + off + R.uniform(-3, 3)
        LL = L * R.uniform(.9, 1.08)
        g.append('<path d="M0 0C%s -%s %s -%s 0 -%s C%s -%s %s -%s 0 0Z" fill="url(#%s)" stroke="#D98200" stroke-width=".5" '
                 'transform="rotate(%s) translate(0 -%s)"/>'
                 % (f(-w), f(LL * .3), f(-w * .7), f(LL * .8), f(LL), f(w * .7), f(LL * .8), f(w), f(LL * .3), grad, f(a), f(r0)))
g.append('<circle r="19" fill="url(#fg-centro)"/>')
gold = 2.39996
for i in range(70):  # semillas en espiral
    r = 1.9 * math.sqrt(i); a = i * gold
    g.append('<circle cx="%s" cy="%s" r="1" fill="#A8742A" opacity="%s"/>' % (f(r * math.cos(a)), f(r * math.sin(a)), f(.35 + .5 * (i % 3 == 0))))
S.append('<g id=\"fl-girasol\">%s</g>' % ''.join(g))

# ── Ave del paraíso (base de la flor en 0,0; tallo hacia abajo) ─────────────
a_ = ['<path d="M-3 4 C-4 40 -2 80 -3 120" fill="none" stroke="url(#fg-tallo)" stroke-width="4.5" stroke-linecap="round"/>']
for tip, base, w in (((-22, -62), (-6, -6), 6), ((2, -70), (0, -7), 6.5), ((22, -58), (8, -6), 6), ((36, -40), (14, -4), 5)):
    mx, my = (tip[0] + base[0]) / 2, (tip[1] + base[1]) / 2
    a_.append('<path d="M%s %s Q%s %s %s %s Q%s %s %s %sZ" fill="url(#fg-naranja)" stroke="#D84A00" stroke-width=".6"/>'
              % (f(base[0] - w), f(base[1]), f(mx - w * 1.2), f(my), f(tip[0]), f(tip[1]), f(mx + w * 1.2), f(my), f(base[0] + w), f(base[1])))
for tip in ((-12, -40), (14, -36)):
    a_.append('<path d="M%s 0 L%s %s L%s %s L%s %s L%s 0Z" fill="url(#fg-azulave)"/>'
              % (f(tip[0] * .2 - 3), f(tip[0] - 4), f(tip[1] * .6), f(tip[0]), f(tip[1]), f(tip[0] + 4), f(tip[1] * .6), f(tip[0] * .2 + 3)))
a_.append('<path d="M-56 2 C-30 -8 18 -12 52 -4 C40 8 10 14 -56 2Z" fill="url(#fg-espata)" stroke="#123F28" stroke-width=".8"/>')
a_.append('<path d="M-50 2 C-20 -4 20 -6 46 -3" fill="none" stroke="#C0435E" stroke-width="1.4" opacity=".7"/>')
S.append('<g id=\"fl-ave\">%s</g>' % ''.join(a_))

# ── Agapanto (esfera de florecitas; tallo hacia abajo) ──────────────────────
ag = ['<path d="M0 14 C1 50 -1 90 0 130" fill="none" stroke="url(#fg-tallo)" stroke-width="4" stroke-linecap="round"/>']
flor = []
cols = ['#3F35B8', '#5546D6', '#6E5FEA', '#8576F2', '#4B5FD9', '#2E2A9C']
for i in range(58):
    r = 31 * math.sqrt(R.random()); t = R.uniform(0, 2 * math.pi)
    x, y = r * math.cos(t), r * math.sin(t) * .92
    ag.append('<path d="M0 14L%s %s" stroke="#3E8F45" stroke-width=".6" opacity=".6"/>' % (f(x), f(y)))
    flor.append((y, x, R.choice(cols), R.uniform(0, 60), R.uniform(3.6, 5.2)))
for y, x, c, rot, s in sorted(flor):  # de atrás hacia adelante
    pet = ''.join('<ellipse cx="0" cy="-%s" rx="%s" ry="%s" transform="rotate(%s)"/>' % (f(s * .8), f(s * .38), f(s * .8), k * 60) for k in range(6))
    ag.append('<g transform="translate(%s %s) rotate(%s)" fill="%s">%s<circle r="%s" fill="#E9E4FF" opacity=".8"/></g>'
              % (f(x), f(y), f(rot), c, pet, f(s * .25)))
S.append('<g id=\"fl-agapanto\">%s</g>' % ''.join(ag))

# ── Racimo de flores pequeñas rosadas ───────────────────────────────────────
rc = []
for i in range(11):
    x, y = R.uniform(-26, 26), R.uniform(-14, 12)
    c = R.choice(['#FF2E93', '#E1187D', '#FF5FAE', '#F0147C'])
    s = R.uniform(5, 7.5); rot = R.uniform(0, 72)
    pet = ''.join('<circle cx="0" cy="-%s" r="%s" transform="rotate(%s)"/>' % (f(s * .55), f(s * .45), k * 72) for k in range(5))
    rc.append('<g transform="translate(%s %s) rotate(%s)" fill="%s" stroke="#B5126F" stroke-width=".4">%s<circle r="%s" fill="#FFD23A" stroke="none"/></g>'
              % (f(x), f(y), f(rot), c, pet, f(s * .22)))
S.append('<g id=\"fl-racimo\">%s</g>' % ''.join(rc))

# ── Heliconia (brácteas en zigzag; base del tallo en 0,0) ───────────────────
h = ['<path d="M0 0 C-2 -40 2 -90 0 -150" fill="none" stroke="url(#fg-tallo)" stroke-width="4" stroke-linecap="round"/>']
for i in range(7):
    y = -36 - i * 17; s = 1.45 * (1 - i * .085); side = -1 if i % 2 else 1
    h.append('<path d="M0 %s C%s %s %s %s %s %s C%s %s %s %s 0 %sZ" fill="url(#fg-heliconia)" stroke="#9E1616" stroke-width=".6"/>'
             % (f(y), f(side * 16 * s), f(y - 2), f(side * 32 * s), f(y - 12 * s), f(side * 38 * s), f(y - 24 * s),
                f(side * 22 * s), f(y - 14 * s), f(side * 8 * s), f(y - 12 * s), f(y - 10 * s)))
    h.append('<path d="M%s %s C%s %s %s %s %s %s" fill="none" stroke="#2E8F3E" stroke-width="1.4" stroke-linecap="round"/>'
             % (f(side * 4 * s), f(y - 6 * s), f(side * 20 * s), f(y - 9 * s), f(side * 30 * s), f(y - 15 * s), f(side * 37 * s), f(y - 23 * s)))
S.append('<g id=\"fl-heliconia\">%s</g>' % ''.join(h))

open(os.path.join(OUT, 'flora_symbols.svg'), 'w', encoding='utf-8').write('\n'.join(S))

# ── Composiciones ───────────────────────────────────────────────────────────
def use(id_, x, y, s=1, rot=0, flip=False):
    sx = -s if flip else s
    return '<use href="#%s" transform="translate(%s %s) rotate(%s) scale(%s %s)"/>' % (id_, f(x), f(y), f(rot), f(sx), f(s))

def hojas(n, x0, x1, base_y, ang, esc, tipos):
    out = []
    paso = (x1 - x0) / n  # reparto parejo (sin huecos) con variación dentro de cada tramo
    for i in range(n):
        out.append(use(R.choice(tipos), x0 + (i + R.random()) * paso, base_y + R.uniform(0, 8), R.uniform(*esc), R.uniform(*ang)))
    return out

def racimo_esquina(flip):
    """Racimo de esquina (viewBox 0 0 480 260); flip=True lo arma para la derecha."""
    W = 480; X = (lambda x: W - x) if flip else (lambda x: x)
    L = []
    L += hojas(9, 0, 430, 262, (-70, 70), (1.3, 2.1), ['fl-hoja-oscura', 'fl-hoja'])
    L.append(use('fl-hoja', X(30), 262, 2.3, 28 if flip else -28))
    L.append(use('fl-hoja-oscura', X(120), 262, 2.2, 8 if flip else -8))
    L.append(use('fl-heliconia', X(445), 266, .85, -6 if flip else 6))
    L.append(use('fl-ave', X(215), 112, 1.05, 10 if flip else -10, flip))
    L.append(use('fl-ave', X(370), 150, .8, -14 if flip else 14, not flip))
    L += hojas(4, 140, 330, 262, (-45, 45), (1.0, 1.4), ['fl-hoja'])
    L.append(use('fl-agapanto', X(318), 178, .95))
    L.append(use('fl-girasol', X(172), 182, 1.12, R.uniform(0, 20)))
    L.append(use('fl-orquidea', X(52), 170, 1.28, 8 if flip else -8, flip))
    L.append(use('fl-orquidea', X(402), 212, .62, -12 if flip else 12, not flip))
    L += hojas(7, 0, 470, 264, (-55, 55), (.55, .95), ['fl-hoja-clara', 'fl-hoja'])
    for x, y, s in ((100, 238, 1.1), (255, 244, 1.0), (350, 246, .9), (450, 250, .8)):
        L.append(use('fl-racimo', X(x), y, s, R.uniform(-10, 10)))
    L.append(use('fl-girasol', X(285), 236, .5, 10))
    return ''.join(L)

def franja():
    """Franja central baja (viewBox 0 0 1600 130): ancha para que a 1 600 px no se agrande; se recorta a lo ancho."""
    L = []
    L += hojas(32, 0, 1600, 132, (-65, 65), (.8, 1.25), ['fl-hoja-oscura', 'fl-hoja'])
    for x in (120, 400, 680, 930, 1210, 1480):
        L.append(use('fl-agapanto', x + R.uniform(-30, 30), 78, .55))
    for x in (250, 540, 800, 1070, 1350):
        L.append(use('fl-girasol', x, 88, .55, R.uniform(0, 30)))
    L += hojas(24, 0, 1600, 134, (-55, 55), (.45, .8), ['fl-hoja-clara', 'fl-hoja'])
    for x in range(30, 1600, 95):
        L.append(use('fl-racimo', x + R.uniform(-15, 15), 118 + R.uniform(-4, 4), R.uniform(.8, 1.05)))
    return ''.join(L)

markup = ('<div class="cierre__botanico" aria-hidden="true">\n'
          '    <svg class="flora flora--centro" viewBox="0 0 1600 130" preserveAspectRatio="xMidYMax slice">%s</svg>\n'
          '    <svg class="flora flora--izq" viewBox="0 0 480 260" preserveAspectRatio="xMinYMax meet">%s</svg>\n'
          '    <svg class="flora flora--der" viewBox="0 0 480 260" preserveAspectRatio="xMaxYMax meet">%s</svg>\n'
          '  </div>') % (franja(), racimo_esquina(False), racimo_esquina(True))
open(os.path.join(OUT, 'flora_markup.html'), 'w', encoding='utf-8').write(markup)
print('ok', len('\n'.join(S)), len(markup))
