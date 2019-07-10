$(document).ready(function () {

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
var response;
var companyName = 'amazon';

    for(let i = 0; i < 26; i++){

        companyName = String.fromCharCode(i);
        const Http = new XMLHttpRequest();
        const url='http://autocomplete.clearbit.com/v1/companies/suggest?query=' + companyName;
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange=(e)=>{
        response = Http.responseText;
        
        );
        
        console.log(response);
        
        response = JSON.parse(response);
        
        logos.push(response.name);
        }
        
        }















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
    return RandomNumberRange(0, logo.length);
}

function SetWinner(position, winnerlogo) {
    
    logo[position].innerHTML = '<img src="logos/' + winnerlogo + '">';
}

function FillBoxes(winner) {

    var randomelement;

    for (i = 0; i < logo.length; i++) {
        randomelement = RandomNumberRange(0, logo.length);
        if(randomelement === winner){
            randomelement += 1;
        }
            console.log("randomElement: " + randomelement);
            logo[i].innerHTML = '<img src="logos/' + logos[randomelement] + '">';    
    }

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
    var winnerlogo = logos[winner];
    modalbody[0].innerHTML = '<img src="logos/' + logos[winner] + '">';
    FillBoxes(winner);
    SetWinner(winner, winnerlogo);
    console.log(" The Winner position is: " + winner + " Image: " + logos[winner]);

}

Click();

});
