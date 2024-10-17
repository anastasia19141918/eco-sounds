import sounds from './sounds.js';
import {showTreck} from './activeTreck.js';
import {playNext} from './activeTreck.js';
import {playPref} from './activeTreck.js';

const playerBtnNext = document.getElementById('player__btn_next');
const playerBtnPrev = document.getElementById('player__btn_prev');

showTreck(sounds[0]);
playerBtnNext.addEventListener('click', () => playNext(sounds[0]));
playerBtnPrev.addEventListener('click', () => playPref(sounds[0]));
























