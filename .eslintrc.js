module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: "react-app",
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 1,
  }
};
