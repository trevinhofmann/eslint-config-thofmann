var base = require('./config/base');
var es6 = require('./config/es6');

var config = {
    env: {
        node: true,
        browser: true,
        es6: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    rules: Object.assign({}, base.rules, es6.rules)
};

module.exports = config;
