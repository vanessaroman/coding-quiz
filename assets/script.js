//Getting start button to display the section where questions will be
const startButton = document.querySelector('#startButton');
const quizWindow = document.querySelector('#quizWindow');
const startBox = document.querySelector('.start');
const nextButton = document.querySelector('#nextbtn');
const ques2Box = document.querySelector('#ques2');
const ques3Box = document.querySelector('#ques3');
const nextButton2 = document.querySelector('#nextbtn2');
const ques4Box = document.querySelector('#ques4');
const nextButton3 = document.querySelector('#nextbtn3');
const resultsBox = document.querySelector('#resultsB');
const submitButton = document.querySelector('#submitbtn');
const timerText = document.querySelector('.timer-text');
var timer = 60;


//when the display style was in my css sheet it was giving me issues so i moved it to the js with the advise of the teacher
quizWindow.style.display = 'none';
ques2Box.style.display = 'none';
ques3Box.style.display = 'none';
ques4Box.style.display = 'none';
resultsBox.style.display = 'none';

//Start timer when clicking start button 

function startTimer() {
    console.log("testing timer")
    var quizTimer = setInterval(function () {

        if (timer === 0) {
            clearInterval(quizTimer);
            endGame();
        }

        timerText.textContent = 'Time Remaining: ' + timer;
        timer--

    }, 1000);
}

//Make first question window show up
startButton.addEventListener('click', function(){
    timer = 60;
    startTimer();
})

startButton.addEventListener('click', function() {
   
     if (quizWindow.style.display === 'none') {
         quizWindow.style.display = 'block';
    } else {
         quizWindow.style.display = 'none';
    }
});
//Make start window dissapear once clicking 'start quiz'
startButton.addEventListener('click', function(){
    if (startBox.style.display === ''){
        startBox.style.display = 'none';
    } else {
        startBox.style.display = '';
    }
});

//Get following questions to appear when clicking next

nextButton.addEventListener('click', function(){
    if (ques2Box.style.display === 'none') {
        ques2Box.style.display = 'block';
    } else {
        ques2Box.style.display = 'none';
    }
});

nextButton.addEventListener('click', function(){
    if (quizWindow.style.display === 'block'){
        quizWindow.style.display = 'none';
    } else {quizWindow.style.display = 'block';}
});

nextButton2.addEventListener('click', function(){
    if (ques3Box.style.display === 'none') {
        ques3Box.style.display ='block';
    } else { ques3Box.style.display = 'none'; }
});

nextButton2.addEventListener('click', function(){
    if (ques2Box.style.display === 'block') {
        ques2Box.style.display = 'none';
    } else { ques2Box.style.display = 'block';}
});

nextButton3.addEventListener('click', function(){
    if (ques4Box.style.display === 'none'){
        ques4Box.style.display = 'block';
    } else {ques4Box.style.display = 'none';}
});

nextButton3.addEventListener('click', function(){
    if (ques3Box.style.display === 'block') {
        ques3Box.style.display = 'none';
    } else { ques3Box.style.display = 'block';}
});

submitButton.addEventListener('click', function(){
    if (resultsBox.style.display === 'none'){
        resultsBox.style.display = 'block';
    } else {resultsBox.style.display = 'none';}
});

submitButton.addEventListener('click', function(){
    if (ques4Box.style.display === 'block') {
        ques4Box.style.display = 'none';
    } else { ques4Box.style.display = 'block';}
});



// Array of questions and loop

// const quizQuestions = [
//     {
//         question: 'How do you separate lines in html?',
//         options:  {
//             a: '<p>',
//             b: '<h1>',
//             c: '<br>',
//             d: '<li>'
//         },
//         answer: 'c'
//     },

//     {
//         question: 'Which of the following is NOT and input type?',
//         options:  {
//             a: 'secret',
//             b: 'submit',
//             c: 'text',
//             d: 'reset'
//         },
//         answer: 'a'
//     }
// ]


// const quizBox = document.getElementById('quizWindow');
// const resultsBox = document.getElementById('results');
// const resultsBtn = document.getElementById('resultsBtn');

// function runQuiz(quizQuestions, quizBox, resultsBox, resultsBtn){
    
//     function seeQuestions (quizQuestions, quizBox){
       

//     }

//     function seeResults (quizQuestions, quizBox, resultsBox){

//     }

//     seeQuestions (quizQuestions, quizBox);

//     //see results when clicking "give results"

//     resultsBtn.onclick = function(){
//         seeResults (quizQuestions, quizBox, resultsBox);
//     }
// }

// for (var i=0; i < quizQuestions.length; i++){

// }