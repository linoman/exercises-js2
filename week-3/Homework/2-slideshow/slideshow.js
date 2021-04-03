
let jumbotron = document.querySelector(".jumbotron")

let imag0 = "./example-screenshots/kitten11.jpg"
let imag1 = "./example-screenshots/kitten3.jpg"
let imag2 = "./example-screenshots/kitten2.jpg"

let images =[imag0,imag1,imag2]
let index = 0
let intervalRef = 0
console.log(intervalRef)

let imgElement = document.querySelector("#image")
const forwardbtn = document.querySelector("#forward")
const backbtn = document.querySelector("#back") 
const stopBtn = document.querySelector("#stop")
const autoBack = document.querySelector("#backA")
const autoForward = document.querySelector("#forwardA")


forwardbtn.addEventListener('click', () =>{
  hacerForward()
  
})

backbtn.addEventListener('click',() => {
  goBack()
})


stopBtn.addEventListener('click',() =>{
  clearInterval(intervalRef);
})


autoForward.addEventListener('click', () =>{
  clearInterval(intervalRef); // destroy current process
  intervalRef = setInterval(hacerForward,2000) // init 1st process
})

autoBack.addEventListener('click',() =>{
 
  clearInterval(intervalRef); 
  intervalRef =  setInterval(goBack,2000)
})


function hacerForward() {
  if (index < images.length - 1 ) {
    index++
    imgElement.src= images[index]
  }
}

function goBack() {
  if (index > 0  && index < images.length) {
   index--
   imgElement.src= images[index]
  }
  
}

