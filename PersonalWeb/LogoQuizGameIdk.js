const logo = document.getElementsByClassName('logo');
const modalbody = document.getElementsByClassName('modal-body');
var modal = document.getElementById('myModal');
var winner = 0;
var logos = [];
var newlogos = [];
var clickeddiv;
var newGame = true;

logos.push("Alienware.png");
logos.push("Apple.png");
logos.push("Cocacola.png");
logos.push("facebook.png");
logos.push("google.png");
logos.push("Huawei.png");
logos.push("Instagram.png");
logos.push("JuanValdez.png");
logos.push("Linux.png");
logos.push("McDonalds.png");
logos.push("MetroMedellin.png");
logos.push("Microsoft.png");
logos.push("Motorola.png");
logos.push("Pepsi.png");
logos.push("Snapchat.png");
logos.push("stackOverflow.png");
logos.push("Starbucks.png");
logos.push("Upb.png");
logos.push("Volkswagen.png");

// When the user clicks on the button, open the modal
function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    if(newGame){
        Play();
        newGame = false;
    }  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal()
    }
}

function RandomNumberRange(min, max) {
    var random = Math.floor(Math.random() * (+max - +min) + min);
    return random;
}

function GetWinner() {
    return RandomNumberRange(0, logos.length);
}

function SetWinner(position) {
    var winnerLogos = logos;
    winnerLogos[position] = logos[position];
    logo[position].innerHTML = '<img src="logos/' + winnerLogos[position] + '">';
    return winnerLogos;
}

function FillBoxes(logos, position) {

    var randomelement;

    for (i = 0; i < logos.length; i++) {
        randomelement = RandomNumberRange(0, logos.length);
        if (randomelement != winner) {
            console.log("position: " + position + "randomElement: " + randomelement);
            logo[i].innerHTML = '<img src="logos/' + logos[randomelement] + '">';    
            console.log(randomelement)
        }
        else{
            logo[i].innerHTML = '<img src="logos/' + logos[randomelement+1] + '">';
        }

        
    }

    return position;
}

function Click() {

    for (var i = 0; i < logo.length; i++) {
        logo[i].addEventListener('click', function () {

            clickeddiv = (this.getAttribute("id")) - 1;
            //console.log('clicked div: ' + clickeddiv);
            Check(clickeddiv);
        });
    }

}

function Check(id) {
    if (id === winner) {
        Win();
    }
    else {
        Lose();
    }
}

function Win() {
   // console.log("win");
   alert("Yeet");
    Play();

}

function Lose() {
   // console.log("lose");
   alert("Nope");
}

function ShowWinner() {

}

function Play() {

    openModal();
    winner = GetWinner();
    modalbody[0].innerHTML = '<img src="logos/' + logos[winner] + '">';
    FillBoxes(newlogos, winner);
    newlogos = SetWinner(winner);
    console.log(" The Winner position is: " + winner + " Image: " + newlogos[winner]);

}

Click();