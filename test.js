import test from 'ava';
import m from '.';

test(t => {
	t.true(m('Unicorn 🦄'));
	t.true(m('🌈'));
	t.true(m('❤️ Heart'));
	t.false(m('Ø'));
	t.false(m('Cat'));
});
