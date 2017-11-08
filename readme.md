# has-emoji [![Build Status](https://travis-ci.org/sindresorhus/has-emoji.svg?branch=master)](https://travis-ci.org/sindresorhus/has-emoji)

> Check whether a string has any emoji

This can be useful when you need to prevent emoji in user input, for example, for usernames.


## Install

```
$ npm install has-emoji
```


## Usage

```js
const hasEmoji = require('has-emoji');

hasEmoji('Unicorn 🦄');
//=> true

hasEmoji('Cat');
//=> false
```


## Related

- [@sindresorhus/is](https://github.com/sindresorhus/is) - Type check values


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
