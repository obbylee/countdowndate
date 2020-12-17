const param = '1 jan 2021';

const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');

let countDown = () => {
    const endDate = new Date(param);
    const now = new Date();
    const distance = (endDate - now) / 1000;
    const days  = Math.floor(distance / 3600 /24);
    const hours = Math.floor((distance / 3600) % 24);
    const minutes = Math.floor((distance / 60) % 60);
    const seconds = Math.floor(distance % 60);

    daysEl.textContent = formatTime(days);
    hoursEl.textContent = formatTime(hours);
    minEl.textContent = formatTime(minutes);
    secondsEl.textContent = formatTime(seconds);
    
};

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// Initital call
countDown();
setInterval(countDown, 1000);