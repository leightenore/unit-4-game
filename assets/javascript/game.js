//Global Variables
//===========================================================================================================
var counter = 0;
var targetNumber = Math.floor((Math.random() * 102) + 19);
var wins = 0;
var losses = 0;
var crystalValues = [];

//Functions
//===========================================================================================================

function createArray() {
    for (i = 0; i < 4; i++) {
    var randomValue = Math.floor((Math.random() * 12) + 1);
    
    if (crystalValues.indexOf(randomValue) === -1) {
        crystalValues.push(randomValue)
        };
    console.log(crystalValues);
    }
}

//make it so that this loop returns 4 unique values, doesn't repeat numbers

function gameReset() {
    targetNumber = Math.floor((Math.random() * 102) + 19);
    counter = 0
    $("#randomNum").text(targetNumber);
    $("#numWins").text(wins);
    $("#numLosses").text(losses);
    $("#userScore").text(counter);
    crystalValues = [];
    createArray();
}

function winLoseCheck() {
    if (counter === targetNumber) {
        alert("You Win!");
        wins++;
        gameReset();
    }

    else if (counter > targetNumber) {
        alert("Oh no! You went over the goal number! You Lose!");
        losses++
        gameReset();
    }
}

//Main Process
//===========================================================================================================


$("#randomNum").text(targetNumber);
$("#numWins").text(wins);
$("#numLosses").text(losses);
$("#userScore").text(counter);

createArray();


$("#blueCrystal").on("click", function() {
    counter += crystalValues[0];
    $("#userScore").text(counter);
    winLoseCheck();
});


$("#pinkCrystal").on("click", function() {
    counter += crystalValues[1];
    $("#userScore").text(counter);
    winLoseCheck();
});


$("#greenCrystal").on("click", function() {
    counter += crystalValues[2];
    $("#userScore").text(counter);
    winLoseCheck();
  });


$("#purpleCrystal").on("click", function() {
    counter += crystalValues[3];
    $("#userScore").text(counter);
    winLoseCheck();
  });

