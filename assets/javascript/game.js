


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
        image: src = "assets/images/redcrystal.png",
    },
    {
        name: "blue",
        value: 0,
        image: src = "assets/images/bluecrystal.png",
    },
    {
        name: "green",
        value: 0,
        image: src = "assets/images/greencrystal.png",
    },
    {
        name: "yellow",
        value: 0,
        image: src = "assets/images/yellowcrystal.png",
    },
];

//make a random number variable so it can be used for all the random numbers that need to be generated with less code(thanks Genevieve for the tip)
var rando = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//show the crystal objects on page load

// an event initiates the game
// Genevieve tip #2 make start game a variable with a function assigned to it
// this tip was super key to me figuring out where I was going wrong

var start = function () {
    computerNumber = rando(19, 120); // create a variable t

    //a number needs to be assigned to each crystal object at start of game
    for (var i = 0; i < crystalObj.length; i++) {
        crystalObj[i].value = rando(1, 12);
        var img = $("<img>").attr('src', crystalObj[i].image).attr("id", "crystals" + (i + 1)).attr("data-index", i).addClass("gemimg button").attr("data-num", crystalObj[i].value);
        // player is shown a random number between 19-120

        // $(div).append(img)
        $("#crystals").append(img);


    }
    // need all the place holders for our tally's to show up as part of the start game function too

    $("#computerNumText").html(computerNumber);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);


}

$("#start").on("click", function () {
    console.log("hi")
    start();

})


// needs to show up on the html
$("#winsText").html("Your Wins: " + wins);
$("#lossesText").html("Your Losses: " + losses);

$("#crystals").on("click", ".gemimg", function () {
    // $(this.dataNum)
    var crysvalue = $(this)[0].dataset.num;
    playerSum += parseInt (crysvalue);
    $("#runningTotalText").html(playerSum);


})
// jquery .attr


//this will be for the reset function
// add crystal value to players running total

// computerNumber = playerSum + crystalNum

// //if players total matches the number given then the game ends by
// playerSum = 0;

//     //adding a win to their tally
//     wins = wins++;

// //number tally resets
// playerSum = 0;
// //new random number generated

// // if player's total exceeds random number shown the game ends

// //number tally resets
// playerSum = 0;
// //new random number generated

// //add one to the loss tally
// losses = losses++
//     // if players total is less than the random number then play continues
