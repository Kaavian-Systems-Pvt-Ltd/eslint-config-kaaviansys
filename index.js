module.exports = {
   
    rules: {
        "semi-spacing": ["error", { "before": false, "after": true }],
        "semi-style": ["error", "last"],
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        // "callback-return" : ["callback", "cb", "next"],
        // "jsx-quotes": ["error", "prefer-double"],
        "quotes": ["error", "single"],
        "brace-style": [2, "1tbs", { "allowSingleLine": false }],
        // "comma-spacing" : [{ "before": false, "after": true }],
        "init-declarations": ["error", "always"]
        // "no-duplicate-imports": ["error", { "includeExports": true }]
    }
}