
  let intervalRef = 0;
 
function setAlarm() {
  clearInterval(intervalRef);
  let input = document.getElementById("alarmSet").value;
 

  
  intervalRef = setInterval(() => {
    let timeRemain = document.getElementById("timeRemaining")
    if (input == 0) {
    
      clearInterval(intervalRef)
      playAlarm();
    }

/*  
    IF/ELSE CONDITION
    let minutes;
    if (parseInt(input/60) < 10) {
       minutes = `0${parseInt(input/60)}`
    } else {
       minutes = parseInt(input/60)
    }
*/

// TERNARY OPERATION
    let minutes = parseInt(input/60) < 10 ? `0${parseInt(input/60)}` : parseInt(input/60);
    let seconds = parseInt(input % 60) < 10 ? `0${parseInt(input % 60)}` : parseInt(input % 60);
  
    timeRemain.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
    input = input - 1;
  }, 1000)

}





// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  
   
  });

  document.getElementById("stop").addEventListener("click",  () => {
    pauseAlarm();
    clearInterval(intervalRef);
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
 
}

window.onload = setup;





//  function updateCount() {
//    const minute = Math.floor(time /60);
//    let seconds = time % 60;
//    timeRemain.innerHTML = `${minute} : ${seconds} `;
//    time--;
//  }
 

//  btnButon.addEventListener('click',() =>{

//  })
