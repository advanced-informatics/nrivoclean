// ===== Mobile Navigation Toggle =====
function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }
}

// ===== Contact Form Validation =====
function validateField(input) {
  const formGroup = input.closest('.form-group');
  if (!formGroup) return true;

  const errorMessage = formGroup.querySelector('.error-message');
  let isValid = true;

  if (input.hasAttribute('required') && !input.value.trim()) {
    isValid = false;
    if (errorMessage) errorMessage.textContent = 'This field is required.';
  } else if (input.type === 'email' && input.value.trim()) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(input.value.trim())) {
      isValid = false;
      if (errorMessage) errorMessage.textContent = 'Please enter a valid email address.';
    }
  } else if (input.type === 'tel' && input.value.trim()) {
    const phonePattern = /^[\d\s\+\-()]{7,20}$/;
    if (!phonePattern.test(input.value.trim())) {
      isValid = false;
      if (errorMessage) errorMessage.textContent = 'Please enter a valid phone number.';
    }
  }

  if (isValid) {
    formGroup.classList.remove('error');
  } else {
    formGroup.classList.add('error');
  }

  return isValid;
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(function (input) {
    input.addEventListener('blur', function () {
      validateField(input);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let allValid = true;
    inputs.forEach(function (input) {
      if (!validateField(input)) {
        allValid = false;
      }
    });

    if (allValid) {
      const successMessage = document.querySelector('.form-success');
      if (successMessage) {
        successMessage.classList.add('show');
      }
      form.reset();

      setTimeout(function () {
        if (successMessage) {
          successMessage.classList.remove('show');
        }
      }, 5000);
    }
  });
}

// ===== Initialise =====
document.addEventListener('DOMContentLoaded', function () {
  initNav();
  initContactForm();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { validateField, initNav, initContactForm };
}
