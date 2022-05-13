
var startButton = document.querySelector("#startButton");
var questionOne= document.querySelector("#firstQ");


startButton.addEventListener("click", function() {
   
     if (questionOne.style.display === "none") {
        questionOne.style.display = "block";
    } else {
        //console.log('test');
        questionOne.style.display= "none";
    }
});

