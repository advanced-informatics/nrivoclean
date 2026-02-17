/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Contact Form Validation', () => {
  let validateField;

  beforeEach(() => {
    const contactHtml = fs.readFileSync(path.resolve(__dirname, '../contact.html'), 'utf8');
    document.documentElement.innerHTML = contactHtml;

    // Clear module cache and reload
    jest.resetModules();
    const main = require('../js/main.js');
    validateField = main.validateField;
  });

  test('required field fails when empty', () => {
    const nameInput = document.getElementById('name');
    nameInput.value = '';
    const result = validateField(nameInput);

    expect(result).toBe(false);
    expect(nameInput.closest('.form-group').classList.contains('error')).toBe(true);
  });

  test('required field passes when filled', () => {
    const nameInput = document.getElementById('name');
    nameInput.value = 'John Smith';
    const result = validateField(nameInput);

    expect(result).toBe(true);
    expect(nameInput.closest('.form-group').classList.contains('error')).toBe(false);
  });

  test('email field fails with invalid email', () => {
    const emailInput = document.getElementById('email');
    emailInput.value = 'not-an-email';
    const result = validateField(emailInput);

    expect(result).toBe(false);
    expect(emailInput.closest('.form-group').classList.contains('error')).toBe(true);
  });

  test('email field passes with valid email', () => {
    const emailInput = document.getElementById('email');
    emailInput.value = 'john@example.com';
    const result = validateField(emailInput);

    expect(result).toBe(true);
    expect(emailInput.closest('.form-group').classList.contains('error')).toBe(false);
  });

  test('phone field fails with invalid phone', () => {
    const phoneInput = document.getElementById('phone');
    phoneInput.value = 'abc';
    const result = validateField(phoneInput);

    expect(result).toBe(false);
    expect(phoneInput.closest('.form-group').classList.contains('error')).toBe(true);
  });

  test('phone field passes with valid phone number', () => {
    const phoneInput = document.getElementById('phone');
    phoneInput.value = '07815 070095';
    const result = validateField(phoneInput);

    expect(result).toBe(true);
    expect(phoneInput.closest('.form-group').classList.contains('error')).toBe(false);
  });

  test('phone field passes when empty (not required)', () => {
    const phoneInput = document.getElementById('phone');
    phoneInput.value = '';
    const result = validateField(phoneInput);

    expect(result).toBe(true);
  });

  test('select field fails when no option selected', () => {
    const serviceSelect = document.getElementById('service');
    serviceSelect.value = '';
    const result = validateField(serviceSelect);

    expect(result).toBe(false);
    expect(serviceSelect.closest('.form-group').classList.contains('error')).toBe(true);
  });

  test('select field passes when option selected', () => {
    const serviceSelect = document.getElementById('service');
    serviceSelect.value = 'upvc';
    const result = validateField(serviceSelect);

    expect(result).toBe(true);
    expect(serviceSelect.closest('.form-group').classList.contains('error')).toBe(false);
  });

  test('textarea field fails when empty and required', () => {
    const messageInput = document.getElementById('message');
    messageInput.value = '';
    const result = validateField(messageInput);

    expect(result).toBe(false);
  });

  test('textarea field passes when filled', () => {
    const messageInput = document.getElementById('message');
    messageInput.value = 'I would like a quote please.';
    const result = validateField(messageInput);

    expect(result).toBe(true);
  });
});
