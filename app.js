let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hr = document.getElementById('hr');

const reset = document.getElementById('reset');
const stop = document.getElementById('stop');
const frame = document.getElementById('frame');

// START TIMER BUTTON EVENT
let startTimer = document.getElementById('start-timer');

let intervalID;

startTimer.addEventListener('click', () => {
    
    intervalID = setInterval( () => {
        sec.innerText ++;

        if(sec.innerText == 60){
            min.innerText ++ + ' min';
            sec.innerText = 0 ;
        } else if(min.innerText == 60){
            hr.innerText ++;
            min.innerText = 0;
        };

        startTimer.setAttribute('disabled', 'disabled');

        frame.classList.add('pulse');
        stop.classList.remove('scale');

    }, 1000);


});


reset.addEventListener('click', () => {
    
    clearInterval(intervalID);
    min.innerText = '00';
    sec.innerText = 0;
    hr.innerText = '00';

    startTimer.removeAttribute('disabled');
    frame.classList.remove('pulse');
    stop.classList.remove('scale');
});

stop.addEventListener('click', () => {
    
    clearInterval(intervalID);
    startTimer.removeAttribute('disabled');
    frame.classList.remove('pulse');

    if(sec.innerText != 0){
        stop.classList.add('scale');
    }
});