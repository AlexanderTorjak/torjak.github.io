# Alexander Torjak — Engineering Portfolio

A static, single-page portfolio (no build step, no framework) styled like an engineering
datasheet/drawing sheet: title-block header, project "drawings" with hairline rules and
corner marks, and a monospace field style for dates/tags.

## Files
- `index.html` — page structure and content
- `style.css` — all styling
- `script.js` — project category filter (All / Controls & PID / Embedded / Mechanical / Sensors)

## Deploy to GitHub Pages (free)
1. Create a new repository on GitHub, e.g. `torjak-portfolio`.
2. Upload these three files (`index.html`, `style.css`, `script.js`) to the repo root —
   either drag-and-drop on github.com, or:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/torjak-portfolio.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`,
   folder `/ (root)`. Save.
5. GitHub will publish the site at `https://<your-username>.github.io/torjak-portfolio/`
   within a minute or two.

### Optional: custom domain
If you buy a domain, add it under Settings → Pages → Custom domain, and create a CNAME
DNS record pointing to `<your-username>.github.io`.

## Editing content later
Everything is plain HTML — open `index.html` in any editor and edit the text directly.
Each project is one `<article class="drawing" data-category="...">` block; copy one to
add a new project, and adjust `data-category` (space-separated: `controls`, `embedded`,
`mechanical`, `sensors`) so the filter chips pick it up correctly.
