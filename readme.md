# has-emoji

> Check whether a string has any emoji

This can be useful when you need to prevent emoji in user input, for example, for usernames.

## Install

```sh
npm install has-emoji
```

## Usage

```js
import hasEmoji from 'has-emoji';

hasEmoji('Unicorn 🦄');
//=> true

hasEmoji('Cat');
//=> false
```

## Related

- [@sindresorhus/is](https://github.com/sindresorhus/is) - Type check values
