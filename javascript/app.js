var hour1 = document.getElementById("hours")
var minuts1 = document.getElementById("minuts")
var second1 = document.getElementById("second")
var none1 = document.getElementById("neno")
var buttonStart = document.getElementById("button_start")
var buttonStop = document.getElementById("button_stop")
var buttonReset = document.getElementById("button_reset")

var neno = 0;
var min = 0;
var sec = 0;
var hor = 0;
var timer;

none1.innerHTML = neno;
hour1.innerHTML = hor;
minuts1.innerHTML = min;
second1.innerHTML = sec;

function toggleButton(buttonStart, enable) {
    buttonStart.disabled = !enable;
}
function toggleButton(buttonStop, enable) {
    buttonStop.disabled = !enable;
}
function toggleButton(buttonReset, enable) {
    buttonReset.disabled = !enable;
}


function start() {
    timer = setInterval(function () {
        neno++
        none1.innerHTML = neno;
        hour1.innerHTML = hor;
        minuts1.innerHTML = min;
        second1.innerHTML = sec;
        console.log(min + "m" + " : " + sec+"s"+" : "+neno+"n");
        if (neno >99) {
            neno = 0;
            sec++
        }
        if (sec > 59) {
            sec = 0;
            min++
        }
        if (min > 59) {
            min = 0;
            hor++
            console.log(hor)
        }
        
    },  9.9)
    toggleButton(buttonStart, false);
    toggleButton(buttonStop, true);
    toggleButton(buttonReset, true);

}

buttonStart.addEventListener("click", start)

function stopTimer() {
    clearInterval(timer);
    toggleButton(buttonStart, true);
    toggleButton(buttonStop, false);
    toggleButton(buttonReset, true)
    console.log(min + ":" + sec);

}


buttonStop.addEventListener("click", stopTimer)


function resetTimer() {
    toggleButton(buttonStart, true)
    toggleButton(buttonReset, false)
    toggleButton(buttonStop, false)

    clearInterval(timer)
neno=0;
    sec = 0;
    min = 0;
    hor = 0;
    none1.innerHTML = neno;
    hour1.innerHTML = hor;
    minuts1.innerHTML = min;
    second1.innerHTML = sec;

}

buttonReset.addEventListener("click", resetTimer)



