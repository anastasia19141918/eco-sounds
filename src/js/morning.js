import  sounds from './sounds.js';

const saundRange = document.getElementById('saund__range');
const playerRange = document.getElementById('player__range');

saundRange.addEventListener('input', function(el){
  const value = el.target.value;
  saundRange.style.background = `linear-gradient(to right, #ffffff 0%, #ffffff ${value}%, #c8c8c8 ${value}%, #c8c8c8 100%)`;
});

playerRange.addEventListener('input', function(el){
  const value = el.target.value;
  playerRange.style.background = `linear-gradient(to right, #ffffff 0%, #ffffff ${value}%, #c8c8c8 ${value}%, #c8c8c8 100%)`;
})

