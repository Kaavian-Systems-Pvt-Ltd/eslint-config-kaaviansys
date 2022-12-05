<!-- ### GITHUB-LINK: https://github.com/Kaavian-Systems-Pvt-Ltd/eslint-config-kaaviansys.git

#### YOU MUST DECLARE DEPENDENCIES NAME LIKE:    "eslint-config-kaaviansys"

#### THEN INSTALL :   npm Install eslint-config-kaaviansys

#### “kaaviansys” SHOULDBE DECLARED IN THE .eslintrc.json FILE UNDER THE     “extends” PROPERTY.

#### IF “eslint.rc file”  IS NOT IN YOUR PROJECT ,USE THE BELLOW COMMENT


##### npm install --save-dev eslint

##### npx eslint --init     -->

# eslint-config-kaaviansys

### One configuration that will serve as standard for projects. 

#### More than 50 powerful ESLint rules    

<img src="eslint.png" width="180" align="center">   

# Dependencies

> “eslint-config-kaaviansys”: "https://github.com/Kaavian-Systems-Pvt-Ltd/eslint-config-kaaviansys.git"

># Install
>
>>npm install --save eslint-config-kaaviansys

# **Usage**

### Add **“kaaviansys”** to the *extends* section of your **.eslintrc** configuration file.

```
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "kaaviansys"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
```

# Problem


# Rules

 | Name                                                                                             | Description                                                                                                                                                                                                     
| :----------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------
| no-dupe-keys                                                    | This rule disallows duplicate keys in object literals.                                                                                                                                              
| no-duplicate-case                                             | This rule disallows duplicate test expressions in case clauses of switch statements.   
|no-duplicate-imports                                             |This rule requires that all imports from a single module that can be merged exist in a single import statement.  
|no-use-before-define                                             |This rule will warn when it encounters a reference to an identifier that has not yet been declared.   
| default-case                                             | This rule aims to require default case in switch statements.
| eqeqeq                                             | This rule is aimed at eliminating the type-unsafe equality operators.
| func-style                                             | This rule enforces a particular type of function style throughout a JavaScript file, either declarations or expressions. 
|no-console                                            | This rule disallows calls or assignments to methods of the console object. 
|no-empty                                             |This rule disallows empty block statements. 
|no-empty-function                                             |This rule is aimed at eliminating empty functions. A function will not be considered a problem if it contains a comment.
|no-extra-semi                                             |This rule disallows unnecessary semicolons.  
|no-inline-comments                                             | This rule disallows comments on the same line as code.
| no-lonely-if                                             | This rule disallows if statements as the only statement in else blocks.
| no-multi-assign]                                              | This rule disallows using multiple assignments within a single statement. 
| no-return-await                                             |This rule aims to prevent a likely common performance hazard due to a lack of understanding of the semantics of async function.
|no-var                                            | This rule is aimed at discouraging the use of var and encouraging the use of const or let instead. 
|operator-assignment                                             | This rule requires or disallows assignment operator shorthand where possible.  
|prefer-template                                            | This rule is aimed to flag usage of + operators with strings.
| quote-props                                          | This rule requires quotes around object literal property names.
| spaced-comment                                             | This rule will enforce consistency of spacing after the start of a comment // or /*. 
| array-bracket-newline                                             | This rule disallows line breaks inside bracketsclauses.   
| array-bracket-spacing                                            | This rule enforces consistent spacing inside array brackets. 
| array-element-newline                                             |This rule disallows line breaks between array elements 
| arrow-spacing                                            |This rule takes an object argument with before and after properties, each with a Boolean value.**true** means there should be one or more spaces and **false** means no spaces.
|brace-style                                             |This rule enforces consistent brace style for blocks.   
| comma-dangle                                            | This rule  disallows trailing commas.
| comma-spacing                                           |This rule enforces consistent spacing before and after commas in variable declarations, array literals, object literals, function parameters, and sequences.
| comma-style                                             | This rule requires a comma after and on the same line as an array element, object property, or variable declaration
| dot-location                                            |The rule enforce the dot in a member expression should be on the same line as the property portion.  
| func-call-spacing                                             | This rule requires space between the function name and the opening parenthesis.
|generator-star-spacing                                            | This rule aims to enforce spacing around the * of generator functions.
| implicit-arrow-linebreak                                             | This rule  disallows a newline before an arrow function body.clauses. 
| jsx-quotes                                            | This rule  enforces the use of single quotes for all JSX attribute values that don’t contain a single quote.  
| key-spacing                                             | This rule enforces consistent spacing between keys and values in object literal properties
| line-comment-position                                             |This rule enforces line comments only above code, in its own line. 
|max-statements-per-line                                            | This rule enforces a maximum number of statements allowed per line.  
| no-multiple-empty-lines                                           | This rule "max" (default: 2) enforces a maximum number of consecutive empty lines. 
| no-whitespace-before-property                                             | This rule disallows whitespace around the dot or before the opening bracket before properties of objects if they are on the same line.clauses. 
| object-curly-spacing                                            | This rule  requires spacing inside of braces (except {}) 
| operator-linebreak                                             | This rule requires linebreaks to be placed before the operator  
|quotes                                             |This rule requires the use of single quotes wherever possible
| semi                                            | This rule requires semicolons at the end of statements
| semi-style                                             | This rule enforces that semicolons are at the end of statements.
| semi-spacing                                            | This rule aims to enforce spacing around a semicolon. 
| space-infix-ops                                            | This rule is aimed at ensuring there are spaces around infix operators.                                             | Enforce a specific parameter name in catch clauses. 




