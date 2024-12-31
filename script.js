function updateClock() {
    var now = new Date();

    var secondTime = now.getSeconds();
    var minuteTime = now.getMinutes();
    var hourTime = now.getHours();

    var secondRotation = 6*secondTime;
    var minuteRotation = 6*minuteTime;
    var hourRotation = 30*hourTime + minuteTime/2;

    document.querySelector('.second-hand').style.transform = `rotate(${secondRotation}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteRotation}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourRotation}deg)`;
}

setInterval(updateClock,1000);

updateClock();