const audio = new Audio;
let isPlay = false;
let playNum = 0;

const playerBtn = document.getElementById('player__btn_play');
const playerTitle = document.getElementById('player__title');

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
    audio.src = e[playNum].src;
    audio.currentTime = 0;
    playerBtn.classList.add('player__btn_pause');
    playerTitle.textContent = e[playNum].name;
    audio.play();
  } else {
    isPlay = false;
    playerBtn.classList.remove('player__btn_pause');
    audio.pause();
  }
};

export function playNext (el) {
  if(playNum === el.length-1) {
    playNum = 0;
    playAudio();
  } else {
    playNum++;
    playAudio();
  }
  playerTitle.textContent = el[playNum].name;
};

export function playPref (el) {
  if(playNum === 0) {
    playNum = el.length-1;
    playAudio();
  } else {
    playNum --;
    playAudio();
  }
  playerTitle.textContent = el[playNum].name;
}

function saundsTreck() {
  if(isPlay === true) {
    isPlay = false;
    playerBtn.classList.toggle('player__btn_pause');
  }
}

