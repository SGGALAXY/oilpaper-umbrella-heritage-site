# Image2 图片生成记录

生成方式：`imagegen` fallback CLI，模型锁定为 `gpt-image-2`，图片已保存到 `assets/images/`，网页优先引用 WebP 压缩版。

## 高级档案馆写实工序图

以下 6 张图用于“高级档案馆”版工序标本区。统一要求：写实纪录片摄影、旧木工坊、自然窗光、只拍手和材料、无文字、无水印、无现代塑料感、避免 AI 痕迹。

| 工序 | 输出文件 |
|---|---|
| 选竹 | `assets/images/process/select-bamboo.png` / `.webp` |
| 制骨 | `assets/images/process/make-ribs.png` / `.webp` |
| 穿线 | `assets/images/process/thread-ribs.png` / `.webp` |
| 裱面 | `assets/images/process/paste-canopy.png` / `.webp` |
| 绘花 | `assets/images/process/paint-pattern.png` / `.webp` |
| 上油 | `assets/images/process/oil-finish.png` / `.webp` |

### 通用负面约束

```text
Avoid: AI-generated look, over-smoothed skin, fantasy, CGI, cartoon, neon, perfect studio setup, cluttered tourist souvenir shop, distorted hands, extra fingers, unreadable pseudo text, watermark, modern plastic tools.
```

### 选竹 Prompt

```text
Use case: photorealistic-natural
Asset type: process photograph for a premium museum archive website about Chinese oil-paper umbrella craft
Primary request: Realistic documentary photograph of the "selecting bamboo" stage for traditional oil-paper umbrella making, absolutely no text, no logo, no watermark.
Scene/backdrop: a quiet old wooden workshop in Luzhou, Sichuan, bamboo poles and split bamboo strips on a worn workbench, soft daylight through a side window, dust and natural fibers visible.
Subject: a craftsperson's hands selecting straight mature bamboo strips and checking grain and flexibility; only hands, forearms, tools, bamboo, and table are visible.
Style/medium: authentic editorial documentary photography, 35mm lens, natural film grain, not staged, not glossy commercial, not illustration.
Composition/framing: horizontal 3:2 image, close medium shot, hands and bamboo strips on the left-center, negative space on the right for museum caption, shallow but realistic depth of field.
Lighting/mood: soft north-window daylight, calm, patient, archival, tactile.
Color palette: aged bamboo tan, walnut wood, warm paper beige, muted ink black, no saturated colors.
Materials/textures: bamboo grain, rough saw marks, dry fibers, cotton sleeve, old wood scratches.
Constraints: photorealistic, culturally respectful, historically plausible craft workshop, natural human hands with correct anatomy, no extra fingers, no plastic tools, no modern machines, no readable text.
Avoid: AI-generated look, over-smoothed skin, fantasy, CGI, cartoon, neon, perfect studio setup, cluttered tourist souvenir shop, distorted hands, unreadable pseudo text.
```

### 制骨 Prompt

```text
Use case: photorealistic-natural
Asset type: process photograph for a premium museum archive website about Chinese oil-paper umbrella craft
Primary request: Realistic documentary photograph of the "making umbrella ribs" stage for traditional oil-paper umbrella making, absolutely no text, no logo, no watermark.
Scene/backdrop: old wooden umbrella workshop, small hand plane, awl, simple drill block, bamboo shavings scattered lightly, half-finished umbrella ribs aligned on the table.
Subject: a craftsperson's hands shaving and shaping a thin bamboo rib with a traditional hand tool; the rib is held firmly against the bench.
Style/medium: authentic editorial documentary photography, 35mm lens, natural film grain, museum archive realism, not staged.
Composition/framing: horizontal 3:2 image, close shot from slightly above, diagonal bamboo rib leading through the frame, tool and hands in sharp focus, background softly blurred.
Lighting/mood: soft side daylight with gentle shadows, serious, precise, quiet.
Color palette: bamboo tan, old wood brown, muted blue-gray cotton sleeve, warm beige.
Materials/textures: curled bamboo shavings, blade edge, rough bench surface, hand wrinkles, bamboo nodes.
Constraints: photorealistic, realistic craft action, natural human hands with correct anatomy, no extra fingers, no modern power tools, no readable text.
Avoid: AI-generated look, CGI, fantasy workshop, plastic shine, overdramatic lighting, distorted hands, impossible tools, watermark, pseudo typography.
```

### 穿线 Prompt

