const backgroundBtn = document.getElementById('background__btn');
const pop = document.getElementById('pop');
const popClose = document.getElementById('pop__close');
const popBody = document.getElementById('pop__body');
const popBtnClose = document.getElementById('pop__btn-close');

const popItemns = document.querySelectorAll('.pop__itemn');


backgroundBtn.addEventListener('click', function(){
  pop.classList.add('pop__active');
});

popClose.addEventListener('click', function(){
  pop.classList.remove('pop__active');
});

popItemns.forEach(function(el){
  el.addEventListener('click', function() {
    pop.classList.remove('pop__active');
  })
})

document.addEventListener('click', function(el){
  const click = el.target;
  if(click === pop) {
    pop.classList.remove('pop__active');
    
  }
})

