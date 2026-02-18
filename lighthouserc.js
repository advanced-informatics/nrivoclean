module.exports = {
  ci: {
    collect: {
      staticDistDir: '.',
      url: [
        'http://localhost/index.html',
        'http://localhost/services.html',
        'http://localhost/about.html',
        'http://localhost/contact.html',
      ],
      chromePath: require('child_process').execSync(
        'find ~/.cache/puppeteer -name chrome -type f 2>/dev/null | head -1'
      ).toString().trim() || undefined,
      numberOfRuns: 1,
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox --headless --disable-gpu --disable-dev-shm-usage',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
  },
};
