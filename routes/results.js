const express = require('express');
const router = express.Router();
let quizSessions = require('../modules/quizSessionHandler').quizSessions;

router.get("/results/sessionId/:sessionId", (req, res) => {
    const quizSessionId = req.params.sessionId;
    console.log(`Checking that endpoint has access to global map and that
                  id is present... ${quizSessions.has(quizSessionId)}`);
    console.log(quizSessionId);
    res.render('preResults', {
        answers: quizSessionId
    })
});


router.post('/results', function(req, res, next) {

    // Http body req.body.blahblahblah
    console.log(QuizSession.getCareerRecommendations());
    res.render(
        'results', {careerRecs: QuizSession.getCareerRecommendations()}
    )
});

module.exports =  router;
