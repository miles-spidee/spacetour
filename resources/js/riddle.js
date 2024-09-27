const riddles = [
    {
        question: "The hottest planet in our solar system is :",
        answer: "venus"
    },
    {
        question: " ____-year is the distance covered by light in a single year.",
        answer: "light"
    },
    {
        question: " Footprints left on the Moon won’t disappear as there is no ___.",
        answer: "wind"
    },
    {
        question: "How many know moons are there on Jupiter?",
        answer: "79"
    } , 
    {
        question: "Which is the only planet not named after a God.",
        answer: "Earth"
    }
];

let currentRiddleIndex = 0;
let score = 0;

const riddleElement = document.getElementById('riddle');
const answerInput = document.getElementById('answer');
const answerLabel = document.getElementById('answer_label')
const submitButton = document.getElementById('submit');
const skipButton = document.getElementById('skip');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next');
const retryButton = document.getElementById('retry');

function displayRiddle() {
    if (currentRiddleIndex < riddles.length) {
        const currentRiddle = riddles[currentRiddleIndex];
        riddleElement.textContent = currentRiddle.question;
        answerInput.value = '';
        feedbackElement.textContent = '';
        feedbackElement.style.display = 'none'; 
        nextButton.style.display = 'none';
        answerInput.style.display = "inline";
        answerLabel.style.display = 'inline';
        submitButton.style.display = 'inline';
        skipButton.style.display = 'inline';
        retryButton.style.display = 'none';
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    const halfQuestions = riddles.length / 2;
    if (score > halfQuestions) {
        riddleElement.textContent = "Congrats! You scored: " + score + "👏";
    } else {
        riddleElement.textContent = "Better luck next time! You scored: " + score + "👏";
    }
    answerInput.style.display = "none";
    answerLabel.style.display = 'none';
    submitButton.style.display = 'none';
    skipButton.style.display = 'none';
    nextButton.style.display = 'none'; 
    feedbackElement.style.display = 'none';
    retryButton.style.display = 'inline';
}

submitButton.addEventListener('click', () => {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = riddles[currentRiddleIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        feedbackElement.textContent = "Correct ✅! Well done.👏";
    } else {
        feedbackElement.textContent = "Wrong answer ❌! The correct answer was: " + correctAnswer;
    }
    
    scoreElement.textContent = "Score: " + score;
    feedbackElement.style.display = 'block'; 
    nextButton.style.display = 'inline';
    answerInput.style.display = 'none'; 
    answerLabel.style.display = 'none';
    submitButton.style.display = 'none'; 
    skipButton.style.display = 'none';
});

skipButton.addEventListener('click', () => {
    feedbackElement.textContent = "The answer was: " + riddles[currentRiddleIndex].answer;
    feedbackElement.style.display = 'block'; 
    nextButton.style.display = 'inline'; 
    answerInput.style.display = 'none'; 
    answerLabel.style.display = 'none';
    submitButton.style.display = 'none'; 
    skipButton.style.display = 'none'; 
});


nextButton.addEventListener('click', () => {
    currentRiddleIndex++;
    displayRiddle();
});

retryButton.addEventListener('click', () => {
    currentRiddleIndex = 0; 
    score = 0; 
    scoreElement.textContent = "Score: " + score;
    displayRiddle(); 
});


displayRiddle();
