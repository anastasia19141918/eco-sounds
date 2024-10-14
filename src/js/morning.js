import sounds from './sounds.js';
import {showTreck} from './activeTreck.js';
import {playAudio} from './activeTreck.js';
import {playNext} from './activeTreck.js';
import {playPref} from './activeTreck.js';
 
const saundRange = document.getElementById('saund__range');
const playerRange = document.getElementById('player__range');
const playlist = document.getElementById('playlist');
const playerBtn = document.getElementById('player__btn_play');
const playerTitle = document.getElementById('player__title');

const playerBtnNext = document.getElementById('player__btn_next');
const playerBtnPrev = document.getElementById('player__btn_prev');

showTreck(sounds[0]);
playerBtnNext.addEventListener('click', () => playNext(sounds[0]));
playerBtnPrev.addEventListener('click', () => playPref(sounds[0]));

const audio = new Audio;
let isPlay = false;
let playNum = 0;

playerBtn.addEventListener('click', () => playAudio(sounds[0]));

saundRange.addEventListener('input', function(el){
  const value = el.target.value;
  saundRange.style.background = `linear-gradient(to right, #ffffff 0%, #ffffff ${value}%, #c8c8c8 ${value}%, #c8c8c8 100%)`;
});

playerRange.addEventListener('input', function(el){
  const value = el.target.value;
  playerRange.style.background = `linear-gradient(to right, #ffffff 0%, #ffffff ${value}%, #c8c8c8 ${value}%, #c8c8c8 100%)`;
});











