const quizData = [
    {
        Question: 'who is the most protected person?',
        a: 'joel bydine',
        b: 'The quuen of england',
        c: 'Pabblo escoba',
        d: 'john fred',
        correct: 'b'  
    },{
        Question: 'what is the most used programming language in 2019?',
        a: 'java',
        b: 'c#',
        c: 'Python',
        d: 'c++',
        correct: 'a'  
    },{
        Question: 'what is the name of google mobile operating system',
        a: 'apple',
        b: 'motorolla',
        c: 'sony',
        d: 'android',
        correct: 'd'  
    },{
        Question: 'what is the fastest animal on earth',
        a: 'lion',
        b: 'monkey',
        c: 'peregrine falcon',
        d: 'snake',
        correct: 'c'  
    },{
        Question: 'who is the founder of microsoft',
        a: 'Mark Zukubel',
        b: 'Steve Jobs',
        c: 'Bill Gates',
        d: 'elon Musk',
        correct: 'c'  
    },{
        Question: 'what year was javaScript launched?',
        a: '1919',
        b: '1995',
        c: '1993',
        d: 'none of the above',
        correct: 'd'  
    }
];
const quiz = document.getElementById("quiz");
const answersEls= document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz= 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
const currentQuizDate = quizData[currentQuiz];

questionEl.innerText= currentQuizDate.Question;
a_text.innerText = currentQuizDate.a;
b_text.innerText = currentQuizDate.b;
c_text.innerText = currentQuizDate.c;
d_text.innerText = currentQuizDate.d;

}

function getSelected() {
   

let answer = undefined

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
        
    });
    return answer;
} 

function deselectAnswers(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
} 

submitBtn.addEventListener('click',() =>{
    // check to see answer
    const answer = getSelected();

    console.log(answer);

    if(answer ){
        if(answer === quizData[currentQuiz].correct){

            score++;
        }
            currentQuiz++;  
            if(currentQuiz < quizData.length){
                loadQuiz();
            } else {
                quiz.innerHTML =  `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onClick="location.reload()">Reload</button> `; 
            }
        }
      
});
