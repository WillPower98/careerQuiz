const express = require('express');
const router = express.Router();
let quizSessions = require('../modules/quizSessionHandler').quizSessions;

router.get("/preResults/sessionId/:sessionId", (req, res) => {
    const quizSessionId = req.params.sessionId;
    console.log(`Checking that endpoint has access to global map and that
                  id is present... ${quizSessions.has(quizSessionId)}`);
    console.log(quizSessionId);
    res.render('preResults', {
        answers: quizSessionId
    })
})

module.exports =  router;
