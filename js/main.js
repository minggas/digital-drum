/* jshint esversion:6 */

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode||e.target.dataset.key}"]`);
    const pad = document.querySelector(`.drum-pad[data-key="${e.keyCode||e.target.dataset.key}"]`);
    const display = document.getElementById('display');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    pad.classList.add('on');
    display.querySelector('span').innerHTML = pad.id;
     
}

function removeTransition(e) {
    if (e.propertyName !== 'background-color') {
        return;
    }
    this.classList.remove('on');
}
const pad = document.querySelectorAll('.drum-pad');
pad.forEach(el => el.addEventListener('transitionend', removeTransition));
pad.forEach(el => el.addEventListener('click', playSound));
window.addEventListener('keydown', playSound);