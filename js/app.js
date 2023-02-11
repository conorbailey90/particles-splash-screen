import {setDimensions, animate} from './particles.js';
const splashScreen = document.querySelector('.splash__screen')
const splashLeft = document.querySelector('.left');
const splashRight = document.querySelector('.right');
const progressBar = document.querySelector('.progress__bar');
const percentage = document.querySelector('.percentage');

let loading = true;

window.addEventListener('resize', setDimensions)

setDimensions()
animate()

async function setup(){
   setTimeout(() => {
    progressBar.style.height = '40%'
   },2000);

   setTimeout(() => {
    progressBar.style.height = '80%'
   },4000);

   setTimeout(() => {
    progressBar.style.height = '100%'
   },5000);

   setTimeout(() => {
    splashLeft.classList.add('active');
    splashRight.classList.add('active');
    progressBar.classList.add('complete')
    splashScreen.classList.add('complete')
    loading = false
   },6000);
   
}

function percentageTracker(){
    if(loading){
        let {height,top} = progressBar.getBoundingClientRect()
        let p = Math.ceil((height / window.innerHeight) * 100);
        percentage.textContent = `${p}%`;
        percentage.style.transform = `translateY(calc(${top - window.innerHeight}px)`;
        requestAnimationFrame(percentageTracker)
    }

}
setup()

percentageTracker()
