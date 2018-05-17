/* jshint esversion:6 */

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode||e.target.dataset.key}"]`);
    const btn = document.querySelector(`.btn[data-key="${e.keyCode||e.target.dataset.key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    btn.classList.add('on');
}

function removeTransition(e) {
    if (e.propertyName !== 'background-color') {
        return;
    }
    this.classList.remove('on');
}
const btn = document.querySelectorAll('.btn');
btn.forEach(el => el.addEventListener('transitionend', removeTransition));
btn.forEach(el => el.addEventListener('click', playSound));
window.addEventListener('keydown', playSound);