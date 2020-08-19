const express = require('express');
const router = express.Router();
let quizSessions = require('../modules/quizSessionHandler').quizSessions;


/* The career map is updated at the end of every quiz session by
    popping all of the elements in the answerStack */
// Choice object: {abbreviation: property}

function updateCareerMap(ActiveQuizSession) {

  let careerMap = ActiveQuizSession.getCareerMap();

  while (!ActiveQuizSession.emptyAnswerStack()) {

    let userChoice = ActiveQuizSession.getLastUserAnswer();

     for (let i = 0; i < userChoice.length; i++) {
       let currentUserChoice = userChoice[i];
       Object.keys(currentUserChoice).forEach(function(key, index) {
         careerMap.get(key).score = careerMap.get(key).score + currentUserChoice[key];
       });
     }

    ActiveQuizSession.setCareerRankingMap(careerMap);
  };

}


router.get("/results/quizSessionId/:quizSessionId", (req, res) => {
    const quizSessionId = req.params.quizSessionId;
    console.log(`Checking that endpoint has access to global map and that
                  id is present... ${quizSessions.has(quizSessionId)}`);
    console.log(quizSessionId);

    res.render('preResults', {
        quizSessionId: quizSessionId
    })



});


router.post('/results/quizSessionId/:quizSessionId', function(req, res, next) {

    // console.log(quizSessions.getCareerRecommendations());
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const quizSessionId = req.params.quizSessionId;
    console.log(email, firstName, lastName, quizSessionId)

    res.render(
        'results', {
            // careerRecs: QuizSession.getCareerRecommendations()
        }
    )
});

module.exports =  router;
