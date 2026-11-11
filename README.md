# Uday Kiran Bokka · Portfolio

The portfolio of **Uday Kiran Bokka**, Technical Product Manager at ICICI Bank. It is a static site with no backend. The home page has sections for work, how he works, experience, about and contact, and each product has its own case-study route (`#/work/<id>`).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build and deploy

```bash
npm run build
```

This writes a static site to `dist/`. Pushing to `main` deploys it to GitHub Pages through `.github/workflows/deploy.yml`. Any static host also works:

- **Netlify:** drop the `dist/` folder on app.netlify.com/drop.
- **Vercel:** run `npx vercel --prod`.

## Edit content

All text lives in **`src/data.js`**: profile, stats, the five products and their flows, principles, experience, education, builds and skills. The photo is `public/uday.jpg`.

## Structure

```
index.html        shell: meta tags, fonts, nav
src/data.js       all content
src/main.js       hash router (home sections + product case studies) and motion
src/style.css     design tokens (light + dark), layout and animations
public/uday.jpg   portrait
```

The motion includes line-by-line headline reveals, an iris reveal on the photo, a rotating orbit label, a marquee, count-up stats, scroll reveals, a timeline that draws as you scroll, a cursor-following product preview, animated product flow diagrams, magnetic buttons and a scroll progress bar. All of it switches off for visitors who set "reduce motion".
