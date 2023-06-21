function compchoice() { //function for computer to choose play
    var compchoice = Math.random();
    if (compchoice < 0.34) return "Rock";
    if (compchoice >= 0.34 && compchoice < 0.67) return "Paper";
    else return "Scissors";
}
function playerchoice(playerpick, compselect) { //function to determine winner
    if (playerpick == compselect) return "Draw";
    if (playerpick == "Rock" && compselect == "Paper") return "Computer Wins";
    if (playerpick == "Paper" && compselect == "Rock") return "Player Wins";
    if (playerpick == "Paper" && compselect == "Scissors") return "Computer Wins";
    if (playerpick == "Rock" && compselect == "Scissors") return "Player Wins";
    if (playerpick == "Scissors" && compselect == "Paper") return "Player Wins";
    else return "Invalid Input";

}
let playerpick = prompt("Rock, Paper, or Scissors?");
const compselect = compchoice();


console.log(playerchoice(playerpick, compselect)); //function to set round numbers
function game () {
    for (let i = 0; i < 5; i++) {
        playerchoice(playerpick, compselect);
        console.log(playerchoice(playerpick, compselect));
    
}
console.log(playerchoice(playerpick, compselect));
}
