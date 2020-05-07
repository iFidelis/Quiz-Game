const question = document.querySelector(".question");
const scoreText = document.querySelector(".score");
const subQuestions = document.querySelector('.sub-question');
const answers = document.querySelectorAll('.answer');
const nextBtn = document.querySelector('.next');

let score = 0;
let wrong = 0;
let scoreMark = 0;
let fidelisQuestions = [
    {
        // Put your question here
        question : "The inability to make decisions",
        //Hints
        subQuestion : "Spanish",
        // Your answers goes here
        answers1 : "Abulia",
        answers2 : "Mabulia",
        answers3 : "Zeebulia",
        answer : 1
    },
    {
        question : "A wart that hangs down like a string",
        subQuestion : "Skins",
        answers1 : "Acrochordon",
        answers2 : "Archinad",
        answers3 : "Strands",
        answer : 1
    },
    {
        question : "The plastic tip at the end of a shoelace",
        subQuestion : ":-(",
        answers1 : "Bimble",
        answers2 : "Gidles",
        answers3 : "Aglet",
        answer : 3
    },
    {
        question : "The wire cage holding the cork in a bottle of champagne",
        subQuestion : "Long necks",
        answers1 : "Twine",
        answers2 : "Agraffe",
        answers3 : "Fillis",
        answer : 2
    },
    {
        question : "The little loops for a belt on a pair of trousers or raincoat",
        subQuestion : "Holds css properties",
        answers1 : "Lace-loop",
        answers2 : "Bowyang",
        answers3 : "Beckets",
        answer : 3
    }
];

test = () => {
    score = 0;
    getNewQuestion();
}

getNewQuestion = () => {
    const quest = fidelisQuestions[0].question;
    const subQuestion = fidelisQuestions[0].subQuestion;
    const latestQuestion = fidelisQuestions[0];

    subQuestions.innerText = subQuestion;
    question.innerText = quest;

    // Loops through the DOM element to insert the questions and answers.
    answers.forEach( answer => {
        const number = answer.dataset['number'];
        answer.innerText = latestQuestion['answers' + number];
    });
};

answers.forEach( answer => {
    answer.addEventListener('click', e => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        nextBtn.style.display = "inline-block";

        let classToApply = 'incorrect';

        // If user selects the right answer add a classList of "CORRECT".
        selectedAnswer == fidelisQuestions[0].answer ? (
            classToApply = 'correct',
            addScore(scoreMark)) :
            // If user selects the wrong option add a classList of "INCORRECT"
            selectedChoice.classList.add(classToApply);

        answers.forEach( option => {
            if ( option.dataset['number'] == fidelisQuestions[0].answer ) option.classList.add('correct');
        })

        answer.parentElement.style.pointerEvents = "none";
        fidelisQuestions.shift();

        nextBtn.addEventListener("click",  () => {
            if( fidelisQuestions.length === 0 ) localStorage.setItem("recentScore", score);

            if( fidelisQuestions.length === 1 ) nextBtn.innerText = "View your result";

            // If question array length equals zero, take me to the end game screen.
            if( fidelisQuestions.length === 0 ) return  window.location.href = "result.html";

            // Removes the classList "CORRECT".
            answers.forEach( option => {
                option.classList.remove('correct');
            })

            // Calls the function getNewQuestion to input new questions to the DOM
            getNewQuestion();
            answer.parentElement.style.pointerEvents = "all";
            selectedChoice.classList.remove(classToApply);
            nextBtn.style.display = "none";
        })

        // If classList is "INCORRECT" increment wrong by 1.
        if ( classToApply !== 'correct' ) wrong++;

        // Stores the wrong score in the localstorage.
        localStorage.setItem("wrongScore", wrong);

        // Stores the score in the localstorage.
        if( fidelisQuestions.length === 0 )  localStorage.setItem("recentScore", score);
    });

    // Creates a function that updates the user score
    addScore = num => {
        score += num;
        scoreText.innerText = score;
    }
});

test();