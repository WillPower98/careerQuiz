const express = require('express');
const router = express.Router();
let quizSessions = require('../modules/quizSessionHandler').quizSessions;


router.post("/finish/quizSessionId/:quizSessionId", (req, res) => {

    const quizSessionId = req.params.quizSessionId;
    console.log(`Checking that endpoint has access to global map and that
                  id is present... ${quizSessions.has(quizSessionId)}`);


    console.log(`session to be deleted has id: ${quizSessionId}`);

    res.render('finish');

});



module.exports =  router;
