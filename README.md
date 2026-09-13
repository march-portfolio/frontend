# March Portfolio — Frontend

The modern web frontend for **Tanuphat Sojindamanee (March)**'s multidisciplinary portfolio, built with Next.js 15 (App Router), React 19, Sass/SCSS, and Cloudflare Pages edge deployment support.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Sass / SCSS modules
- **Icons**: Bootstrap Icons
- **Fonts**: Montserrat, Prompt, IBM Plex Sans Thai (via `next/font`)
- **API Client**: Axios

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Build for Cloudflare Pages:
```bash
npm run pages:build
```
