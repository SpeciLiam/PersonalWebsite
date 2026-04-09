# Liam Van Personal Website

Personal brand site for Liam Van, built with Next.js.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS Modules

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run build
npm run lint
```

## GitHub Pages

This repo is configured to deploy to GitHub Pages from GitHub Actions.

### Local preview

```bash
npm install
npm run dev
```

### Deployment flow

1. Push to `main`
2. GitHub Actions builds the static export
3. GitHub Pages publishes the generated site

If Pages is not live yet in GitHub, set:

- `Settings -> Pages -> Source` to `GitHub Actions`

## Current Direction

The site is intentionally positioned around:

- cloud and backend credibility
- AI-assisted product work
- full-stack range
- recruiter-friendly personal branding

## Good Next Steps

- add a projects page with deeper writeups
- add a resume download and contact form
- connect a custom domain
- tune the GitHub Pages deployment with a custom domain later
