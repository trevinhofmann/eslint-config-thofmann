var base = require('./config/base');

var config = {
    env: {
        node: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: 5,
        sourceType: 'module'
    },
    rules: Object.assign({}, base.rules)
};

module.exports = config;
