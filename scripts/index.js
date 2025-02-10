// quiz
const question = document.querySelector('.question');
const questButtonContainer = document.querySelector('.quest-button-container');
const questInput = document.querySelector('.quest-input');
const questText = document.querySelector('.quest-text');
const levelCounter = document.querySelector('.level-counter');
const submitButton = document.querySelector('.submit-button');
const responseText = document.querySelector('.response');

const quizContainer = document.querySelector('.quiz-container');
const letterContainer = document.querySelector('.letter-container');
const messageContainer = document.querySelector('.message-container');
const valentineContainer = document.querySelector('.valentine-container');

const time = 2000;
let score = 0;
let level = 1;

function updateLevel() {
    levelCounter.innerText = `Level: ${level}/3`;
}

updateLevel();

function response(button) {
    responseText.classList.remove('response-off');

    const negativeResponses = ['Remember on the 1st of February, <br/> I asked you if you knew our <br/> relationship well and you said "heban?"...', 'I hope you run out of peanut butter.', 'Whuu ke sana...'];
    const positiveResponses = ['I love you so much!', `You're the best girlfriend ever!`, 'You deserve 100 million purple shockers.'];

    let rng = Math.random();

    if (button === 'win') {
        if (rng > 0 && rng <= 1/3) {
            responseText.innerHTML = positiveResponses[0];
        } else if (rng > 1/3 && rng <= 2/3) {
            responseText.innerHTML = positiveResponses[1];
        } else {
            responseText.innerHTML = positiveResponses[2];
        }
    } else {
        if (rng > 0 && rng <= 1/3) {
            responseText.innerHTML = negativeResponses[0];
        } else if (rng > 1/3 && rng <= 2/3) {
            responseText.innerHTML = negativeResponses[1];
        } else {
            responseText.innerHTML = negativeResponses[2];
        }
    }
}

function level1() {
    question.innerText = 'At what time did we start dating?';
    questButtonContainer.innerHTML = `
    <div class="quest-button one">a) 2:00pm</div>
    <div class="quest-button two correct">b) 2:30pm</div>
    <div class="quest-button three">c) 3:00pm</div>`;

    questInput.classList.add('quest-input-off');
    questText.classList.add('quest-input-off');
    submitButton.classList.add('submit-button-off');
    responseText.classList.add('response-off');

    const buttonOne = document.querySelector('.one');
    const buttonTwo = document.querySelector('.two');
    const buttonThree = document.querySelector('.three');

    buttonOne.addEventListener("click", checkButton);
    buttonTwo.addEventListener("click", checkButton);
    buttonThree.addEventListener('click', checkButton);

    function checkButton(event){
        const button = event.target;

        function removeButtonListeners() {
            buttonOne.removeEventListener("click", checkButton);
            buttonTwo.removeEventListener("click", checkButton);
            buttonThree.removeEventListener("click", checkButton);
        }

        if (button === buttonOne) {
            buttonOne.classList.add('wrong-button');
            removeButtonListeners();
            response();
            level++;
            setTimeout(() => {level2(), updateLevel()}, time);
        } else if (button === buttonTwo) {
            buttonTwo.classList.add('correct-button');
            removeButtonListeners();
            response('win');
            score++;
            level++;
            setTimeout(() => {level2(), updateLevel()}, time);
        } else if (button === buttonThree) {
            buttonThree.classList.add('wrong-button');
            removeButtonListeners();
            response();
            level++;
            setTimeout(() => {level2(), updateLevel()}, time);
        }
    }
}

level1();

function level2() {
    question.innerHTML = 'What song represents our relationship? <br/>(Song name only)';
    questButtonContainer.classList.add('quest-button-container-off');
    responseText.classList.add('response-off');
    questInput.classList.remove('quest-input-off');
    submitButton.classList.remove('submit-button-off');

    submitButton.addEventListener('click', handleSubmit);
}

function handleSubmit() {
    let input = questInput.value;
    let answer = 'Seigfried';

    const result = input.toLowerCase().includes(answer.toLowerCase());

    console.log(result);

    if (result) {
        score++;
        level++;
        response('win');
        questInput.classList.add('quest-input-correct');
        submitButton.removeEventListener("click", handleSubmit);
        setTimeout(() => {level3(), updateLevel()}, time);
    } else {
        level++;
        response();
        questInput.classList.add('quest-input-wrong');
        submitButton.removeEventListener("click", handleSubmit);
        setTimeout(() => {level3(), updateLevel()}, time);
    }
}

function level3() {
    question.innerHTML = 'Describe the first day we started dating <br/> and everything that happened <br/> in a paragraph.';
    questInput.classList.add('quest-input-off');
    questText.classList.remove('quest-input-off');
    responseText.classList.add('response-off');

    questInput.value = '';

    submitButton.addEventListener("click", () => {
        setTimeout(() => {
            quizContainer.classList.add('quiz-container-off');
            letterContainer.classList.remove('letter-container-off');
        }, 1000);
    });
}

// letter
const letter = document.querySelector('.letter-img');

letter.addEventListener("touchstart", () => {
    myDiv.style.transform = "scale(0.96)";
});

letter.addEventListener("touchend", () => {
    myDiv.style.transform = "scale(1)";

    setTimeout(() => {
        letterContainer.classList.add('letter-container-off');
        messageContainer.classList.remove('message-container-off');
    }, 500);
});

// message
const continueButton = document.querySelector('.button');

continueButton.addEventListener("click", () => {
    setTimeout(() => {
        messageContainer.classList.add('message-container-off');
        valentineContainer.classList.remove('valentine-container-off');
    }, 500);
});