/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

let colors = ["blue","yellow","tomato","magenta","red","black"]
let index = [];
let backgroundElement = document.querySelector("body")
let mainBody = document.querySelector("#main")


setTimeout(function(){
  
   

    for (index = 0; index < colors.length; index++) {
    backgroundElement.style.backgroundColor = colors[index++];
   
}
    
    

  
  
},1000)

