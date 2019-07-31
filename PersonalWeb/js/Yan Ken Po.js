$(document).ready(function () {
    const rock = document.getElementById("pick-rock");
    const paper = document.getElementById("pick-paper");
    const scissor = document.getElementById("pick-scissors");
    const user_score_p = document.getElementById("user-score");
    const machine_score_p = document.getElementById("machine-score");
    const user_choice_image = document.getElementById("user-choice-image");
    const machine_choice_image = document.getElementById("machine-choice-image");

    var user_score = 0;
    var machine_score = 0;

    $('#pick-rock').click(function (e) {
        e.preventDefault();
        console.log("Rock");
        $("#user-choice-image").attr("src", "./resources/stone-symbol.png");
        play();
        addScore(true);
    });

    $('#pick-paper').click(function (e) {
        e.preventDefault();
        console.log("Paper");
        $("#user-choice-image").attr("src", "./resources/paper-symbol.png");
        play();
        addScore(false);
    });

    $('#pick-scissors').click(function (e) {
        e.preventDefault();
        console.log("Scissors");
        play();
        $("#user-choice-image").attr("src", "./resources/scissors-symbol.png");

    });

    function play() {
        //Compara el input del usuario con la elección de la máquina, si gana devuelve verdadero si pierde devuelve falso   
        
        




        //Cambia el score del ganador
        user_score_p.innerText = user_score;
        machine_score_p.innerText = machine_score;
    }

    function addScore(ganador) {
        if (ganador) {
            user_score += 1;
        } else {
            machine_score += 1;
        }
    }
});



