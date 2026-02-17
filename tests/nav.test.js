/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Mobile Navigation', () => {
  let initNav;

  beforeEach(() => {
    const indexHtml = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    document.documentElement.innerHTML = indexHtml;

    jest.resetModules();
    const main = require('../js/main.js');
    initNav = main.initNav;

    // Initialise nav directly for reliable testing
    initNav();
  });

  test('hamburger button exists', () => {
    const hamburger = document.querySelector('.hamburger');
    expect(hamburger).not.toBeNull();
  });

  test('nav-links exist', () => {
    const navLinks = document.querySelector('.nav-links');
    expect(navLinks).not.toBeNull();
  });

  test('nav-links does not have open class by default', () => {
    const navLinks = document.querySelector('.nav-links');
    expect(navLinks.classList.contains('open')).toBe(false);
  });

  test('clicking hamburger toggles open class on nav-links', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.click();
    expect(navLinks.classList.contains('open')).toBe(true);
    expect(hamburger.classList.contains('active')).toBe(true);

    hamburger.click();
    expect(navLinks.classList.contains('open')).toBe(false);
    expect(hamburger.classList.contains('active')).toBe(false);
  });

  test('clicking a nav link closes the menu', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const firstLink = navLinks.querySelector('a');

    hamburger.click();
    expect(navLinks.classList.contains('open')).toBe(true);

    firstLink.click();
    expect(navLinks.classList.contains('open')).toBe(false);
    expect(hamburger.classList.contains('active')).toBe(false);
  });
});
