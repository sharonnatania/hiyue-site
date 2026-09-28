# HIYUE website

Static site (no build step, no dependencies). Same UI as the Claude preview.

## Structure
```
hiyue-site/
├── public/
│   ├── index.html      page shell, nav, footer, SEO meta
│   ├── css/styles.css  all styles
│   ├── js/app.js       product data, rendering, hash router
│   ├── favicon.svg
│   └── robots.txt
├── vercel.json         output dir + headers
├── package.json
└── .gitignore
```

## Edit products
Open `public/js/app.js` and edit the `PRODUCTS` array. Fields: id, name, category, hue, color, price, desc, material, sizes, shopee (product URL), rec (ids of paired products). Add/remove objects freely.

## Deploy on Vercel
1. Push this folder to GitHub, then Vercel → Add New → Project → import it.
   Framework Preset: **Other**. Build Command: empty. Output Directory: `public`.
   (Or run `npx vercel --prod` inside this folder.)
2. Project → Settings → Domains → add your domain and set the DNS records Vercel shows.
3. Replace `YOURDOMAIN.com` in `public/index.html` (canonical + og:url) with your real domain.
4. Replace the placeholder `https://shopee.co.id/hiyue` links in `PRODUCTS` with real product URLs.

## Local preview
`npx serve public`
