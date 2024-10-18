import sounds from './sounds.js';
import {showTreck} from './showTreck.js'

showTreck(sounds[3]);

const audio = new Audio;
let isPlay = false;
let playNum = 0;

const playerBtnPlayRandom = document.getElementById('player__btn_play-random');
const playerTitle = document.getElementById('player__title');

const playerBtnNext = document.getElementById('player__btn_next');
const playerBtnPrev = document.getElementById('player__btn_prev');
playerBtnNext.addEventListener('click', () => playNext(sounds[2]));
playerBtnPrev.addEventListener('click', () => playPref(sounds[2]));
audio.addEventListener('ended', playNext);

playerBtnPlayRandom.addEventListener('click', playAudioRandom);

function playAudioRandom () {
  if (isPlay === false) {
    isPlay = true;
    audio.currentTime = 0;
    playerBtnPlayRandom.classList.add('player__btn_pause');
    audio.src = sounds[3][playNum].src;
    playerTitle.textContent = sounds[3][playNum].name;
    audio.play();
  }
  else {
    isPlay = false;
    playerBtnPlayRandom.classList.remove('player__btn_pause');
    audio.pause();
  }
};

function saundsTreck() {
  if(isPlay === true) {
    isPlay = false;
    audio.play();
  }
};


function playNext (el) {
  if(playNum === el.length-1) {
    playNum = 0;
    saundsTreck() 
  } else {
    playNum++;
    saundsTreck() 
  }
  playAudioRandom();
};

function playPref (el) {
  if(playNum === 0) {
    playNum = el.length-1;
    saundsTreck()
  } else {
    playNum --;
    saundsTreck()
  }
  playAudioRandom();
};

//progress start

const playerRange = document.getElementById('player__range');
const saundBtn = document.getElementById('saund__btn');
const saundRange = document.getElementById('saund__range');

const current = document.getElementById('current');
const lenghtTime = document.getElementById('lenghtTime');

playerRange.addEventListener('change', setProgressPlay);
saundBtn.addEventListener('click', playSaund);
saundRange.addEventListener('input', saundInput);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('timeupdate', timeProgressBar);

export function updateProgress(e) {
  playerRange.value = (e.target.currentTime / e.target.duration) * 100;
  const value = playerRange.value;
  playerRange.style.background = `linear-gradient(to right,  #ffffff 0%, #ffffff ${value}%, #c8c8c8 ${value}%, #c8c8c8  100%)`;
}

function setProgressPlay () {
  audio.currentTime = (playerRange.value * audio.duration) / 100;
  const value = playerRange.value;
  playerRange.style.background = `linear-gradient(to right, #ffffff 0%, #ffffff ${value}%, #c8c8c8 ${value}%, #c8c8c8  100%)`;
}

//progress end

//time progress bsr start

function timeProgressBar () {
  audio.value = (playerRange.value * audio.duration) / 100;
  current.textContent = audioCurrent();
  lenghtTime.textContent = audioLenght();
}

function audioCurrent() {
  let min = Math.floor(audio.currentTime / 60);
  if (min < 10) {
    min = '0' + String(min);
  }

  let sec = Math.floor(audio.currentTime % 60);
  if (sec < 10) {
    sec = '0' + String(sec);
  }

  if (isNaN(min) || isNaN(sec)) {
    min = '00';
    sec = '00';
  }

  return `${min}:${sec}`;
}

function audioLenght () {
  let min = Math.floor(audio.duration / 60);
  if (min < 10) {
    min = '0' + String(min);
  }

  let sec = Math.floor(audio.duration % 60);
  if (sec < 10) {
    sec = '0' + String(sec);
  }

  if (isNaN(min) || isNaN(sec)) {
    min = '00';
    sec = '00';
  }

  return `${min}:${sec}`;
}

//time progress bsr end

// saund start

export function playSaund() {
  
  if (!saundBtn.classList.contains('saund__btn__not__active')) {
    saundBtn.classList.add('saund__btn__not__active');
    saundBtn.classList.remove('saund__btn');
    audio.volume = 0;
    saundRange.style.background = `linear-gradient(to right, #ffffff 0%, #ffffff 0%, #c8c8c8 0%, #c8c8c8 100%)`;
    saundRange.value = '0';
  }
  else {
    saundBtn.classList.remove('saund__btn__not__active');
    saundBtn.classList.add('saund__btn');
    audio.volume = 1;
    saundRange.style.background = `linear-gradient(to right, #ffffff 0%, #ffffff 50%, #c8c8c8 50%, #c8c8c8 100%)`;
    saundRange.value = '50%';
  }
};

export function saundInput(el) {
  const value = el.target.value;
  saundRange.style.background = `linear-gradient(to right, #ffffff 0%, #ffffff ${value}%, #c8c8c8 ${value}%, #c8c8c8 100%)`;

  if (value === this.min) {
    audio.volume = 0;
    saundBtn.classList.remove('saund__btn');
    saundBtn.classList.add('saund__btn__not__active');
  } else {
    audio.volume = value / 100;
    saundBtn.classList.add('saund__btn');
    saundBtn.classList.remove('saund__btn__not__active');
  }
}

//saund end*/


