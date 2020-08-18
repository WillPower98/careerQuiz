const express = require('express');
const router = express.Router();
const { QuizSession } = require('../modules/QuizSession.js');

router.get("/preResults", (req, res) => {
    const quizSession = new QuizSession();
    res.render('preResults', {
        answers: quizSession._answerStack
    })
})

module.exports =  router;
