/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'index.html', title: 'NViroClean' },
  { name: 'services.html', title: 'Services' },
  { name: 'about.html', title: 'About' },
  { name: 'contact.html', title: 'Contact' },
];

describe('Page Structure', () => {
  pages.forEach(({ name, title }) => {
    describe(name, () => {
      let html;

      beforeEach(() => {
        html = fs.readFileSync(path.resolve(__dirname, '..', name), 'utf8');
        document.documentElement.innerHTML = html;
      });

      test('has a valid DOCTYPE', () => {
        expect(html.trim().startsWith('<!DOCTYPE html>')).toBe(true);
      });

      test(`title contains "${title}"`, () => {
        expect(document.title).toContain(title);
      });

      test('has a meta viewport tag', () => {
        const viewport = document.querySelector('meta[name="viewport"]');
        expect(viewport).not.toBeNull();
        expect(viewport.getAttribute('content')).toContain('width=device-width');
      });

      test('has a meta description', () => {
        const description = document.querySelector('meta[name="description"]');
        expect(description).not.toBeNull();
        expect(description.getAttribute('content').length).toBeGreaterThan(10);
      });

      test('has a header with logo', () => {
        const logo = document.querySelector('.header .logo');
        expect(logo).not.toBeNull();
        expect(logo.textContent).toContain('NViroClean');
      });

      test('has navigation links', () => {
        const navLinks = document.querySelectorAll('.nav-links a');
        expect(navLinks.length).toBe(4);
      });

      test('has a footer', () => {
        const footer = document.querySelector('.footer');
        expect(footer).not.toBeNull();
      });

      test('footer contains phone number', () => {
        const footer = document.querySelector('.footer');
        expect(footer.textContent).toContain('07815 070095');
      });

      test('links stylesheet', () => {
        const link = document.querySelector('link[rel="stylesheet"]');
        expect(link).not.toBeNull();
        expect(link.getAttribute('href')).toContain('style.css');
      });

      test('includes main.js script', () => {
        const script = document.querySelector('script[src*="main.js"]');
        expect(script).not.toBeNull();
      });
    });
  });
});

describe('Home Page Specific', () => {
  beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    document.documentElement.innerHTML = html;
  });

  test('has a hero section', () => {
    const hero = document.querySelector('.hero');
    expect(hero).not.toBeNull();
  });

  test('has service cards', () => {
    const cards = document.querySelectorAll('.card');
    expect(cards.length).toBe(4);
  });

  test('has service area tags', () => {
    const areaTags = document.querySelectorAll('.area-tag');
    expect(areaTags.length).toBe(7);
  });

  test('has a CTA section', () => {
    const cta = document.querySelector('.cta');
    expect(cta).not.toBeNull();
  });
});

describe('Contact Page Specific', () => {
  beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../contact.html'), 'utf8');
    document.documentElement.innerHTML = html;
  });

  test('has a contact form', () => {
    const form = document.getElementById('contact-form');
    expect(form).not.toBeNull();
  });

  test('form has required fields', () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const service = document.getElementById('service');
    const message = document.getElementById('message');

    expect(name).not.toBeNull();
    expect(email).not.toBeNull();
    expect(service).not.toBeNull();
    expect(message).not.toBeNull();
  });

  test('service dropdown has correct options', () => {
    const options = document.querySelectorAll('#service option');
    expect(options.length).toBe(6); // placeholder + 5 services
  });

  test('displays phone number', () => {
    const contactInfo = document.querySelector('.contact-info');
    expect(contactInfo.textContent).toContain('07815 070095');
  });
});
