var answers = {};

var question_um = document.getElementById('question_1');
var question_dois = document.getElementById('question_2');
var question_tres = document.getElementById('question_3');
var question_quatro = document.getElementById('question_4');
var question_cinco = document.getElementById('question_5');

function storeAnswer(question_number, event){
    if (event.target.type === 'radio'){
        console.log(event.target.value);
        answers ['question' +question_number] = parseInt (event.target.value);
        console.log (answers);
    }
}

question_um.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_dois.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_tres.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_quatro.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_cinco.addEventListener('click', function(event){
    storeAnswer(5, event)
})

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');

function nextQuestion(question_number){
    var current_question_number = question - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function (){
    nextQuestion(2);
    growProgressBar('40%');
})
submit2.addEventListener('click', function (){
    nextQuestion(3);
    growProgressBar('60%');
})
submit3.addEventListener('click', function (){
    nextQuestion(4);
    growProgressBar('80%');
})
submit4.addEventListener('click', function (){
    nextQuestion(5);
    growProgressBar('100%');
})
submit5.addEventListener('click', function (){
    nextQuestion(6);
    
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}