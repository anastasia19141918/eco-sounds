import sounds from './sounds.js';

const audio = new Audio;
let isPlay = false;
let playNum = 0;

const playerBtn = document.getElementById('player__btn_play');
const playerTitle = document.getElementById('player__title');
const playerRange = document.getElementById('player__range');

const current = document.getElementById('current');
const lenghtTime = document.getElementById('lenghtTime');

playerBtn.addEventListener('click', playAudio);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', playNext);
audio.addEventListener('timeupdate', timeProgressBar);
playerRange.addEventListener('change', setProgressPlay);

export function showTreck(el) {
  el.forEach(function(e, index){
    const li = document.createElement('li');
    li.classList.add('trek');
    li.textContent = e.name;
    playlist.append(li);
  })
};
 export function playAudio(e) {
  if(isPlay === false) {
    isPlay = true;
    audio.src = sounds[0][playNum].src;
    audio.currentTime = 0;
    playerBtn.classList.add('player__btn_pause');
    playerTitle.textContent = sounds[0][playNum].name;
    audio.play();
  } 
  
  else {
    isPlay = false;
    playerBtn.classList.remove('player__btn_pause');
    audio.pause();
  }
};

export function playNext (el) {
  if(playNum === el.length-1) {
    playNum = 0;
    saundsTreck() 
  } else {
    playNum++;
    saundsTreck() 
  }
  playAudio();
};

export function playPref (el) {
  if(playNum === 0) {
    playNum = el.length-1;
    saundsTreck()
  } else {
    playNum --;
    saundsTreck()
  }
  playAudio();
}

function saundsTreck(el) {
  if(isPlay === true) {
    isPlay = false;
    playerBtn.classList.toggle('player__btn_pause');
    audio.play();
  }
}

//progress start

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










