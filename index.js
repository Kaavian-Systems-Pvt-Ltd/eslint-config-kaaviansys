module.exports = {
  rules: {
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "default-case": "error",
    "eqeqeq": ["error", "always"],
    "func-style": ["error", "expression"],
    "no-console": "error",
    "no-empty": "error",
    "no-extra-semi": "error",
    "no-inline-comments": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-return-await": "error",
    "no-var": "error",
    "operator-assignment": ["error", "always"],
    "prefer-template": "error",
    "quote-props": ["error", "always"],
    "spaced-comment": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    // modified
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "brace-style": "error",
    "comma-dangle": ["error", "never"],
    // modified
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "func-call-spacing": ["error", "always", { "allowNewlines": false }],
    "implicit-arrow-linebreak": ["error", "beside"],
    "jsx-quotes": ["error", "prefer-single"],
    // modified
    "key-spacing": ["error", { "beforeColon": false, "afterColon": false }],
    "line-comment-position": ["error", { "position": "above" }],
    "max-statements-per-line": ["error", { "max": 1 }],
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    "no-whitespace-before-property": "error",
    // modified
    "object-curly-spacing": ["error", "never"],
    "operator-linebreak": ["error", "before"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "semi-style": ["error", "last"],
    "semi-spacing": ["error", { "before": false, "after": false }],
    // added
    "indent": ["error", 2],
    // added
    "max-len": ["error", { "code": 120 }]
  }
}