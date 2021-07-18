document.addEventListener('click', audioPlay);
function audioPlay() {
  document.getElementById('audio').play();
  document.removeEventListener('click', audioPlay);
}