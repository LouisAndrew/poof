module.exports = {
  root: true,
  extends: ["@louisandrew3/eslint-config/react.js"],
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "arrow-body-style": ["error", "as-needed"],
  },
};