```text
Use case: photorealistic-natural
Asset type: process photograph for a premium museum archive website about Chinese oil-paper umbrella craft
Primary request: Realistic documentary photograph of the "threading and tying umbrella ribs" stage for traditional oil-paper umbrella making, absolutely no text, no logo, no watermark.
Scene/backdrop: traditional wooden workbench, circular umbrella skeleton spread open, bamboo ribs radiating from a wooden hub, cotton thread spool nearby, soft workshop window light.
Subject: a craftsperson's hands threading cotton cord through tiny holes in bamboo ribs and tying the ribs around the umbrella hub.
Style/medium: authentic editorial documentary photography, tactile realism, 50mm lens, natural grain, not illustration.
Composition/framing: horizontal 3:2 image, radial bamboo structure fills the lower two thirds, hands near center hub, quiet negative space at upper left.
Lighting/mood: soft daylight, patient, concentrated, meticulous.
Color palette: pale bamboo, cream cotton thread, dark old wood, muted indigo sleeve, warm paper tones.
Materials/textures: cotton thread fibers, bamboo rib edges, polished wooden hub, old table scratches.
Constraints: photorealistic, correct hand anatomy, no extra fingers, no modern metal frame, no readable text, no watermark, no plastic.
Avoid: AI look, overly perfect symmetry, CGI, fantasy, garish colors, distorted thread, messy extra hands, pseudo characters.
```

### 裱面 Prompt

```text
Use case: photorealistic-natural
Asset type: process photograph for a premium museum archive website about Chinese oil-paper umbrella craft
Primary request: Realistic documentary photograph of the "pasting paper canopy" stage for traditional oil-paper umbrella making, absolutely no text, no logo, no watermark.
Scene/backdrop: old wooden workshop table, open bamboo umbrella skeleton, handmade paper sheet being laid over the ribs, bowl of natural paste and a soft brush nearby.
Subject: a craftsperson's hands smoothing cream handmade paper onto the bamboo rib structure, carefully pressing out wrinkles.
Style/medium: authentic editorial documentary photography, natural film grain, 35mm lens, premium museum archive but not staged.
Composition/framing: horizontal 3:2 image, paper canopy covers most of the frame, hands at lower center smoothing paper, brush and paste bowl slightly out of focus.
Lighting/mood: diffused daylight, quiet concentration, tactile and delicate.
Color palette: warm paper cream, bamboo tan, old wood brown, muted ink gray.
Materials/textures: handmade paper fibers, thin paste sheen, bamboo ribs visible under paper, brush bristles.
Constraints: photorealistic, realistic paper and bamboo structure, natural hands with correct anatomy, no extra fingers, no readable text, no modern synthetic glue bottles.
Avoid: AI-generated look, CGI, cartoon, glossy plastic paper, impossible folds, over-saturated color, pseudo typography, watermark.
```

### 绘花 Prompt

```text
Use case: photorealistic-natural
Asset type: process photograph for a premium museum archive website about Chinese oil-paper umbrella craft
Primary request: Realistic documentary photograph of the "painting umbrella pattern" stage for traditional oil-paper umbrella making, absolutely no text, no logo, no watermark.
Scene/backdrop: warm old workshop, oil-paper umbrella canopy laid open on a low wooden table, ink stone, small pigment dishes, bamboo brushes nearby.
Subject: a craftsperson's hand using a fine brush to paint muted plum blossoms and bamboo leaves on the cream umbrella paper; only one hand and brush are visible.
Style/medium: authentic editorial documentary photography, macro-leaning close shot, natural film grain, not illustration even though the painted motif is traditional.
Composition/framing: horizontal 3:2 image, brush tip and fresh pigment in sharp focus, radial bamboo ribs subtly visible beneath the paper, painted motif crossing diagonally.
Lighting/mood: soft daylight through paper, luminous, calm, refined.
Color palette: muted cinnabar red, ink gray, cream paper, bamboo tan, restrained green.
Materials/textures: brush pigment bleeding into paper fibers, oiled-paper surface, bamboo rib shadows, ceramic pigment dish.
Constraints: photorealistic, real brush and real paper texture, natural hand anatomy, no extra fingers, no calligraphy text, no readable characters, no watermark.
Avoid: AI look, digital painting style, perfect vector flowers, oversaturated red, CGI shine, fantasy, distorted hand, pseudo text.
```

### 上油 Prompt

```text
Use case: photorealistic-natural
Asset type: process photograph for a premium museum archive website about Chinese oil-paper umbrella craft
Primary request: Realistic documentary photograph of the "applying tung oil and drying" stage for traditional oil-paper umbrella making, absolutely no text, no logo, no watermark.
Scene/backdrop: old wooden workshop near a window, finished oil-paper umbrella opened on a stand, small ceramic bowl of tung oil, wide soft brush, warm daylight revealing a subtle sheen.
Subject: a craftsperson's hand brushing a thin layer of tung oil across the umbrella canopy, with another finished umbrella drying softly in the background.
Style/medium: authentic editorial documentary photography, 35mm lens, natural grain, realistic museum archive image, not staged.
Composition/framing: horizontal 3:2 image, brush stroke across the lower third, umbrella canopy arcs through the frame, background drying umbrella softly blurred.
Lighting/mood: gentle side light, warm, quiet, final-stage completion, tactile.
Color palette: warm translucent paper, muted red pattern, bamboo tan, old wood, amber oil highlights.
Materials/textures: slight oil sheen, brush bristles, paper fiber, bamboo rib shadows, ceramic bowl.
Constraints: photorealistic, realistic oil application, natural hand anatomy, no extra fingers, no modern labels or bottles, no readable text, no watermark.
Avoid: AI-generated look, wet plastic shine, CGI, fantasy, overdramatic golden light, distorted brush, extra hands, pseudo typography.
```

