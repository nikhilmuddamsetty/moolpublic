module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es6: true,
    jquery: false,
    jest: true,
    jasmine: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "2018",
  },
  overrides: [],
  plugins: ["spellcheck"],
  extends: ["eslint:recommended", "prettier"],
  rules: {
    indent: ["warn", "tab", { SwitchCase: 1 }],
    quotes: ["warn", "double"],
    semi: ["error", "always"],
    "no-var": ["error"],
    "no-console": ["off"],
    "no-unused-vars": ["warn"],
    "no-mixed-spaces-and-tabs": ["warn"],
    "spellcheck/spell-checker": [
      1,
      {
        comments: true,
        strings: true,
        identifiers: true,
        templates: true,
        lang: "en_US",
        skipWords: [
          "dict",
          "organisation",
          "organisations",
          "hunspell",
          "utils",
          "mool",
          "ctx",
          "org",
          "ctc",
          "mclose",
          "gmail",
          "aadhaar",
          "onboard",
          "esic",
          "lwf",
          "skype",
          "pdf",
          "jpeg",
          "csv",
          "xlsx",
          "excel",
          "dotenv",
          "ifsc",
          "enum",
          "enum",
          "cess",
          "proff",
          "hra",
          "req",
          "res",
          "Onboarding",
        ],
        skipIfMatch: ["http://[^s]*", "^[-\\w]+/[-\\w\\.]+$"],
        skipWordIfMatch: [
          "^util.*$",
          "^perq.*$",
          "^rebalanc.*$",
          "^mool.*$",
          "^org.*$",
          "^onboard.*$",
          "^compliance.*$",
          "^payslip.*$",
          "^Encashment.*$",
          "^json.*$",
        ],
        minLength: 3,
      },
    ],
  },
};