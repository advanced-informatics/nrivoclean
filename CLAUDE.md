# NViroClean Website

## Business Details
- **Name:** NViroClean
- **Domain:** nvironclean.co.uk (bought on GoDaddy)
- **Phone:** 07815 070095
- **Contact:** Customer Care Team (avoid using personal names - present as a bigger company)
- **Service Areas:** Long Eaton, Stapleford, Sandiacre, Beeston, Breaston, Nottingham, West Bridgford
- **Tagline:** Sustainable Cleaning. Superior Standards.

## Services
- Conservatory Cleans
- UPVC Restoration
- Gutter Cleans
- Fascia & Soffits
- Full Clean (All Services)

## Tech Stack
- Plain HTML/CSS/JS (no frameworks, no build tools)
- Blue colour scheme (matching flyer branding)
- Jest + jsdom for automated tests (64 tests)
- Formspree for contact form submissions (endpoint: https://formspree.io/f/mnjbvekb)
- Local dev server via `serve` (devDependency)
- Pre-deployment checks: html-validate, linkinator, pa11y-ci, @lhci/cli, start-server-and-test
- Pre-deployment testing: html-validate, linkinator, pa11y-ci, Lighthouse CI

## Hosting
- GitHub Pages (free, public repo)
- Repo: github.com:advanced-informatics/nrivoclean
- GoDaddy DNS A records pointing to GitHub Pages IPs
- CNAME: www -> advanced-informatics.github.io

## Project Structure
```
index.html          - Home page (hero, service cards, area tags, CTA)
services.html       - Detailed service descriptions
about.html          - About NViroClean + "Why Choose Us"
contact.html        - Contact form (Formspree) + phone + service areas
css/style.css       - Full responsive stylesheet (blue/water theme)
js/main.js          - Mobile nav toggle + form validation + Formspree submit
tests/form.test.js  - 11 form validation tests
tests/nav.test.js   - 5 mobile nav tests
tests/structure.test.js - 48 page structure tests
package.json        - Dependencies + npm scripts (start, test, validate, etc.)
.htmlvalidate.json  - HTML validation config (extends recommended)
.pa11yci            - pa11y-ci accessibility test config (WCAG2AA)
lighthouserc.js     - Lighthouse CI config (scores + thresholds)
deploy.sh           - Git add, commit, push script (takes commit message as param)
images/             - Logo/flyer image
initial/            - Original flyer image
```

## Local Development
```bash
npm install   # install all dependencies (first time / new machine)
npm start     # serves the site at http://localhost:8000
npm test      # run all Jest tests
```
All dependencies (Jest, serve, testing tools) are tracked in `package.json`, so `npm install` is the only setup needed on any machine.

## Pre-Deployment Testing
```bash
npm run validate        # HTML validation on all 4 pages
npm run test:links      # Check for broken internal links
npm run test:a11y       # WCAG2AA accessibility checks (auto-starts server)
npm run test:lighthouse # Lighthouse scores: performance, a11y, SEO, best practices
npm run test:all        # Run everything: validate + jest + links + a11y + lighthouse
```
- Lighthouse requires Linux Chrome (installed via `npx puppeteer browsers install chrome`)
- WSL2 may need system libs: `sudo apt-get install -y libnss3 libatk-bridge2.0-0 libdrm2 libxkbcommon0 libgbm1 libasound2`
- Lighthouse results are saved to `.lighthouseci/` (gitignored)

## Pre-Deployment Testing
```bash
npm run validate        # HTML validation on all 4 pages (html-validate)
npm run test:links      # Check for broken internal links (linkinator)
npm run test:a11y       # WCAG2AA accessibility checks on all pages (pa11y-ci)
npm run test:lighthouse # Lighthouse scores: performance, a11y, SEO, best practices (@lhci/cli)
npm run test:all        # Runs everything: validate + jest + links + a11y + lighthouse
```
Lighthouse requires a Linux Chrome/Chromium. On first setup, install one via: `npx puppeteer browsers install chrome`

WSL2 may also need system libs: `sudo apt-get install -y libnss3 libatk-bridge2.0-0 libdrm2 libxkbcommon0 libgbm1 libasound2`

Config files: `.htmlvalidate.json`, `.pa11yci`, `lighthouserc.js`

## Deployment
```bash
./deploy.sh "your commit message"
```

## Outstanding / TODO
- Form replacement on submit not working reliably (fix committed but not yet deployed/tested)
- May want to refine design further based on feedback
- Consider adding images/photos of actual work
