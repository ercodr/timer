let sec = document.getElementById('sec');
let min = document.getElementById('min');
let hr = document.getElementById('hr');

const reset = document.getElementById('reset');
const stop = document.getElementById('stop');

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

    }, 1000);

});


reset.addEventListener('click', () => {
    
    clearInterval(intervalID);
    min.innerText = '00';
    sec.innerText = 0;
    hr.innerText = '00';

    startTimer.removeAttribute('disabled');
});

stop.addEventListener('click', () => {
    
    clearInterval(intervalID);
    startTimer.removeAttribute('disabled');
});