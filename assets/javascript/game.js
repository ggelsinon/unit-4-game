


//Game start events
// player is shown a random number between 19-120
var computerGuess = 0;

var aCrystalNum = 0;
var bCrystalNum = 0;
var cCrystalNum = 0;
var dCrystalNum = 0;

var playerSum = 0;

// vars for displaying information
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var runningTotal = document.getElementById("runningTotalTexts");
var computerNum = document.getElementById("computerNumberText");



$("#start").on("click", function() {
// player is shown a random number between 19-120
    computerNum = Math.floor(Math.random() * 121);
    console.log(computerNum);

//a number needs to be assigned to each crystal at start of game
    rCrystalNum = Math.floor(Math.random() * 13);
    bCrystalNum = Math.floor(Math.random() * 13);
    yCrystalNum = Math.floor(Math.random() * 13);
    gCrystalNum = Math.floor(Math.random() * 13);

    computerNum.textContent = computerNum

}


)
$(".crystal").on("click", function() {
    $(this.dataNum)
}

)

// jquery .attr


//if players total matches the number given then the game ends by
var playerSum = 0;

    //adding a win to their tally

    //number tally resets

    //new random number generated

// if player's total exceeds random number shown the game ends

    //number tally resets

    //new random number generated

    //add one to the loss tally

// if players total is less than the random number then play continues
