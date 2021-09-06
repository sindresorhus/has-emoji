import emojiRegex from 'emoji-regex/es2015/RGI_Emoji.js';

export default function hasEmoji(string) {
	return emojiRegex().test(string);
}
