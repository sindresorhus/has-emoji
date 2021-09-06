import {expectType} from 'tsd';
import hasEmoji from './index.js';

expectType<boolean>(hasEmoji('Unicorn 🦄'));
