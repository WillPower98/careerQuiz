const express = require('express');
const router = express.Router();
let quizSessions = require('../modules/quizSessionHandler').quizSessions;
const getOtherUersRecommendations = require('../model/mongoose_model').getCareerRecommendations;
const UserResult = require('../model/mongoose_model').UserResult;


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

    const RecommendedTracks = [...ActiveQuizSession.getCareerRecommendations()]

    console.log(RecommendedTracks);

    const recommendedTracksDescriptions = [];

    for (track of RecommendedTracks) {
        recommendedTracksDescriptions.push(track[1].description);
    }

    // To save a new user result as record
    const NewUserResult = new UserResult({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      date: new Date().toLocaleDateString(),
      recommendedCareers: RecommendedTracks
    });

    //const quizSessionId = req.params.quizSessionId;
    console.log(NewUserResult);

    NewUserResult.save();


    res.render(
        'results', {
            careerRecs: recommendedTracksDescriptions,
            quizSessionId: quizSessionId
        }
    )
});


// To save a new user result, just use this code:
// const NewUserResult = new UserResult({
//   firstName: "fasfdasfa",
//   lastName: "fasdfdasfa",
//   email: "fdasfda@fjdasfa.com"
//   recommendedCareers: []
// });
//
// NewUserResult.save();


module.exports = router;
