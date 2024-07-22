const rockPapSci = [ "ROCK", "PAPER", "SCISSORS"]
let computerScore = 0
let humanScore = 0
let counter = 0
let totalRoundNum = 5

function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * rockPapSci.length)
    const computerChoice = rockPapSci[randomNum] 
    return computerChoice   
}

function getHumanChoice(){
    let humanChoice = prompt("Enter ROCK/PAPER/SCISSORS: ").toUpperCase()
   if(humanChoice == ""){
       console.log("Please enter rock/paper/scissor")
    
   }else if(humanChoice =="ROCK" || humanChoice == "PAPER" || humanChoice == "SCISSORS"){
    return humanChoice
    }else{
      console.log("value should be ROCK/PAPER/SCISSOR")
    }
}


function playGames(cmp, hum){
    counter++
    if(hum == undefined){
        console.log("wrong input for human choice")
    }else if(cmp === hum){
        console.log(`It is a draw you both choose ${hum}`)
    }else if(cmp ==="ROCK" && hum === "PAPER"){
        humanScore++
        console.log(`You win! Paper beat Rock`)
    }else if(cmp ==="SCISSORS" && hum === "ROCK"){
        humanScore++
        console.log(`you win! Rock beat Scissors`)
    }else if(cmp === "PAPER" && hum === "SCISSORS"){
        humanScore++
        console.log('you win scissors beat paper')
    }else if(cmp ==="SCISSORS" && hum === "PAPER"){
        computerScore++
        console.log("you loss! cmp: scissors to paper")
    }else if(cmp ==="PAPER" && hum === "ROCK"){
        computerScore++
        console.log("you loss! cmp: Rock to Scissor")
    }else if(cmp === "ROCK" && hum === "SCISSORS"){
        computerScore++
        console.log('you loss! cmp: Rock to scissors')
    }
    if(counter === totalRoundNum ){
        if(computerScore === humanScore){
            return console.log("it is a draw")
        }else if(computerScore > humanScore){
            return console.log(`You loss! Computer:${computerScore}, YourScore: ${humanScore}`)
        }else{
            return console.log(`you Win!! Your score:${humanScore}, computer: ${computerScore}`)
        }
    }
}

for (let i = 0; i < totalRoundNum; i++){
    const humChoice = getHumanChoice()
    const compChoice = getComputerChoice()
    playGames(compChoice, humChoice)
}