const regex = /\p{RGI_Emoji}/v;

export default function hasEmoji(string) {
	return regex.test(string);
}
