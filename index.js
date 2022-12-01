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
        "no-bitwise": "error",                                        
        "no-console": "error",
        "no-empty": "error",
        "no-empty-function": "error",
        "no-extra-semi": "error",
        "no-inline-comments": "error",
        "no-lonely-if": "error",
        "no-multi-assign": "error",
        "no-multi-str": "error",
        "no-nested-ternary": "error",
        "no-return-await": "error",
        "no-var": "error",
        "operator-assignment": ["error", "always"],
        "prefer-template": "error",
        "quote-props": ["error", "always"],
        "spaced-comment": ["error", "always"] ,
        "array-bracket-newline": ["error", "never"],
        "array-bracket-spacing": ["error", "always"],
        "array-element-newline": ["error", "never"],
        "arrow-spacing": ["error", { "before": false, "after": true }],
        "brace-style": ["error", "allman"],
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", { "before": true, "after": true }],
        "comma-style": ["error", "last"],
        "dot-location": ["error", "property"],
        "func-call-spacing": ["error", "always", { "allowNewlines": false }],
        "generator-star-spacing": ["error", {"before": true, "after": true}],
        "implicit-arrow-linebreak": ["error", "beside"],
        "jsx-quotes": ["error", "prefer-single"],
        "key-spacing": ["error", { "beforeColon": true,"afterColon": true }],
        "line-comment-position": ["error", { "position": "above" }],
        "max-statements-per-line": ["error", { "max": 1 }],
        "multiline-ternary": ["error", "never"],
        "no-multiple-empty-lines": ["error", { "max": 2}],
        "no-whitespace-before-property": "error",
        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": ["error", "before"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "semi-style": ["error", "last"],
        "semi-spacing": ["error", { "before": false, "after": false }],
        "space-infix-ops": ["error"],
        "react/react-in-jsx-scope": "off"
   
    }
}