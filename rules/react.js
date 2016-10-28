module.exports = {
    ecmaFeatures: {
        'jsx': true
    },
    plugins: [
        'react'
    ],
    rules: {
        // Turn off legacy rules in legacy.js.
        'pinterest/cssclassname-extends-from-parent': 0,
        'pinterest/no-accessing-private-members': 0,
        'pinterest/no-bind-within-jquery': 0,
        'pinterest/no-callbacks-where-promises': 0,
        'pinterest/no-commented-out-tests': 0,
        'pinterest/no-data-options-dot-notation': 0,
        'pinterest/no-direct-p-pubsub-subscribe-call-in-modules': 0,
        'pinterest/no-duplicate-jquery-selectors': 0,
        'pinterest/no-goog-provide': 0,
        'pinterest/no-goog-require': 0,
        'pinterest/no-invalid-binds': 0,
        'pinterest/no-jquery-outside-of-render': 0,
        'pinterest/no-jquery-var-without-$': 0,
        'pinterest/no-listen-childListen-bind': 0,
        'pinterest/no-module-member-variables': 0,
        'pinterest/no-mutable-module-options': 0,
        'pinterest/no-private-functions-without-annotation': 0,
        'pinterest/no-reassigning-keywords': 0,
        'pinterest/no-reassigning-of-pubsub-topic-in-module': 0,
        'pinterest/no-reassigning-requires': 0,
        'pinterest/no-referencing-$el': 0,
        'pinterest/no-referencing-p-properties': 0,
        'pinterest/no-this-without-bind': 0,
        'pinterest/no-translation-outside-of-function': 0,
        'pinterest/no-unassigned-requires': 0,
        'pinterest/no-unhandled-promise-errors': 0,
        'pinterest/no-dynamic-i18n-calls': 2,
        // Enforce no enzyme.mount usage
        'pinterest/no-enzyme-mount': 2,
        // // Enforce component methods order
        // // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        'react/sort-comp': [1],
    }
};
