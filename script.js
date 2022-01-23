//create el-clock

let el = document.createElement('h1');
el.id = "clock";
el.style.color = 'magento';
el.style.fontSize = '50px';
el.style.fontFamily = 'Arial';

function timerID() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    el.innerHTML = `Время:${hours}:${minutes}:${seconds}`;
};

let ourClock = setInterval(timerID, 0);
document.body.appendChild(el);

//button start
let start = document.createElement('button');
start.id = "startTime";
let nameStart = "Start";
start.innerHTML = nameStart;
start.style.width = '65px';
start.style.height = '35px';
start.style.marginRight = '40px'
start.style.backgroundColor = 'green';

//button stop
let stop = document.createElement('button');
stop.id = "stopTime";
let nameStop = "Stop";
stop.innerHTML = nameStop;
stop.style.width = '65px';
stop.style.height = '35px';
stop.style.marginRight = '40px'
stop.style.backgroundColor = 'red';

document.body.append(start, stop);

//events-onClick
startTime.onclick = function() {
    ourClock = setInterval(timerID, 1000);
}

stopTime.onclick = function() {
    clearInterval(ourClock);
}