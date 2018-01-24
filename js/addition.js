var question = document.getElementById('question');
function getQStart(){
  num1 = Math.floor(Math.random()*100+20);
  num2 = Math.floor(Math.random()*100+20);
  sum = num1 + num2;
  var question = document.getElementById('question');
  question.innerHTML =  num1 + "+" + num2;
}

// DECLARING GLOBAL VARIABLES
var num1;
var num2;
var sum;

// ENTER KEYBIND


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
        num1 = Math.floor(Math.random()*100+20);
        num2 = Math.floor(Math.random()*100+20);
        sum = num1 + num2;
        var question = document.getElementById('question');
        question.innerHTML =  num1 + "+" + num2;
    }
  });
