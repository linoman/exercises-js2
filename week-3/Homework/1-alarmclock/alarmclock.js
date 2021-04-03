


function setAlarm() {
  let btnButon = document.querySelector("#set")

  btnButon.innertext = document.createElement("click")
let input = document.querySelector("#alarmSet")
input.innertext =  "number"

btnButon.appendChild(input)
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click",  () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
