

var quizQuestions = [
    {
        question: "What is the primary purpose of using alerts in JavaScript?",
        option1: "To concatenate strings",
        option2: "To provide notifications or warnings",
        option3: "To control loop iterations",
        option4: "To style web elements",
        correctAns: "To provide notifications or warnings"
    },
    {
        question: "Which type of variable is used to store text values in JavaScript?",
        option1: "Numeric variables",
        option2: "Boolean variables",
        option3: "String variables",
        option4: "Character variables",
        correctAns: "String variables"
    },
    {
        question: "How do you add two numbers together in JavaScript using the familiar addition operator?",
        option1: "&",
        option2: "+",
        option3: "-",
        option4: "*",
        correctAns: "+"
    }
    , {
        question: "What method is used to concatenate two text strings in JavaScript?",
        option1: `join()`,
        option2: `merge()`,
        option3: `concatenate()`,
        option4: `+`,
        correctAns: `+`
    }, {
        question: "What is the purpose of a prompt in JavaScript?",
        option1: "To display messages to the user",
        option2: "To get user input",
        option3: "To create arrays",
        option4: "To define functions",
        correctAns: "To get user input"
    }, {
        question: "Which keyword is used to create conditional statements in JavaScript?",
        option1: "loop",
        option2: "switch",
        option3: "if",
        option4: "for",
        correctAns: "if"
    }, {
        question: `What does the "===" operator do in JavaScript?`,
        option1: "Checks for equality in value and type",
        option2: "Assigns a value to a variable",
        option3: "Compares two values for inequality",
        option4: "Converts a string to a number",
        correctAns: "Checks for equality in value and type"
    }, {
        question: "How do you check if a variable is equal to a specific value in JavaScript?",
        option1: "==",
        option2: "=",
        option3: "===",
        option4: "!=",
        correctAns: "==="
    }, {
        question: `What is the result of the expression "5 + 5" in JavaScript?`,
        option1: "10",
        option2: `"55"`,
        option3: "Error",
        option4: "25",
        correctAns: "10"
    }, {
        question: "What is the main purpose of using comments in JavaScript?",
        option1: "To create new variables",
        option2: "To style web pages",
        option3: "To document and explain code",
        option4: "To generate random numbers",
        correctAns: "To document and explain code"
    }, {
        question: `In JavaScript, what is the purpose of a "break" statement in a for loop?`,
        option1: "To end the loop and continue with the next iteration",
        option2: "To skip the current iteration and continue with the loop",
        option3: "To print a message to the console",
        option4: "To add an element to an array",
        correctAns: "To end the loop and continue with the next iteration"
    }, {
        question: "How do you generate a random number between 1 and 10 in JavaScript?",
        option1: "Math.random(1, 10)",
        option2: "Math.random() * 10",
        option3: "random(1, 10)",
        option4: "getRandomNumber(1, 10)",
        correctAns: "Math.random() * 10"
    }, {
        question: "What function is used to convert a string to an integer in JavaScript?",
        option1: "parseInt()",
        option2: "toInt()",
        option3: "convertToInt()",
        option4: "intConvert()",
        correctAns: "parseInt()"
    }, {
        question: "What is the primary use of a function in JavaScript?",
        option1: "To create arrays",
        option2: "To change the content of web pages",
        option3: "To group a set of statements into a single unit",
        option4: "To print messages to the console",
        correctAns: "To group a set of statements into a single unit"
    }, {
        question: "How do you set the URL of the current web page in JavaScript?",
        option1: "window.location.setURL()",
        option2: "location.href()",
        option3: "window.href()",
        option4: "window.location.href",
        correctAns: "window.location.href"
    }, {
        question: "Which event is triggered when a user clicks on a link in JavaScript?",
        option1: "button",
        option2: "click",
        option3: "mouse",
        option4: "link",
        correctAns: "link"
    }, {
        question: "How can you read the value of a form field using JavaScript?",
        option1: "getFieldValue()",
        option2: "readField()",
        option3: "getValue()",
        option4: "document.getElementValue()",
        correctAns: "getValue()"
    }, {
        question: "What is the term for changing the content or attributes of an HTML element using JavaScript?",
        option1: "Manipulation",
        option2: "Transformation",
        option3: "Styling",
        option4: "Animation",
        correctAns: "Manipulation"
    }, {
        question: "What method is used to add a new HTML element to the Document Object Model (DOM) in JavaScript?",
        option1: `append()`,
        option2: `insertBefore()`,
        option3: `addElement()`,
        option4: `createNode()`,
        correctAns: "append()"
    }, {
        question: `In JavaScript, what is the primary use of the "try" and "catch" statement combination?`,
        option1: "To create loops",
        option2: "To handle exceptions and provide a fallback if an error occurs",
        option3: "To generate random numbers",
        option4: "To change the appearance of web elements",
        correctAns: "To handle exceptions and provide a fallback if an error occurs"
    }
];

