// DECLARING GLOBAL VARIABLES
var num1;
var num2;
var sum;

var question = document.getElementById('question');

// RANDOM EQUATIONS
var rdmnum = [
  {rnum1: 64, rnum2: 8},
  {rnum1: 56, rnum2: 7},
  {rnum1: 132, rnum2: 11},
  {rnum1: 32, rnum2: 8},
  {rnum1: 55, rnum2: 5},
  {rnum1: 81, rnum2: 9},
  {rnum1: 35, rnum2: 5},
  {rnum1: 27, rnum2: 9},
  {rnum1: 16, rnum2: 8},
  {rnum1: 12, rnum2: 3},
  {rnum1: 60, rnum2: 5}
];
var rand = rdmnum[Math.floor(Math.random() * rdmnum.length)];


function getQStart(){
  rand = rdmnum[Math.floor(Math.random() * rdmnum.length)];
  num1 = rand.rnum1;
  num2 = rand.rnum2;
  sum = num1 / num2;
  var question = document.getElementById('question');
  question.innerHTML =  num1 + "/" + num2;
}

function gidi() {
  $( "#main" ).hide(500, function() {
    $( "#main" ).slideDown( "slow", function() {
      // Animation complete.
    });
  })};
var main = document.getElementById('main');


// ANIMATE.CSS - JQUERY
$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});

// SCORE/LIVES INITIALIZATION
var score = document.getElementById('score');
score = 0;
var lives = document.getElementById('lives');
lives = 5;
var playagain = document.getElementById('playagain');
$('#playagain').hide();
$('#postscore').hide();




// ACTIONS FOR SUBMIT-BUTTON
var submit = document.getElementById('submit');

$(document).keypress(
    function(event){
     if (event.which == '13') {
        event.preventDefault();
      }
});

  submit.addEventListener("click",
  function submit(){
    var answer = document.getElementById('answer').value;
      if(answer == sum){

          // CORRENT ANSWER
          score++;
          document.getElementById("score").innerHTML = "SCORE: " + score;
          score.innerHTML =  "SCORE: " + score;
        $('#main').animateCss('pulse', function () {
        });
        var form = document.getElementById("myForm");
        form.reset();
        getQ();
      } else {

            // WRONG ANSWER
            lives--;
            document.getElementById("lives").innerHTML = "LIVES: " + lives;

          // IF YOU LOSE
          if(lives == 0){
            $('#footer').hide();
            $('#main').animateCss('hinge', function () {
            $('#main').hide();
            document.getElementById("postscore").innerHTML = "SCORE: " + score;
            $('#postscore').animateCss('zoomInLeft');
            $('#postscore').show();
            $('#playagain').animateCss('zoomInRight');
            $('#playagain').show();
            });
          }
        $('#main').animateCss('shake', function () {
        });
        var form = document.getElementById("myForm");
        form.reset();
        getQ();
      }


      function getQ(){
        rand = rdmnum[Math.floor(Math.random() * rdmnum.length)];
        num1 = rand.rnum1;
        num2 = rand.rnum2;
        sum = num1 / num2;
        var question = document.getElementById('question');
        question.innerHTML =  num1 + "/" + num2;
    }
  });
