'use strict';
const emojiRegex = require('emoji-regex/es2015');

module.exports = string => emojiRegex().test(string);
