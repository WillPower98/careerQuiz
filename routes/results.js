const express = require('express');
const router = express.Router();
const { QuizSession } = require('./QuizSession.js');

router.post('/', function(req, res, next) {
    console.log(QuizSession.getCareerRecommendations());
    res.render(
        'results', {careerRecs: QuizSession.getCareerRecommendations()}
    )
})

module.exports =  router;
