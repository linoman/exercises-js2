function ChangeColor(){
    let colorBg = document.querySelector(".Jumbotron")
    let colorDonatebike =document.querySelector(".btn-primary") 
    let colorVolunter =document.querySelector(".btn-secondary") 


    colorBg.style.backgroundColor = `#588fbd`
    colorDonatebike.style.backgroundColor =  `#ffa500`
    colorVolunter.style.backgroundColor = `black`
    colorVolunter.style.color = `white`
}
let butonAzul = document.querySelector("#blueBtn")
butonAzul.addEventListener("click",ChangeColor) 
function ColorOrange(){
    let colorBg = document.querySelector(".Jumbotron")
    let colorDonatebike =document.querySelector(".button >.btn-primary") 
    let colorVolunter =document.querySelector(".btn-secondary") 


    colorBg.style.backgroundColor =  `#f0ad4e`
    colorDonatebike.style.backgroundColor =  `#ffa500`
    colorVolunter.style.backgroundColor = `black`
    colorVolunter.style.color = `white`
}
let butonOrange = document.querySelector("#orangeBtn")
butonOrange.addEventListener("click",ColorOrange)

function ColorGreen(){
    let colorBg = document.querySelector(".Jumbotron")
    let colorDonatebike =document.querySelector(".btn-primary") 
    let colorVolunter =document.querySelector(".btn-secondary") 


    colorBg.style.backgroundColor =`#87ca8a`
    colorDonatebike.style.backgroundColor =  `black`
    colorVolunter.style.backgroundColor = `#8c9c08`

   
}

let butonGreen = document.querySelector("#greenBtn")
butonGreen.addEventListener("click",ColorGreen)