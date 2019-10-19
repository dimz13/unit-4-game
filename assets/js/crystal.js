function crystal(){
    window.onload = function () {

        //  Click events are done for us:
        $("#gem1").click(gem1Logic);
        $("#gem2").click(gem2Logic);
        $("#gem3").click(gem3Logic);
        $("#gem4").click(gem4Logic);

    };
    // generate the random number between 19 -120
    //generate and assign random number for each of the crystals each crystal can have a value btween 1-12
    var numberRandom;
    var gem1;
    var gem2;
    var gem3;
    var gem4;
    var totalScore = 0;
    var currentTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").append(wins);
    $("#losses").append(losses);
    gameRestart();
    function gameRestart() {
        generateRandom();
        currentTotal = 0;
        $("#numberRandom").text(numberRandom)
        $("#currentTotal").text(currentTotal);
        document.getElementById("gem1").value = generateGem(gem1);
        document.getElementById("gem2").value = generateGem(gem2);
        document.getElementById("gem3").value = generateGem(gem3);
        document.getElementById("gem4").value = generateGem(gem4);
    }


    //function to generate Random Number
    function generateRandom() {
        var min = Math.ceil(19);
        var max = Math.ceil(120);
        numberRandom = Math.floor(Math.random() * (max - min + 1)) + min
    }
    //function to compare random number and currentTotal
    function compare() {
        if (currentTotal === numberRandom) {
            wins++
            $("#wins").text("WINS: " + wins);
            gameRestart();
        } else if (currentTotal > numberRandom) {
            losses++
            $("#losses").text("LOSSES: " + losses);
            gameRestart();
        }

    }


    //Function to generate random number for gems
    function generateGem(gemName) {
        var min = Math.ceil(1);
        var max = Math.ceil(12);
        var gemName = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(gemName)
        return gemName;
    }

    //assign the generated value to each of the gems
    //capture value on click


    //On click get the value and add to total
    function gem1Logic() {
        var num1 = document.getElementById("gem1").value;
        currentTotal = currentTotal + num1;
        $("#currentTotal").html(currentTotal)
        compare();
    }

    function gem2Logic() {
        var num2 = document.getElementById("gem2").value;
        currentTotal = currentTotal + num2;
        $("#currentTotal").html(currentTotal);
        compare()
    }

    function gem3Logic() {
        var num3 = document.getElementById("gem3").value;
        currentTotal = currentTotal + num3;
        $("#currentTotal").html(currentTotal);
        compare();
    }

    function gem4Logic() {
        var num4 = document.getElementById("gem4").value;
        currentTotal = currentTotal + num4;
        $("#currentTotal").html(currentTotal);
        compare();
    }

}