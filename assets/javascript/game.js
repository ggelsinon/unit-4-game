


//Game start events
// player is shown a random number between 19-120

// global vars
var computerNumber = 0;
var playerSum = 0;
var wins = 0
var losses = 0


var crystalObj = [
    {
        name: "red",
        value: 0,
        image: "assets/images/redcrystal.png",
    },
    {
        name: "blue",
        value: 0,
        image: "assets/images/bluecrystal.png",
    },
    {
        name: "green",
        value: 0,
        image: "assets/images/greencrystal.png",
    }
    {
        name: "yellow",
        value: 0,
        image: "assets/images/yellowcrystal.png",
    }
];


//a number needs to be assigned to each crystal object at start of game
for (var i = 0; i < crystalObj.length; i++) {
    crystalObj[i].value = Math.floor(Math.random() * 13);
    var img = $('<img>').attr('src', crystalObj[i].image),
    $(div).append(img)
    
    $("#crystal")
}


// an event initiates the game
$("#start").on("click", function () {
    // player is shown a random number between 19-120
    computerNumber = Math.floor(Math.random() * 121); // generate number
    console.log(computerNumber); //display number
    // computerNumberText.textContent = "Number to Match: " + computerNumber;
    
}


)

$("#crystal").on("click", function () {
    // $(this.dataNum)
    alert("hit it")


})
// jquery .attr

// add crystal value to players running total

var computerNumber = playerSum + crystalNum

//if players total matches the number given then the game ends by
for (var playerSum = 0;
    
    //adding a win to their tally
    
    //number tally resets
    
    //new random number generated
    
    // if player's total exceeds random number shown the game ends
    
    //number tally resets
    
    //new random number generated
    
    //add one to the loss tally
    
    // if players total is less than the random number then play continues
    