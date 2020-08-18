const express = require('express');
const router = express.Router();
let quizSessions = require('../modules/quizSessionHandler').quizSessions;


router.get("/results/sessionId/:sessionId", (req, res) => {
    const quizSessionId = req.params.sessionId;
    console.log(`Checking that endpoint has access to global map and that
                  id is present... ${quizSessions.has(quizSessionId)}`);
    console.log(quizSessionId);

    res.render('results', {
        answers: quizSessionId
    })

   

});


router.post('/results/sessionId/:sessionId', function(req, res, next) {
    
    console.log(QuizSession.getCareerRecommendations());
    // const email = req.body.email;
    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName
    console.log(JSON.parse(req))

    res.render(
        'results', {careerRecs: QuizSession.getCareerRecommendations()}
    )
});

module.exports =  router;
