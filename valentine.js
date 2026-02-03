let noCount = 0;
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const question = document.getElementById('question');
const catImg = document.getElementById('cat-img');

const phrases = [
    "No",
    "Are you sure ya albi?",
    "Really sure??",
    "ya ro7y please",
    "maram please",
    "Just think about it!",
    "If you say no I will cry",
    "I will be very sad",
    "I will be very very very sad",
    "Ok fine I'll stop asking🙄",
    "Just kidding, SAY YES PLEASE MARAM!❤️🥹"
];

function handleNo() {
    noCount++;
    // Update No button text
    const nextText = phrases[Math.min(noCount, phrases.length - 1)];
    noButton.innerText = nextText;

    // Grow the Yes button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    yesButton.style.padding = `${currentSize * 0.8}px ${currentSize * 1.6}px`;
}

function handleYes() {

    question.innerText = "Knew you would say yes!😍❤️";


    catImg.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW9tZHo1dHV2M2xpNTQzaDl3M2xjMWI1emVhYzFxZGN4NG11dWkzdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9XY4f3FgFTT4QlaYqa/giphy.gif";

    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.style.display = 'none';
}