
function   setAlarm() {
    let value = document.querySelector("#alarmSet").value
    let value2 = parseInt(value) +1;
    let change = 1000;

    // Intervalo segundo modificar el dom
let rep = setInterval(() =>{
    let time = document.querySelector("#timeRemaining");

    let min = parseInt(value/60) < 10 ? `0${parseInt(value/60)}` : parseInt(value/60) 
    let seg = value % 60 < 10 ? `0${value % 60}` : value % 60;

    time.innerHTML = ` ${min}:${seg}`

    value = value -1;

},change)

// crear setTimeout para controlar el setInterval

setTimeout(() =>{
    clearInterval(rep)
},value2 * change);

// utilizar el numero para activar el sonido del input
setTimeout(() => playAlarm().value2 * change)
    
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
