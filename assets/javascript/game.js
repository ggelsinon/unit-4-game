
var computerNumber = 0;
var playerSum = 0;
var wins = 0;
var losses = 0;
var donzo = false;
var winzo = false;

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

var rando = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var winLossCheck = function () {
    if (playerSum > computerNumber) {
        donzo = true;
    } else if (playerSum === computerNumber) {
        winzo = true;
        donzo = true;
    }
    if ((donzo === true) && (winzo === true)) {
        wins += 1;
        $("#winsText").html("Wins: " + wins);
        alert("You Win!");
        resetGame();

    } else if ((donzo === true) && (winzo === false)) {
        losses += 1;
        $("#lossesText").html("Losses: " + losses);
        alert("Uh Oh! You lost!");
        resetGame();
    }
}

    var setCrystals = function () {
        for (var i = 0; i < crystalObj.length; i++) {
            crystalObj[i].value = rando(1, 12);
            var img = $("<img>").attr('src', crystalObj[i].image).attr("id", "crystals" + (i + 1)).attr("data-index", i).addClass("gemimg button").attr("data-num", crystalObj[i].value);
            $("#crystals").append(img);
        }
    }

    var resetGame = function () {
        computerNumber = 0;
        playerSum = 0;
        donzo = false;
        winzo = false;
        // crystalObj[i].value = 0;
        $("#crystals").empty();
        // setCrystals();
        $("#computerNumText").html(computerNumber);
        $("#runningTotalText").html(playerSum);

    }

    $("#winsText").html("Wins: " + wins);
    $("#lossesText").html("Losses: " + losses);

    $("#start").on("click", function () {
        console.log("start worked");
        computerNumber = rando(19, 120);
        $("#computerNumText").html("Number to match: " + computerNumber);
        setCrystals();

        $(".gemimg").on("click", function () {

            if ((donzo === true) && (winzo === true)) {
                wins += 1;
                $("#winsText").html("Wins: " + wins);
                alert("You Win!");
                resetGame();

            } else if ((donzo === true) && (winzo === false)) {
                losses += 1;
                $("#lossesText").html("Losses: " + losses);
                alert("Uh Oh! You lost!");
                resetGame();

            } else {
                var crysvalue = $(this)[0].dataset.num;
                playerSum += parseInt(crysvalue);
                $("#runningTotalText").html("Player total: " + playerSum);
                winLossCheck();
            }

        })

    })

