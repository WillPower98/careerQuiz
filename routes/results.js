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

    const recommendedTracks = [...ActiveQuizSession.getCareerRecommendations()]

    console.log(recommendedTracks);

    const recommendedTracksDescriptions = [];

    for (track of recommendedTracks) {
        recommendedTracksDescriptions.push(track[1].description);
    }
    // console.log(ActiveQuizSession.getCareerRankingMap());

    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    //const quizSessionId = req.params.quizSessionId;
    console.log(email, firstName, lastName, quizSessionId)

    res.render(
        'results', {
            careerRecs: recommendedTracksDescriptions,
            quizSessionId: quizSessionId
        }
    )
});

router.delete('/results/quizSessionId/:quizSessionId', (req, res) => {

  console.log("delete quizSession");

  res.render('finish');

});

module.exports =  router;
