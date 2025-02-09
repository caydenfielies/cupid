// quiz
const question = document.querySelector('.question');
const questButtonContainer = document.querySelector('.quest-button-container');
const questInput = document.querySelector('.quest-input');
const questText = document.querySelector('.quest-text');
const levelCounter = document.querySelector('.level-counter');
const submitButton = document.querySelector('.submit-button');

const quizContainer = document.querySelector('.quiz-container');
const letterContainer = document.querySelector('.letter-container');
const messageContainer = document.querySelector('.message-container');
const valentineContainer = document.querySelector('.valentine-container');

let score = 0;
let level = 1;

function updateLevel() {
    levelCounter.innerText = `Level: ${level}/3`;
}

updateLevel();

function level1() {
    question.innerText = 'At what time did we start dating?';
    questButtonContainer.innerHTML = `
    <div class="quest-button one">a) 2:00pm</div>
    <div class="quest-button two correct">b) 2:30pm</div>
    <div class="quest-button three">c) 3:00pm</div>`;

    questInput.classList.add('quest-input-off');
    questText.classList.add('quest-input-off');
    submitButton.classList.add('submit-button-off');

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
            level++;
            setTimeout(() => {level2(), updateLevel()}, 1000);
        } else if (button === buttonTwo) {
            buttonTwo.classList.add('correct-button');
            removeButtonListeners();
            score++;
            level++;
            setTimeout(() => {level2(), updateLevel()}, 1000);
        } else if (button === buttonThree) {
            buttonThree.classList.add('wrong-button');
            removeButtonListeners();
            level++;
            setTimeout(() => {level2(), updateLevel()}, 1000);
        }
    }
}

level1();

function level2() {
    question.innerHTML = 'What song represents our relationship? <br/>(Song name only)';
    questButtonContainer.classList.add('quest-button-container-off');
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
        questInput.classList.add('quest-input-correct');
        submitButton.removeEventListener("click", handleSubmit);
        setTimeout(() => {level3(), updateLevel()}, 1000);
    } else {
        level++;
        questInput.classList.add('quest-input-wrong');
        submitButton.removeEventListener("click", handleSubmit);
        setTimeout(() => {level3(), updateLevel()}, 1000);
    }
}

function level3() {
    question.innerHTML = 'Describe the first day we started dating <br/> and everything that happened <br/> in a paragraph.';
    questInput.classList.add('quest-input-off');
    questText.classList.remove('quest-input-off');
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

letter.addEventListener("click", () => {
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