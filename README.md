
# Be My Valentine (React + TypeScript + Vite)

A tiny playful app that asks: **"Do you want to be my Valentine?"**

- **Yes** → shows a cute success page 💖
- **No** → the button runs away 🙈

## Getting Started

```bash
npm install
npm run dev
```

Open the URL shown (e.g. http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel / Netlify (recommended)
Just import this repo. Build command: `npm run build`. Output directory: `dist`.

### GitHub Pages
1. In `vite.config.ts`, set:
   ```ts
   export default defineConfig({
     plugins: [react()],
     base: '/<REPO_NAME>/'
   })
   ```
2. Enable **GitHub Pages** for the repo (Settings → Pages → Deploy from GitHub Actions).
3. Use the provided workflow below or deploy manually.

### SPA Routing Note
This app uses client-side routing. For static hosts, ensure 404s fallback to `index.html`.
