# allankariuki.github.io

Source for my portfolio at **https://allankariuki.github.io**, built with [Astro](https://astro.build) and Tailwind CSS and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve dist/ locally
npm run check     # type-check .astro and .ts files
```

## Adding or updating a project

Each project is one Markdown file in `src/content/projects/<slug>.md`, served at `/projects/<slug>/`.

```yaml
---
title: Budget Tracker
summary: One-line description shown on cards and in meta tags.
domain: Fintech        # AI/ML | Computer Vision | Fintech | HealthTech | Web3 | Backend | Mobile | Learning
stack: [Kotlin, Jetpack Compose]
status: prototype      # active | shipped | prototype | learning
year: 2026
featured: true         # show on the home page
order: 4               # sort order (lower first)
repo: https://github.com/AllanKariuki/budget-tracker-app
live: https://...      # optional, adds a "Live demo" button
download: https://...  # optional, adds a "Download" button
video: https://...     # optional, adds a "Watch demo" button
cover: /covers/x.png   # optional screenshot in public/; a generated cover is used otherwise
---

## Problem
## What I built
## Stack & architecture
## Status / What's next
```

Buttons only appear for links that are set, so publishing a demo later means adding one line of frontmatter.

## Experience, skills and CV

- The experience timeline lives in `src/data/experience.ts`; summary, stats, education and competencies in `src/data/site.ts`. Both are condensed from the CV.
- `public/cv.pdf` is the public CV behind the Resume and Download CV buttons. Replace the file to update it.

## Contact form

Without configuration, the form opens a pre-filled email. To deliver messages to your inbox instead:

1. Create a free form at [formspree.io](https://formspree.io) and copy its ID (the part after `/f/`).
2. In the repo, go to Settings → Secrets and variables → Actions → Variables and add `FORMSPREE_ID`.
3. Re-run the "Deploy to GitHub Pages" workflow.
