/**
Check whether a string has any emoji.

@example
```
import hasEmoji = require('has-emoji');

hasEmoji('Unicorn 🦄');
//=> true

hasEmoji('Cat');
//=> false
```
*/
declare function hasEmoji(text: string): boolean;

export = hasEmoji;
