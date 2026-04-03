let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3); //generate random numbers 0, 1, 2.
    if (randomNumber === 0) {
        return "rock";
    } 
    else if (randomNumber === 1) {
        return "paper";
    }
    else if (randomNumber === 2) {
        return "scissors";
    } else {
        return "error";
    }
}

function getHumanChoice(playerChoice){

    let cleanedPlayerChoice = playerChoice.trim();
    cleanedPlayerChoice = cleanedPlayerChoice.toLowerCase();
    return cleanedPlayerChoice;
}

function playRound(humanChoice,computerChoice){
  if (humanChoice === computerChoice){
    console.log("empate la batalla continua");
    return "ties";

  } else if ((humanChoice === "rock" && computerChoice === "scissors") 
    || (humanChoice === "paper" && computerChoice === "rock") 
    || (humanChoice === "scissors" && computerChoice === "paper")){
        
        humanScore += 1;
        console.log("¡Ganaste!");
        return "player";
  } else {
    computerScore += 1;
    console.log("Computadora gano.");
    return "computer";
  }
    console.log(`Humano: ${humanScore} - Computadora: ${computerScore}`);

}


function playGame(){

    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i<= 5; i++){

        let playerChoice = window.prompt(`Prepare yourself for the ${i}battle choose between rock, paper or scissors`);
        let cleanedPlayerChoice = getHumanChoice(playerChoice);
        let computerChoice = getComputerChoice();

        console.log(`Tu elegiste: ${cleanedPlayerChoice}`);
        console.log(`Computadora eligio: ${computerChoice}`);

        playRound(cleanedPlayerChoice, computerChoice);
        console.log(`Score - Player: ${humanScore} - Computadora: ${computerScore}`);

    }

    
    

    console.log("\n Resultado final");

    console.log(`Humano: ${humanScore} - Computadora: ${computerScore}`);
    
    if (humanScore>computerScore){
        console.log(`¡Felicidades! Ganaste ${humanScore} a ${computerScore}`);

    }else if (computerScore > humanScore) {
        console.log(`Perdiste. Computadora gano ${computerScore} a ${humanScore}`);

    }else {
        console.log(`Empate final: ${humanScore} a ${computerScore}`);
    }

}

playGame();



