module.exports = {
  ignorePatterns: ['build/'],
  extends: ['plugin:@docusaurus/recommended'],
  rules: {
    '@docusaurus/no-untranslated-text': ['warn', { ignoredStrings: ['·', '—', 'x'] }],
  },
};
