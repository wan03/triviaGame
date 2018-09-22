$(document).ready( function() {

// Create necessary variables

var time = 20;
var smallTime = 6;
var reset = 16;
var correct = 0;
var incorrect = 0;
var outTime = 0;
var intervalId;
var smallInterval;
var resetInterval;
var currentQuestion = 1;
var $result = "";
var $resultQuestion =  $(".question" + currentQuestion).children(".correct").text();
var answers = [
  "filler",
  "filler",  
  "Toy Story",
  "Trash Collector",
  "Mr. Incredible",
  "Radiator Springs",
  "Paradise Falls",
  "Paris",
  "A Spy",
  "Marlin",
  "Hockey"
]

// Reset Function

function resetFunction (){
  
  if (reset == 10) {
    $(".question9").addClass("hidden");
    $("#win").html("<p> You got " + correct + " correct questions </p>" + "<p> You got " + incorrect + " incorrect questions</p>" + "You ran out of time in " + outTime + " questions")
  } if (reset == 0) {
    correct = 0;
    incorrect = 0;
    outTime = 0;
    currentQuestion = 1;
    reset = 16;
    time = 20;
    smalltime = 6;
    $("#win").addClass("hidden");
    stopReset();
    stopSmallRun();
    stopTimeRemaining(); 
    game();
  };
  
};


// Functions that set the intervals. One for the quesion time, one for the interlude between questions and one for the final countdown to reset.

  function interlude () {
  
  if (smallTime == 0){
    stopSmallRun();
    time = 20;
    smallTime= 6;
    $(".fact").addClass("hidden")
    $(".question" + currentQuestion).removeClass("hidden");
    run();  
   };
  };

function noTime () {
  if (time == 0) {
  currentQuestion++
  outTime++
  $result = "You ran out of time! The correct answer is: "  + answers[currentQuestion];
  moveQuestion();
  };
};

function timeRemaining () {
  
  time--
  $("#time").text("Time Remaining: " + time + " seconds");
  noTime();
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
  resetFunction();
};

function timeReset () {
  clearInterval(resetInterval);
  resetInterval = setInterval(resetTime, 1000);
};

function stopReset () {
  clearInterval(resetInterval);
};


// Function to handle showing and hiding each question.

function moveQuestion () {
  if (currentQuestion == 1) {
    time = 20;
    $(".question1").removeClass("hidden");     
  } if (currentQuestion == 2){  
    stopTimeRemaining();  
    $(".question1").addClass("hidden"); 
    $(".fact").removeClass("hidden")
    $(".fact").html('<p>'+ $result + '</p>' + '<img src="assets/images/toystory.jpg" alt="Toy Story">')
    smallRun();  
  } if (currentQuestion == 3){
    $(".question2").addClass("hidden");
    time = 20;
    $(".fact").removeClass("hidden")
    $(".fact").html('<p>'+ $result + '</p>' + '<img src="assets/images/walle.jpg" alt="Wall-E">');
    $(".result").html($result);
    smallRun();  
  } if (currentQuestion == 4){
    $(".question3").addClass("hidden");
    time = 20;
    $(".fact").removeClass("hidden")
    $(".fact").html('<p>'+ $result + '</p>' + '<img src="assets/images/mrincredible.jpeg" alt="Mr. Incredible">');
    smallRun();   
  } if (currentQuestion == 5){
    $(".question4").addClass("hidden");
    time = 20;
    $(".fact").removeClass("hidden")
    $(".fact").html('<p>'+ $result + '</p>' + '<img src="assets/images/radiatorsprings.jpeg" alt="Radiator Springs">');
    smallRun();
  } if (currentQuestion == 6){
    $(".question5").addClass("hidden");
    time = 20;
    $(".fact").removeClass("hidden")
    $(".fact").html('<p>'+ $result + '</p>' + '<img src="assets/images/paradisefalls.jpg" alt="Paradise Falls">');
    smallRun();
  } if (currentQuestion == 7){
    $(".question6").addClass("hidden");
    time = 20;
    $(".fact").removeClass("hidden")
    $(".fact").html('<p>'+ $result + '</p>' + '<img src="assets/images/ratatouille.jpg" alt="Paris">');
    smallRun();
  } if (currentQuestion == 8){
    $(".question7").addClass("hidden");
    time = 20;
    $(".fact").removeClass("hidden")
    $(".fact").html('<p>'+ $result + '</p>' + '<img src="assets/images/mater.jpg" alt="Spy">');
    smallRun();
  } if (currentQuestion == 9){
    $(".question8").addClass("hidden");
    time = 20;
    $(".fact").removeClass("hidden")
    $(".fact").html('<p>'+ $result + '</p>' + '<img src="assets/images/marlin.png" alt="Marlin">');
    smallRun();
  } if (currentQuestion == 10){
    $(".question9").addClass("hidden");
    $(".fact").removeClass("hidden")
    $(".fact").html('<p>'+ $result + '</p>' + '<img src="assets/images/riley.jpg" alt="Hockey">');
    smallRun();
    timeReset();    
  };
};

// Detect when right/wrong answer is and display that in the DOM


$(".answer").on("click", function () {
  if ($(this).hasClass("correct")) {
    correct++
    currentQuestion++
    $result = "You are correct!"
    moveQuestion();
  } else {
    console.log("check - has fired");
    incorrect++
    currentQuestion++
    $result = "You are incorrect! The correct answer is: " + answers[currentQuestion];
    moveQuestion();
  };
});


// Function to run the game

function game () {
  run();
  moveQuestion();
};

// Click event listener to start the game when Start button is pressed.

$("#start").on("click", game);
});