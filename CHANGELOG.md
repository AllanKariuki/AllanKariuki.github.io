# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-11-27

### Added
- Single-page layout: hero with a Technical Stack card, project gallery, About with stats and education, Experience timeline, Core Competencies and Contact sections, with section-aware navigation.
- Experience timeline and summary drawn from the public CV, served at `/cv.pdf` behind Resume and Download CV buttons.
- Contact form that posts to Formspree when `FORMSPREE_ID` is set, otherwise opens a pre-filled email; honeypot spam field.
- Floating WhatsApp chat button and WhatsApp links in the hero, contact section and footer.
- Generated per-project cover art, and an optional `cover` screenshot field for projects.
- Scroll-reveal animations that respect reduced-motion and work without JavaScript.

### Changed
- New visual design: deep navy with soft glows, blue accent, Manrope and Space Grotesk fonts, uppercase letter-spaced buttons; dark only.
- Intelligent Parking Assistant and Air Drums case studies expanded with details from the CV.
- `/about/` now redirects to the About section on the home page and is excluded from the sitemap.

### Removed
- Terminal-style hero and the separate About page layout.

## [0.1.1] - 2026-11-27

### Fixed
- Home page title uses a pipe separator instead of a second em dash.

## [0.1.0] - 2026-11-27

### Added
- Astro 5 + Tailwind CSS v4 portfolio site with a terminal-style hero, featured projects, stack overview and contact section.
- Projects content collection with 11 case studies and optional live, download and video links.
- Projects page with domain filters, per-project case-study pages with previous/next navigation, an About page and a 404 page.
- SEO meta, Open Graph image, sitemap and robots.txt.
- GitHub Actions workflow that builds and deploys the site to GitHub Pages.
