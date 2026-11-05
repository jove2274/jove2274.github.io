let currentAnswer = "";

let newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

let answerButton = document.querySelector('#js-tweet');
answerButton.addEventListener('click', displayAnswer);

async function getQuote() {
    const triviaURL = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
    const triviaCheck = await fetch(triviaURL);
    if (!triviaCheck.ok) {
        alert("Error receiving trivia question");
        console.log("Error receiving trivia question");
        throw new Error("Error receiving trivia question");
    }
    const newQuote = await triviaCheck.json();
    console.log(newQuote);
    currentAnswer = newQuote.answer;
    document.querySelector('#js-answer-text').textContent = "";
    displayQuote(newQuote.question);


}

function displayQuote(quoteText) {
    const quoteElement = document.querySelector('#js-quote-text');
    quoteElement.textContent = quoteText;
}

function displayAnswer() {
    const answerElement = document.querySelector('#js-answer-text');
    answerElement.textContent = currentAnswer;
}