var displayQues = document.getElementById("displayQues");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var option4 = document.getElementById("opt4");
var button = document.getElementById("btn");
var input = document.getElementsByName("options");
var timeLeft = 30;
var radio = document.getElementsByName("options");
var timer;
var ind = 0;
var score = 0;

console.log(quizQuestions[ind])







var timerBar = document.getElementById("timer-bar");

function startTimer() {
    timeLeft = 30

    timer = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }

        var width = (timeLeft / 30) * 100;
        timerBar.style.width = width + '%';
    }, 1000);
}

function nextQuestion() {
    button.style.display = "none";

    clearInterval(timer);
    timerBar.style.width = "100%";

    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            console.log(input[i].value);

            var selectedValue = input[i].value;

            var selectedAns = quizQuestions[ind - 1][`option${selectedValue}`]
            console.log(selectedAns);
            var correctAns = quizQuestions[ind - 1]["correctAns"]
            console.log(correctAns);
            if (selectedAns == correctAns) {
                score++;
                alert(score)
            }
        }

        input[i].checked = false;

    }
    button.disabled = true;

    if (ind > quizQuestions.length - 1) {
        alert((score / quizQuestions.length) * 100);



        // if (percentage >= 100 || percentage >= 90) {

        //     Swal.fire(
        //         'Very Good!',
        //         `Your percentage is ${percentage}`,
        //         'success'
        //     )
        // }
        // else if (percentage >= 80 || percentage >= 70) {
        //     Swal.fire(
        //         'Good!',
        //         `Your percentage is ${percentage}`,
        //         'success'
        //     )
        // }

        // else if (percentage >= 60 || percentage >= 50) {
        //     Swal.fire(
        //         'Umm! Do it better',
        //         `Your percentage is ${percentage}`,
        //         'success'
        //     )
        // }
        // else if (percentage >= 40) {
        //     Swal.fire(
        //         'Better Luck Next Time!',
        //         `Your percentage is ${percentage}`,
        //         'warning'
        //     )
        // }
        // else if (percentage < 40) {
        //     Swal.fire(
        //         'Fail!',
        //         `Your percentage is ${percentage}`,
        //         'error'
        //     )
        // }
    } else {
        // input.checked = false;
        displayQues.innerHTML = quizQuestions[ind].question;
        option1.innerHTML = quizQuestions[ind].option1;
        option2.innerHTML = quizQuestions[ind].option2;
        option3.innerHTML = quizQuestions[ind].option3;
        option4.innerHTML = quizQuestions[ind].option4;
        ind++;
        startTimer();
        // button.disabled = true;


        // Call startTimer after setting up the new question
    }
}

function clicked() {
    // ind++;
    button.disabled = false;
    button.style.display = "block";

    input.checked = true;

}
// Call nextQuestion to start the quiz
// nextQuestion();
// export const scorey = score;









// nextQuestion()







