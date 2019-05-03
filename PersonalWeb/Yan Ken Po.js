
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
var userScore = document.getElementById("userScore");
var machineScore = document.getElementById("machineScore");
var uPoints = 0;
var mPoints = 0;
const restart = document.getElementById("restart");
const message = document.getElementById("message");
const homeButton = document.getElementById("homeButton");

homeButton.addEventListener('click',function(){
    location.href = "index.html";
})

restart.addEventListener('click',function(){
    uPoints = 0;
    mPoints = 0;
    ChangeScoreBoard(0,0);
})

rock.addEventListener('click', function () {
    console.log("Rock");
    Play('r', MachineChoice());
})


paper.addEventListener('click', function () {
    console.log("Paper");
    Play('p', MachineChoice());
})


scissor.addEventListener('click', function () {
    console.log("Scissor");
    Play('s', MachineChoice());
})

function Play(userChoice, machineChoice) {

    message.innerHTML = "You played: " + Rename(userChoice) + " and the machine played: " + Rename(machineChoice);

    console.log("Machine Choice: " + machineChoice + " User Choice: " + userChoice);
    if (userChoice === machineChoice) {
        //Draw
        console.log("Draw");
        message.innerHTML += " .Draw";
    }
    else if (userChoice === 'r' && machineChoice === 'p') {
        //Lose
        console.log("Lose");
        mPoints += 1;
        ChangeScoreBoard(uPoints,mPoints);
        message.innerHTML += " .Lose";
    }
    else if (userChoice === 'p' && machineChoice === 's') {
        //Lose
        console.log("Lose");
        mPoints += 1;
        ChangeScoreBoard(uPoints,mPoints);
        message.innerHTML += " .Lose";
    }
    else if (userChoice === 's' && machineChoice === 'r') {
        //Lose
        console.log("Lose");
        mPoints += 1;
        ChangeScoreBoard(uPoints,mPoints);
        message.innerHTML += " .Lose";
    }
    else {
        //Win
        console.log("win");
        uPoints +=1;
        ChangeScoreBoard(uPoints,mPoints);
        message.innerHTML += " .Win";
    }


}

function MachineChoice() {
    var val = Math.random();
    console.log(val);
    if (val < 0.33) {
        return 'r';
    }
    else if (val < 0.66) {
        return 'p';
    }
    else {
        return 's';
    }
}

function ChangeScoreBoard(u,m) {
        userScore.innerHTML = u;
        machineScore.innerHTML = m;
    
}

function Rename(result){

    if(result === 'p'){
        return "Paper";
    }
    else if(result === 'r'){
        return "Rock";
    }
    else{
        return "Scissors";
    }
}