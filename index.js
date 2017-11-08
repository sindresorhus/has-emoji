'use strict';
const emojiRegex = require('emoji-regex/es2015');

module.exports = text => emojiRegex().test(text);
