
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. A marquee will make infinite loops by default until we provide a specific value for the same.",
      answers: {
        a: "True",
        b: "False"        
      },
      correctAnswer: "a"
    },

    {
      question: "Q2. We can provide width and height in ‹marquee› tag.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },

    {
      question: "Q3. Select the attribute and value which is used in ‹marquee› tag for moving it upwards.",
      answers: {
        a: "direction='up'",
        b: "direction='top'",
        c: "moving='up'",
        d: "moving='top'"      
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q4. We can change the marquee speed using _____ attribute.",
      answers: {
        a: "scrolldelay",
        b: "scrollamount",
        c: "loop",
        d: "None of the above"      
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q5. How can we add background color in marquee text?",
      answers: {
        a: "‹marquee background=red›Virtual Labs‹/marquee›",
        b: "‹marquee background-color=red›Virtual Labs‹/marquee›",
        c: "‹marquee bgcolor='red'›Virtual Labs‹/marquee›",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
