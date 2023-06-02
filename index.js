const a = document.querySelector('.gg')
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
const gg = document.querySelector('#button');
let color = null;
gg.addEventListener('click', (e) => {
    color = 'rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')';
    a.style.backgroundColor = color;
   
})

a.addEventListener('click', e => {
    navigator.clipboard.writeText(color)
    alert('the color copied to clipboard')
})