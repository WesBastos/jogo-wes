const wes = document.querySelector('.wes');
const pipe = document.querySelector('.pipe');

const jump = () => {
     wes.classList.add('jump');

   setTimeout(() => {
     wes.classList.remove('jump');
   }, 500);
}

const loop = setInterval(() => {
     
    const pipePosition = pipe.offsetLeft;
    const wesPosition = +window.getComputedStyle(wes).bottom.replace('px', '')

   console.log(wesPosition);

    if (pipePosition <= 130 && pipePosition > 0 && wesPosition < 100) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        wes.style.animation = 'none';
        wes.style.bottom = `${wesPosition}px`;

        wes.src = './IMAGE/game-over.png';
        wes.style.width = '115px'
        wes.style.marginLeft = '25px'
      
        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);