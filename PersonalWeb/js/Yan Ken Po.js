$(document).ready(function () {
    /*const rock = document.getElementById("pick-rock");
    const paper = document.getElementById("pick-paper");
    const scissor = document.getElementById("pick-scissors");*/
    const user_score_p = document.getElementById("user-score-p");
    const machine_score_p = document.getElementById("machine-score-p");
    const you_p = document.getElementById("you-p");
    const machine_p = document.getElementById("machine-p");
    const rock = 0;
    const paper = 1;
    const scissors = 2;
    var user_score = 0;
    var machine_score = 0;
    var machine_pick;

    $("#home-button").click(function (e) { 
        e.preventDefault();
        window.location.href = "./index.html";
    });

    $('#pick-rock').click(function (e) {
        e.preventDefault();
        //console.log("Rock");
        $("#user-choice-image").attr("src", "./resources/stone-symbol.png");
        play(rock);
    });

    $('#pick-paper').click(function (e) {
        e.preventDefault();
        //console.log("Paper");
        $("#user-choice-image").attr("src", "./resources/paper-symbol.png");
        play(paper);
    });

    $('#pick-scissors').click(function (e) {
        e.preventDefault();
        // console.log("Scissors");
        play(scissors);
        $("#user-choice-image").attr("src", "./resources/scissors-symbol.png");

    });

    function play(user) {
        machine_pick = machinePick();
        updatePicks(user,machine_pick);
        changeImage(machine_pick);
        let winner = determineWinner(user, machine_pick);
        addScore(winner);
        updateScore();
    }

    function machinePick() {
        let pick = (Math.floor(Math.random() * 3));
        //console.log(pick);
        return pick;
    }

    function determineWinner(a, b) {
        //Compara el input del usuario con la elección de la máquina, si gana devuelve verdadero si pierde devuelve falso 
        if (a == b) {
            return 0;
        }
        else if ((a - b + 3) % 3 === 1) {
           // console.log("user wins");
            return 1;
        }
        else {
           // console.log("machine wins");
            return 2;
        }
        //Cambia el score del ganador
    }

    function addScore(ganador) {
        switch (ganador) {
            case 1:
                user_score++;
                break;
            case 2:
                machine_score++;
                break;
            default:
                break;
        }
    }

    function updateScore() {
        user_score_p.innerText = user_score;
        machine_score_p.innerText = machine_score;
    }

    function pickNames(val) {
        switch (val) {
            case 0:
                return "rock";
                break;
            case 1: return "paper";
                break;
            case 2: return "scissors";
                break;
            default:
                return "kys";
                break;
        }
    }

    function changeImage(sauce) {
        switch (sauce) {
            case 0:
                $("#machine-choice-image").attr("src", "./resources/stone-symbol.png");
                break;
            case 1:
                $("#machine-choice-image").attr("src", "./resources/paper-symbol.png");
                break;
            case 2:
                $("#machine-choice-image").attr("src", "./resources/scissors-symbol.png");
                return "scissors";
                break;
            default:
                return "kys";
                break;
        }
    }

    function updatePicks(user,machine) {
        you_p.innerText = pickNames(user);
        machine_p.innerText = pickNames(machine);
    }
});



