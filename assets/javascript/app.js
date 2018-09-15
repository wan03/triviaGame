$(document).ready( function() {

// Create necessary variables

var time = 10;
var smallTime = 6;
var reset = 15;
var correct = 0;
var incorrect = 0;
var outTime = 0;
var intervalId;
var smallInterval;
var resetInterval;
var currentQuestion = 1;
var questions = {


}





// Do the logic for the time remaining
function timeRemaining () {
  
  time--
  $("#time").text("Time Remaining: " + time + " seconds");
};

function stopTimeRemaining () {
clearInterval(intervalId);
};

function run () {
clearInterval(intervalId);
intervalId = setInterval(timeRemaining, 1000);
};

function timeBetween () {
  smallTime--
  $("#time2").text("Time Remaining: " + smallTime + " seconds");
  interlude();
};

function smallRun () {
  clearInterval(smallInterval);
  smallInterval = setInterval(timeBetween, 1000);
  
};

function stopSmallRun () {
  clearInterval(smallInterval);
};

function resetTime () {
  reset--
};

function timeReset () {
  clearInterval(resetInterval);
  resetInterval = setInterval(resetTime, 1000);
};

function stopReset () {
  clearInterval(resetInterval);
};

function interlude () {

if (smallTime == 0){
  stopSmallRun();
  time = 10;
  smallTime= 6;
  $(".fact").addClass("hidden")
  $(".question" + currentQuestion).removeClass("hidden");
 };

};

// Dinamically insert questions? Maybe make it so the order is randomized every time. Decided not to go with this and just have the questions and asnwers in the HTML. Here I'm going to create the logic that will handle showing and hiding eac question.

function moveQuestion () {

  if (currentQuestion == 1) {
    time = 10;
    $(".question1").removeClass("hidden");
    console.log(currentQuestion + "1")
    // currentQuestion++      
  } if (currentQuestion == 2){    
    console.log("Attempted to move")
    console.log(currentQuestion + "2")
    $(".question1").addClass("hidden");
    var temp = $('<img src="assets/images/toystory.jpg" alt="Toy Story">');   
    $(".fact").append(temp);
    $(".fact").removeClass("hidden")
    smallRun();
    // interlude();
    // $("#time2").text("Time Remaining: " + smallTime + " seconds");
    // if (smallTime == 0){
    //   stopSmallRun();
    //   time = 10;
    //   $("#fact").addClass("hidden")
    //   $(".question2").removeClass("hidden");
    //  };
    // currentQuestion++
  } if (currentQuestion == 3){
    console.log(currentQuestion + "3")
    $(".question2").addClass("hidden");
    time = 30;
    $(".fact").removeClass("hidden")
    $(".fact").html('<img src="assets/images/walle.jpg" alt="Wall-E">');
    smallRun();
    // interlude();   
    //  if (smallTime == 0){
    //   $("#fact").addClass("hidden")
    //   $(".question3").removeClass("hidden");
    //   stopSmallRun();
    //  };
    // currentQuestion++
  } if (currentQuestion == 4){
    $(".question3").addClass("hidden");
    time = 30;
    $(".fact").removeClass("hidden")
    $(".fact").html('<img src="assets/images/mrincredible.jpeg" alt="Mr. Incredible">');
    smallRun();
    //  if (smallTime == 0){
    //   $(".fact").addClass("hidden")
    //   $(".question4").removeClass("hidden");
    //   stopSmallRun();
    //  };
    // currentQuestion++
  } if (currentQuestion == 5){
    $(".question4").addClass("hidden");
    time = 30;
    $(".fact").removeClass("hidden")
    $(".fact").html('<img src="assets/images/radiatorsprings.jpeg" alt="Radiator Springs">');
    smallRun();
    //  if (smallTime == 0){
    //   $(".fact").addClass("hidden")
    //   $(".question5").removeClass("hidden");
    //   stopSmallRun();
    //  };
    // currentQuestion++
  } if (currentQuestion == 6){
    $(".question5").addClass("hidden");
    time = 30;
    $(".fact").removeClass("hidden")
    $(".fact").html('<img src="assets/images/paradisefalls.jpg" alt="Paradise Falls">');
    smallRun();
    //  if (smallTime == 0){
    //   $(".fact").addClass("hidden")
    //   $(".question6").removeClass("hidden");
    //   stopSmallRun();
    //  };
    // currentQuestion++
  } if (currentQuestion == 7){
    $(".question6").addClass("hidden");
    time = 30;
    $(".fact").removeClass("hidden")
    $(".fact").html('<img src="assets/images/ratatouille.jpg" alt="Paris">');
    smallRun();
    //  if (smallTime == 0){
    //   $(".fact").addClass("hidden")
    //   $(".question7").removeClass("hidden");
    //   stopSmallRun();
    //  };
    // currentQuestion++
  } if (currentQuestion == 8){
    $(".question7").addClass("hidden");
    time = 30;
    $(".fact").removeClass("hidden")
    $(".fact").html('<img src="assets/images/mater.jpg" alt="Spy">');
    smallRun();
    //  if (smallTime == 0){
    //   $(".fact").addClass("hidden")
    //   $(".question8").removeClass("hidden");
    //   stopSmallRun();
    //  };
    // currentQuestion++
  } if (currentQuestion == 9){
    $(".question8").addClass("hidden");
    time = 30;
    $(".fact").removeClass("hidden")
    $(".fact").html('<img src="assets/images/marlin.png" alt="Marlin">');
    smallRun();
     if (smallTime == 0){
      $(".fact").addClass("hidden")
      $(".question9").removeClass("hidden");
      stopSmallRun();
     };
    // currentQuestion++
  } if (currentQuestion == 10){
    $(".fact").removeClass("hidden")
    $(".fact").html('<img src="assets/images/riley.jpg" alt="Hockey">');
    smallRun();
     if (smallTime == 0){
       $("#win").html("<p> You got " + correct + " correct questions </p>" + "<p> You got " + incorrect + " incorrect questions</p>" + "You ran out of time in " + outTime + " questions")
       stopSmallRun();
       timeReset();
       if (reset == 0) {
         currentQuestion = 1;
        stopReset();
        moveQuestion();
       };
     };
    
  };

};










// Detect when right/wrong answer is and add to var also detect if the player has run out of time.

function checkAnswer () {
$(".answer").on("click", function () {
  if ($(this).hasClass("correct")) {
    correct++
    currentQuestion++
    moveQuestion();
    console.log(correct)
    


  } else {
    incorrect++
    currentQuestion++
    moveQuestion();
    console.log(incorrect)
  };
});
};

function noTime () {
  if (time == 0) {
  // currentQuestion++
    moveQuestion();
  };
};



//Once all questions have been answered or time has elapsed remove everything from the page and show the stats of how the player did. 

// Function to run the game

function game () {
  run();
  moveQuestion();
  checkAnswer();
 
};


$("#start").on("click", game);




//Make it so that questions appear one at a time.





















});