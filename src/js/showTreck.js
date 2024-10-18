const playlist = document.getElementById('playlist');

export function showTreck(el) {
  el.forEach(function(e, index){
    const li = document.createElement('li');
    li.classList.add('trek');
    li.textContent = e.name;
    playlist.append(li);
  })
};