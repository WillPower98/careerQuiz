const express = require('express');
const router = express.Router();
const { QuizSession } = require('../modules/QuizSession.js');

router.get("/preResults/sessionId/:sessionId", (req, res) => {
    const quizSessionId = req.params.sessionId;
    console.log(quizSessionId); 
    res.render('preResults', {
        answers: quizSessionId
    })
})

module.exports =  router;
