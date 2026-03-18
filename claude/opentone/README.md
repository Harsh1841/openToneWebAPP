# OpenTone Website

Built with **Vite + React + React Router**.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.module.css
│   └── Footer.jsx / Footer.module.css
├── pages/
│   ├── Home.jsx / Home.module.css
│   ├── Support.jsx
│   ├── Privacy.jsx
│   └── DocPage.module.css   ← shared styles for Support & Privacy
├── App.jsx                  ← Route definitions
├── main.jsx                 ← React entry point
└── index.css                ← Global CSS variables
```

## Routes

| Path       | Page           |
|------------|----------------|
| `/`        | Home           |
| `/support` | Support        |
| `/privacy` | Privacy Policy |

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deploy

### Netlify
Drag & drop the `dist/` folder after build. The `netlify.toml` handles clean URL routing automatically.

### Vercel
Push to GitHub and connect to Vercel. The `vercel.json` handles routing automatically.

## Update Emails
Replace `support@opentoneapp.com` and `privacy@opentoneapp.com` in:
- `src/pages/Support.jsx`
- `src/pages/Privacy.jsx`
