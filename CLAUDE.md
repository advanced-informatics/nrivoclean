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
deploy.sh           - Git add, commit, push script (takes commit message as param)
images/             - Logo/flyer image
initial/            - Original flyer image
```

## Deployment
```bash
./deploy.sh "your commit message"
```

## Outstanding / TODO
- Form replacement on submit not working reliably (fix committed but not yet deployed/tested)
- May want to refine design further based on feedback
- Consider adding images/photos of actual work