## 1. 首页主视觉

输出文件：

- `assets/images/hero-oilpaper-umbrella.png`
- `assets/images/hero-oilpaper-umbrella.webp`

Prompt：

```text
Use case: historical-scene
Asset type: landing page hero image for a premium Chinese intangible-cultural-heritage website
Primary request: A refined cinematic hero image of traditional Luzhou Fenshui oil-paper umbrellas, no people, no text, no logo.
Scene/backdrop: warm off-white handmade paper ground, a single opened oil-paper umbrella placed diagonally, a second folded umbrella partly visible, subtle bamboo ribs, ink-wash negative space.
Subject: handcrafted red and ochre oil-paper umbrella with visible bamboo frame and oiled-paper texture.
Style/medium: premium editorial product photography blended with restrained ink-wash atmosphere, museum catalog quality.
Composition/framing: wide 16:9 horizontal composition, main umbrella on right third, generous empty space on left for web typography.
Lighting/mood: soft raked daylight from upper left, quiet, elegant, heritage archive feeling.
Color palette: warm paper #F4F2EC, ink black, cinnabar red, bamboo green, muted ochre.
Materials/textures: handmade paper fibers, bamboo ribs, slightly glossy tung-oil paper, natural brush grain.
Constraints: historically respectful, realistic craft details, no modern plastic, no watermark, no readable text.
Avoid: neon colors, fantasy style, busy background, tourists, logos, English letters, extra hands.
```

## 2. 工坊制作

输出文件：

- `assets/images/workshop-process.png`
- `assets/images/workshop-process.webp`

Prompt：

```text
Use case: historical-scene
Asset type: website section image showing craft process
Primary request: A quiet documentary-style image of an artisan workshop making traditional oil-paper umbrellas, no text.
Scene/backdrop: old wooden workshop table, bamboo umbrella ribs being assembled, natural window light, rolls of paper and brushes arranged neatly.
Subject: hands of a craftsperson tying bamboo ribs and brushing tung oil on paper, focus on process not face.
Style/medium: premium editorial documentary photography, warm film grain, museum exhibition catalog.
Composition/framing: 3:2 horizontal image, hands and umbrella ribs centered, shallow depth of field, clean negative space.
Lighting/mood: soft daylight, calm, patient, tactile.
Color palette: walnut wood, warm paper, bamboo green, muted cinnabar accent.
Materials/textures: bamboo, cotton thread, oiled paper, aged wood, brush bristles.
Constraints: authentic handcraft, no industrial machines, no watermark, no readable text.
Avoid: staged tourist scene, modern neon tools, cluttered market, distorted hands.
```

## 3. 伞面细节

输出文件：

- `assets/images/canopy-detail.png`
- `assets/images/canopy-detail.webp`

Prompt：

```text
Use case: product-mockup
Asset type: gallery close-up image for heritage craft website
Primary request: Macro close-up of an oil-paper umbrella canopy surface and bamboo rib structure, no text.
Scene/backdrop: close crop across the umbrella surface, showing hand-painted floral motif, translucent oiled paper and radial bamboo ribs.
Subject: oil-paper umbrella texture, brush-painted plum blossom pattern, bamboo ribs casting soft shadows.
Style/medium: high-end macro photography, refined editorial, tactile craft material study.
Composition/framing: square 1:1 crop with radial rhythm, elegant asymmetry.
Lighting/mood: soft backlight through paper, quiet, luminous.
Color palette: muted red, cream, ink gray, bamboo tan.
Materials/textures: oiled paper sheen, brush pigment, bamboo grain, fine fiber texture.
Constraints: realistic macro details, no watermark, no readable text.
Avoid: plastic shine, oversaturated colors, cartoon, garish pattern.
```

## 4. 工序长卷

输出文件：

- `assets/images/process-banner.png`
- `assets/images/process-banner.webp`

Prompt：

```text
Use case: infographic-diagram
Asset type: wide process banner image for web page background
Primary request: A tasteful horizontal still-life banner showing the four stages of traditional oil-paper umbrella making without text labels.
Scene/backdrop: warm off-white handmade paper background, four objects arranged left to right: bamboo strips, tied umbrella frame, painted paper canopy, finished oil-paper umbrella.
Subject: craft stages as real objects, minimal museum display.
Style/medium: premium editorial still life, top-down catalog photography, subtle ink-wash influence.
Composition/framing: 21:9 horizontal banner, objects evenly spaced with generous negative space and fine alignment.
Lighting/mood: soft daylight, calm, archival, educational.
Color palette: paper white, bamboo tan, muted cinnabar, ink black.
Materials/textures: handmade paper, bamboo, cotton cord, natural pigments.
Constraints: no text, no numbers, no watermark, no modern props, visually coherent set.
Avoid: busy table, fake 3D icons, cartoon symbols, bright digital colors.
```
