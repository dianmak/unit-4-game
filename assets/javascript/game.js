
var winsHere = 0;
var winsThere = document.getElementById("wins");
var lossesHere = 0;
var lossesThere = document.getElementById("losses");
var numberThere = document.getElementById("number");
var scoreThere = document.getElementById("score");

var Zeus = Math.floor(Math.random() * 12 + 1);
var Hera = Math.floor(Math.random() * 12 + 1);
var Ares = Math.floor(Math.random() * 12 + 1);
var Athena = Math.floor(Math.random() * 12 + 1);
var numberHere = Math.floor(Math.random() * 100 + 19);
var score = 0;

$(document).ready(function () {

    init();
    game();

})

function init() {

    $("#Zeus").on("click", function () {
        score += Zeus;
        scoreThere.innerHTML = "Score : " + score;
    });

    $("#Hera").on("click", function () {
        score += Hera;
        scoreThere.innerHTML = "Score : " + score;
    });

    $("#Ares").on("click", function () {
        score += Ares;
        scoreThere.innerHTML = "Score : " + score;
    });

    $("#Athena").on("click", function () {
        score += Athena;
        scoreThere.innerHTML = "Score : " + score;
    });

    $(".figure").on("click", function () {

        console.log("score : " + score + "goal : " + numberHere);

        if (checkWon(score, numberHere) === true) {
            winsHere++;
            winsThere.innerHTML = "Wins : " + winsHere;
            game();
        }


        if (checkLost(score, numberHere) === true) {
            lossesHere++;
            lossesThere.innerHTML = "Losses : " + lossesHere;
            game();
        }

    });

}


function game() {

    Zeus = Math.floor(Math.random() * 12 + 1);
    Hera = Math.floor(Math.random() * 12 + 1);
    Ares = Math.floor(Math.random() * 12 + 1);
    Athena = Math.floor(Math.random() * 12 + 1);
    numberHere = Math.floor(Math.random() * 100 + 19);
    score = 0;

    scoreThere.innerHTML = "Score : " + score;
    numberThere.innerHTML = "Goal : " + numberHere;

    console.log(Zeus + " " + Hera + " " + Ares + " " + Athena);

}

function checkWon(score, goal) {
    if (score === goal)
        return true;
    else return false;
}

function checkLost(score, goal) {
    if (score > goal)
        return true;
    else return false;
}
