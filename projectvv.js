document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loveScale').addEventListener('input', updateLoveScale);
    document.getElementById('futureExcitement').addEventListener('input', updateFutureExcitement);
});

function checkName() {
    const name = document.getElementById('nameInput').value;
    const validNames = ['Vhumi', 'Anjum Afra Nadia', 'Anjum Afra'];
    if (validNames.includes(name)) {
        moveToStep(2);
    } else {
        document.getElementById('nameError').classList.remove('hidden');
    }
}

function loveYes() {
    moveToStep(3);
}

function loveNo() {
    const yesButton = document.getElementById('yesButton');
    const currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = ${currentSize + 5}px;
}

function promiseYes() {
    moveToStep(4);
}

function promiseNo() {
    document.getElementById('promiseNoButton').classList.add('hidden');
}

function updateLoveScale() {
    const loveScale = document.getElementById('loveScale').value;
    const feedback = document.getElementById('loveScaleFeedback');
    const nextButton = document.getElementById('nextButton');
    
    if (loveScale < 5) {
        feedback.textContent = "Are you sure you don't love him more?";
        nextButton.classList.add('hidden');
    } else {
        feedback.textContent = "Let's go to the next step, Baby girl.";
        nextButton.classList.remove('hidden');
    }
}

function missRaiyan(option) {
    const feedback = document.getElementById('missFeedback');
    if (option === "I can't live without him") {
        feedback.textContent = "";
        moveToStep(6);
    } else {
        feedback.textContent = "Really? Are you sure it's not more?";
    }
}

function loveMostResponse() {
    const response = document.getElementById('loveMost').value;
    const feedback = document.getElementById('loveMostFeedback');
    if (response.trim() === "") {
        feedback.classList.remove('hidden');
    } else {
        feedback.classList.add('hidden');
        moveToStep(7);
    }
}

function describeRaiyanResponse() {
    const response = document.getElementById('describeRaiyan').value;
    const feedback = document.getElementById('describeFeedback');
    if (response.trim() !== "") {
        feedback.textContent = "Aww, that's so sweet!";
        moveToStep(8);
    }
}

function chooseRaiyan(option) {
    const feedback = document.getElementById('chocolateFeedback');
    if (option === "Yes") {
        feedback.textContent = "";
        moveToStep(9);
    } else {
        feedback.textContent = "No way! Choose again!";
    }
}

function updateFutureExcitement() {
    const excitement = document.getElementById('futureExcitement').value;
    const feedback = document.getElementById('futureFeedback');
    const nextButton = document.getElementById('nextButton2');
    
    if (excitement < 8) {
        feedback.textContent = "Come on, I know you're more excited than that!";
        nextButton.classList.add('hidden');
    } else {
        feedback.textContent = excitement == 10 ? "That's my girl!" : "";
        nextButton.classList.remove('hidden');
    }
}

function teddyBear(option) {
    const feedback = document.getElementById('teddyFeedback');
    if (option === "Yes") {
        feedback.textContent = "That's the right answer!";
        moveToStep(11);
    } else {
        feedback.textContent = "Only 'Of course!' is acceptable!";
    }
}

function bestBoyfriend(option) {
    const feedback = document.getElementById('teddyFeedback');
    if (option === "Yes") {
        feedback.textContent = "You're the best girlfriend!";
        moveToStep(12);
    } else {
        const yesButton = document.getElementById('bestYesButton');
        const currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = ${currentSize + 5}px;
    }
}

function moveToStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => step.classList.add('hidden'));
    document.getElementById(step${stepNumber}).classList.remove('hidden');
}

function restart() {
    moveToStep(1);
    document.getElementById('nameInput').value = '';
    document.getElementById('nameError').classList.add('hidden');
    document.getElementById('loveScale').value = 3;
    document.getElementById('loveScaleFeedback').textContent = '';
    document.getElementById('missFeedback').textContent = '';
    document.getElementById('loveMost').value = '';
    document.getElementById('loveMostFeedback').classList.add('hidden');
    document.getElementById('describeRaiyan').value = '';
    document.getElementById('describeFeedback').textContent = '';
    document.getElementById('chocolateFeedback').textContent = '';
    document.getElementById('futureExcitement').value = 5;
    document.getElementById('futureFeedback').textContent = '';
    document.getElementById('teddyFeedback').textContent = '';
}