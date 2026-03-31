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