const express = require('express');
const router = express.Router();
const {
  QuizSession
} = require('../modules/QuizSession.js');
const {
  preferenceQuestions,
  scenarioQuestions,
  trivaQuestions
} = require('../data/quizQuestions.js');
let quizSessions = require('../modules/quizSessionHandler').quizSessions;

console.log(typeof(quizSessions));



// This function extracts user responses from the http body and stores them
// in the appropriate quizSession object. User responses may correspond to
// single or multiple selections. The two cases require slightly different
// processing
function storeUserChoice(req) {

  const quizSessionId = req.body.quizSessionId;

  // First check to see if the quizSessionId corresponds to an active quiz
  // session. If no, respond to the post request with an error page.
  if (!quizSessions.has(quizSessionId)) {
    res.render('error');
  }

  let ActiveQuizSession = quizSessions.get(quizSessionId);


  let userChoiceArray = [];

  // In the case of a single selection, the userChoice is a string. This "string"
  // is actually a stringified JSON object. So we parse it to create a living
  // JSON object, push it to the stack of the appropriate quizSession, and return.
  if (typeof(req.body.userChoice) === 'string') {

    let updateValues = JSON.parse(req.body.userChoice);
    userChoiceArray.push(updateValues);
    console.log(userChoiceArray);
    ActiveQuizSession.addNextUserAnswer(userChoiceArray);
    return;
  }


  // In the case of multiple selections, the userChoice is an object. This
  // "object" is an array of stringified JSON objects. So we iterate over that
  // array, parse each string to create a living JSON object, push each one
  // to the to the stack of the appropriate quizSession, and return.
  if (typeof(req.body.userChoice) === 'object') {

    for (choice of req.body.userChoice) {
      console.log(JSON.parse(choice));
      console.log(typeof(choice));
      userChoiceArray.push(choice);
    }

    ActiveQuizSession.addNextUserAnswer(userChoiceArray);
    return;

  }

  // Control should not reach this point. The userChoice is a string or an
  // array of strings. The log statement is meant for debugging purposes.

  console.log(`Unexpected execution path in storeUserChoice()\n
              userChoice is of type: ${typeof(userChoice)}\n
              ID of quizSession is ${quizSessionId}`);
}







// Helper function that prints the properties in the http body
const logReqBody = (req) => {

  const quizSessionId = req.body.quizSessionId;

  console.log("The title of the question was: " + req.body.questionTitle);
  console.log("The answer of the user was: " + req.body.userChoice);
  console.log("The type of the answer was: " + typeof(req.body.userChoice));
  console.log("The id of the quiz session is: " + quizSessionId);
  console.log("The id of the last question is: " + parseInt(req.body.questionId));
  console.log(`Checking that quizSessionID is in map... ${quizSessions.has(quizSessionId)}`);
  console.log("The current section of this quiz is: " + req.body.section);
  console.log("...");

}



/* The client with first access the get method. The post method will be used
for subsequent interactions with the client. The post method checks the question
title/name and the answer the uer provided. This can be used to update the
career track rankings and to dynamically pass a question object to the client
currently, only two question objects are defined, but we can add more very
easily. */
router.get("/quiz", (req, res) => {

  const NewQuizSession = new QuizSession();

  quizSessions.set(NewQuizSession.getQuizSessionId(), NewQuizSession);

  console.log(quizSessions);

  NewQuizSession.setCurrentQuestion(preferenceQuestions[0]);

  res.render('quiz', {
    title: 'career quiz',
    quizSession: NewQuizSession
  });
});







router.post("/quiz", (req, res) => {

  // First extract all relevant info from the request body
  const userChoice = req.body.userChoice;
  const questionTitle = req.body.questionTitle;
  const quizSessionId = req.body.quizSessionId;
  const previousQuestionId = parseInt(req.body.questionId);
  const section = req.body.section;

  // First check to see if the quizSessionId corresponds to an active quiz
  // session. If no, respond to the post request with an error page.
  if (!quizSessions.has(quizSessionId)) {
    res.render('error');
  }

  // Log post request
  logReqBody(req);

  // Store user choices, if they submitted choices on previous page of quiz
  if (userChoice !== undefined) {
    storeUserChoice(req)
  }


  // Assuming the the quizSessionId corresponds to an active quiz session,
  // we can not process the post reqeust

  // Get the quizSession correspoinding to the quizSessionId
  let ActiveQuizSession = quizSessions.get(quizSessionId);

  // The quiz is logical segemented into three sections: preferences,
  // scenarios, and cultural
  if (section === "preferences") {

    const currentQuestionId = previousQuestionId + 1;

    if (currentQuestionId === preferenceQuestions.length) {
      console.log("end of preference questions")
      res.render('interlude_2', {
        quizSession: ActiveQuizSession
      });
    } else {

      const currentQuestion = preferenceQuestions[currentQuestionId];
      ActiveQuizSession.setCurrentQuestion(currentQuestion);
      res.render('quiz', {
        title: 'career quiz',
        quizSession: ActiveQuizSession
      });
    }

  }


  if (section === "scenarios") {

    let currentQuestionId;

    if (previousQuestionId === -1) {
      currentQuestionId = 0;
      const currentQuestion = scenarioQuestions[currentQuestionId];
      ActiveQuizSession.setCurrentQuestion(currentQuestion);
      res.render('quiz', {
        title: 'career quiz',
        quizSession: ActiveQuizSession
      });

    } else {

      const currentQuestionId = previousQuestionId + 1;

      if (currentQuestionId === scenarioQuestions.length) {
        console.log("end of scenarios questions")
        res.redirect(`/results/sessionID/${quizSessionId}`);
      } else {

        const currentQuestion = scenarioQuestions[currentQuestionId];
        ActiveQuizSession.setCurrentQuestion(currentQuestion);
        res.render('quiz', {
          title: 'career quiz',
          quizSession: ActiveQuizSession
        });
      }

    }

  }

});




// This method allows the user to go back and forth in the quiz
router.delete("/quiz", (req, res) => {
  // First check to see if the quizSessionId corresponds to an active quiz
  // session. If no, respond to the post request with an error page.
  const quizSessionId = req.body.quizSessionId;
  if (!quizSessions.has(quizSessionId)) {
    res.render('error');
  }

  // Get the quizSession correspoinding to the quizSessionId
  let ActiveQuizSession = quizSessions.get(quizSessionId);



});



module.exports = router;
