const randomNumberHtml = document.querySelector(".randomNumber")
const rollButtonHtml = document.querySelector(".rollButton")
const clickableDiv = document.querySelector(".innerMainDiv")
const rouletteStatusImg = document.querySelector(".rouletteStatusImg")

randomNumberHtml.innerHTML = "click"

var bulletNumber = 0

// rollButtonHtml.addEventListener("click", RollRoulette)
clickableDiv.addEventListener("click", RollRoulette)
rouletteStatusImg.src = "pictures/logo.png"


function RollRoulette(){
    bulletNumber = getRandomNumber(0, 6)
    var roll = getRandomNumber(0, 6)
    
    if(roll == bulletNumber){
        randomNumberHtml.innerHTML = "DRINK"
        rouletteStatusImg.src = "pictures/skull.png"
    }
    else{
        randomNumberHtml.innerHTML = "PASS"
        rouletteStatusImg.src = "pictures/angel.png"
    }
    
    console.log("Рулетка прокрутилась, результат: ", randomNumberHtml.innerHTML)
}

function getRandomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min)
}