const express = require('express');
const router = express.Router();
let quizSessions = require('../modules/quizSessionHandler').quizSessions;


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

    const quizSessionId = req.params.quizSessionId;
    const ActiveQuizSession = quizSessions.get(quizSessionId);
    console.log(ActiveQuizSession.updateCareerMapScores());
    
    // console.log(quizSessions.getCareerRecommendations());
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    //const quizSessionId = req.params.quizSessionId;
    console.log(email, firstName, lastName, quizSessionId)

    res.render(
        'results', {
            // careerRecs: QuizSession.getCareerRecommendations()
        }
    )
});

module.exports =  router;
