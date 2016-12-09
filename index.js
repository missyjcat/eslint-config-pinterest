module.exports = {
    env: {
        commonjs: true,
    },
    extends: 'airbnb',
    parser: 'babel-eslint',
    rules: {
        'camelcase': 0,
        'consistent-return': 0,
        'global-strict': 0,
        'max-len': [2, 120, 4, {
            "ignorePattern": "^(import\\s.+)|(\\s*(var\\s.+=\\s*)?require\\s*\\(.+)$|(jest.(un)?mock\\()"
        }],
        'new-cap': 0,
        'no-alert': 2,
        'no-console': 2,
        'no-constant-condition': 0,
        'no-empty': 0,
        'no-eq-null': 0,
        'no-duplicate-imports': 0, 
        'no-extend-native': 0,
        'no-multi-spaces': 0,
        'no-octal-escape': 0,
        'no-process-exit': 2,
        'no-script-url': 0,
        'no-shadow': 0,
        'no-underscore-dangle': 0,
        'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
        'quotes': [2, 'single'],
        'pinterest/sort-imports': ['error', {
            'ignoreCase': true,
            'ignoreMemberSort': false,
            'memberSyntaxSortOrder': ['none', 'all', 'single', 'multiple']
        }],
        // TODO: these are disabled failing AirBnb rules. Fix and enable.
        // Make sure to delete them in .eslintrc.json files
        'generator-star-spacing': 0,
        'import/no-extraneous-dependencies': 0,
        'import/imports-first': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'func-names': 0,
        // autofixer for brace-style won't fix all issues
        'brace-style': 0,
        // keep it as a warning. Doesn't work well with flow
        'arrow-parens': 1,
        // autofixer breaks code
        'prefer-template': 0,
        'no-else-return': 0,
        'newline-per-chained-call': 0,
        'no-unneeded-ternary': 0,
        'no-unreachable': 0,
        'no-redeclare': 0,
        'no-throw-literal': 0,
        'no-return-assign': 0,
        'vars-on-top': 0,
        'class-methods-use-this': 0,
        // autofixer for arrow-body-style won't fix all issues
        'arrow-body-style': 0,
        'no-multi-str': 0,
        'default-case': 0,
        'import/newline-after-import': 0,
        'no-mixed-operators': 0,
        'radix': 1,
        'no-bitwise': 0,
        'no-confusing-arrow': 0,
        'no-case-declarations': 0,
        'no-prototype-builtins': 0,
        'object-property-newline': 0,
        'no-param-reassign': 0,
        'global-require': 0,
        'import/no-dynamic-require': 0,
        'no-extra-boolean-cast': 0,
        'no-restricted-syntax': 0,
        'one-var': 0,
        'no-unsafe-finally': 0,
        'no-useless-escape': 0,
        'no-continue': 0,
        'guard-for-in': 0,
        'prefer-rest-params': 1,
        'no-inner-declarations': 0,
        'react/jsx-no-bind': 0,
        'react/no-unused-prop-types': 0,
        'react/no-find-dom-node': 0,
        'react/jsx-filename-extension': 0,
        'array-callback-return': 0,
        'no-nested-ternary': 0,
        'no-new': 0,
        'no-useless-constructor': 0,
        'react/forbid-prop-types': 0,
        'no-useless-concat': 0,
        'import/prefer-default-export': 0,
        'no-template-curly-in-string': 0,
    }
};
