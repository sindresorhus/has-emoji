import test from 'ava';
import hasEmoji from './index.js';

test('main', t => {
	t.true(hasEmoji('Unicorn 🦄'));
	t.true(hasEmoji('🌈'));
	t.true(hasEmoji('❤️ Heart'));
	t.false(hasEmoji('Ø'));
	t.false(hasEmoji('Cat'));
});
