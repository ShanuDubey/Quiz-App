const question = [
    {
        question: "What does HTML stand for?",
        answer: [
            { text: "a) Hyperlink Text Markup Language", correct: false },
            { text: "b) Hyper Transfer Markup Language", correct: false },
            { text: "c) Hypertext Markup Language", correct: true },
            { text: "d) Hyperlinking Textual Markup Language", correct: false }
        ]
    }, 
    {
        question: "Which tag is used to define the structure of an HTML document?",
        answer: [
        { text: "a) body", correct: false },
        { text: "b) head", correct: false },
        { text: "c) title", correct: false },
        { text: "d) html", correct: true }
        ]
    },

    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answer: [
            { text: "a) link tag", correct: false },
            { text: "b) a tag", correct: true },
            { text: "c) href tag", correct: false },
            { text: "d) hyperlink tag", correct: false }
        ]
    },

    {
        question: "What is the correct HTML tag for inserting a line break?",
        answer: [
            { text: "a) lb tag", correct: false },
            { text: "b) break tag", correct: false },
            { text: "c) br tag", correct: true },
            { text: "d) line tag", correct: false }
        ]
    },
    {
        question: "Which attribute is used to define inline styles in HTML?",
        answer: [
            { text: "a) style", correct: true },
            { text: "b) css", correct: false },
            { text: "c) design", correct: false },
            { text: "d) format", correct: false }
        ]
    },
    {
        question: "What does the DOCTYPE declaration do in HTML?",
        answer: [
            { text: "a) Specifies the document type and version of HTML", correct: true },
            { text: "b) Defines the color scheme of the document", correct: false },
            { text: "c) Declares the document's encoding", correct: false },
            { text: "d) Specifies the author of the document", correct: false }
        ]
    },
    {
        question: "Which HTML element is used to define a list that is ordered?",
        answer: [
            { text: "a) ol", correct: true },
            { text: "b) ul", correct: false },
            { text: "c) li", correct: false },
            { text: "d) list", correct: false }
        ]
    },

     {
        question: "Which of the following is NOT a valid CSS selector?",
        answer: [
            { text: "a) .class", correct: false },
            { text: "b)  #id", correct: false },
            { text: "c) *element", correct: false },
            { text: "d) @attribute", correct: true }
        ]
    },
    {
        question: "Which property is used to change the color of text in CSS?",
        answer: [
            { text: "a) text-color", correct: false },
            { text: "b) color", correct: true },
            { text: "c) text-style", correct: false },
            { text: "d) font-color", correct: false }
        ]
    },
    {
        question: "How can you add external CSS to your HTML document",
        answer: [
            { text: "a) Using the style tag", correct: false },
            { text: "b) Using the link tag", correct: true },
            { text: "c) Using the css tag", correct: false },
            { text: "d) Using the external tag", correct: false }
        ]
    },
    {
        question: "Which property is used to set the background color of an element in CSS?",
        answer: [
            { text: "a) background-color", correct: true },
            { text: "b) color", correct: false },
            { text: "c) background", correct: false },
            { text: "d) bg-color", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: [
            { text: "a) Creative Style Sheets", correct: false },
            { text: "b) Computer Style Sheets", correct: false },
            { text: "c) Cascading Style Sheets", correct: true },
            { text: "d) Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "What does the 'Cascading' in CSS refer to?",
        answer: [
            { text: "a) It refers to the ability to apply styles to multiple elements at once.", correct: false },
            { text: "b) It refers to the hierarchical order in which styles are applied, with more specific styles overriding more general ones.", correct: true },
            { text: "c) It refers to the process of compressing CSS files for faster loading.", correct: false },
            { text: "d) It refers to the animation effects applied to CSS elements.", correct: false }
        ]
    },
    {
        question: "What is JavaScript primarily used for?",
        answer: [
            { text: "a) Styling web pages", correct: false },
            { text: "b) Enhancing the interactivity of web pages", correct: true },
            { text: "c) Creating server-side applications", correct: false },
            { text: "d) Manipulating databases", correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answer: [
            { text: "a) var", correct: false },
            { text: "b) let", correct: false },
            { text: "c) const", correct: false },
            { text: "d) all of the above", correct: true }
        ]
    }, 
    {
        question: "What is the correct way to write an if statement in JavaScript?",
        answer: [
            { text: "a) if (x === 5) then { // code }", correct: false },
            { text: "b) if x === 5 { // code }", correct: false },
            { text: "c) if (x === 5) { // code }", correct: true },
            { text: "d) if x === 5 then { // code }", correct: false }
        ]
    },
    {
        question: "Which method is used to add a new element to the end of an array?",
        answer: [
            { text: "a) push()", correct: false },
            { text: "b) append()", correct: true },
            { text: "c) add()", correct: false },
            { text: "d) insert()", correct: false }
        ]
    },
    {
        question: "What does the '===' operator do in JavaScript?",
        answer: [
            { text: "a) Checks if two values are equal in value and type", correct: true },
            { text: "b) Checks if two values are equal in value, but not necessarily in type", correct: false },
            { text: "c) Checks if two values are not equal in value and type", correct: false },
            { text: "d) Checks if two values are not equal in value, but not necessarily in type", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a valid data type in JavaScript",
        answer: [
            { text: "a) Number", correct: false },
            { text: "b) Boolean", correct: false },
            { text: "c) Character", correct: true },
            { text: "d) String", correct: false }
        ]
    },
    {
        question: "What does the 'console.log()' function do in JavaScript?",
        answer: [
            { text: "a) Displays a message box with a given message", correct: false },
            { text: "b) Logs messages to the console for debugging purposes", correct: true },
            { text: "c) Prints messages on the web page", correct: false },
            { text: "d) None of the above", correct: false }
        ]
    },
];
const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerText = "Next"
    showQuestion()
}

function showQuestion() {
    resetState()
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })

}
function resetState() {
    nextButton.style.display = "none"
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++
    }
    else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"

}
function showScore() {
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${question.length}`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}
function handleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < question.length) {
        showQuestion()
    }
    else {
        showScore()
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton()
    }
    else {
        startQuiz()
    }
})
startQuiz()