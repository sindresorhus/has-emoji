import {expectType} from 'tsd';
import hasEmoji = require('.');

expectType<boolean>(hasEmoji('Unicorn 🦄'));
