$(document).ready( function() {

// Create necessary variables

var time = 30;
var smallTime = 6;
var correct = 0;
var incorrect = 0;
var outTime = 0;
var intervalId;
var smallInterval;
var currentQuestion = 1;
var questions = {


}





// Do the logic for the time remaining
timeRemaining = function(){
  
  time--
  $("#time").text("Time Remaining: " + time + " seconds");
};

run = function (){
clearInterval(intervalId);
intervalId = setInterval(timeRemaining, 1000);
};

timeBetween = function () {
  smallTime--
};

smallRun = function () {
  clearInterval(smallInterval);
  smallInterval = setInterval(timeBetween, 1000);
};


// Dinamically insert questions? Maybe make it so the order is randomized every time. Decided not to go with this and just have the questions and asnwers in the HTML. Here I'm going to create the logic that will handle showing and hiding eac question.

moveQuestion = function () {

  if (currentQuestion = 1) {
    time = 30;
    $(".question1").removeClass("hidden");
    currentQuestion++
  } else if (currentQuestion = 2){
    $(".question1").addClass("hidden");
    time = 30;
    $(".question2").removeClass("hidden");
    currentQuestion++
  } else if (currentQuestion = 3){
    $(".question2").addClass("hidden");
    time = 30;
    $(".question3").removeClass("hidden");
    currentQuestion++
  } else if (currentQuestion = 4){
    $(".question3").addClass("hidden");
    time = 30;
    $(".question4").removeClass("hidden");
    currentQuestion++
  } else if (currentQuestion = 5){
    $(".question4").addClass("hidden");
    time = 30;
    $(".question5").removeClass("hidden");
    currentQuestion++
  } else if (currentQuestion = 6){
    $(".question5").addClass("hidden");
    time = 30;
    $(".question6").removeClass("hidden");
    currentQuestion++
  } else if (currentQuestion = 7){
    $(".question6").addClass("hidden");
    time = 30;
    $(".question7").removeClass("hidden");
    currentQuestion++
  } else if (currentQuestion = 8){
    $(".question7").addClass("hidden");
    time = 30;
    $(".question8").removeClass("hidden");
    currentQuestion++
  } else if (currentQuestion = 9){
    $(".question8").addClass("hidden");
    time = 30;
    $(".question9").removeClass("hidden");
    currentQuestion++
  } else if (currentQuestion = 10){
    $("#win").html("<p> You got " + correct + " correct questions </p>" + "<p> You got " + incorrect + " incorrect questions</p>" + "You ran out of time in " + outTime + " questions")
    
  };

};










// Detect when right/wrong answer is and add to var also detect if the player has run out of time.

checkAnswer = function () {
$(".answer").on("click", function () {
  if ($(this).hasClass("correct")) {
    correct++
    console.log(correct)
  } else {
    incorrect++
    console.log(incorrect)
  };
});
};



//Once all questions have been answered or time has elapsed remove everything from the page and show the stats of how the player did. 





//Make it so that questions appear one at a time.





















});