const express = require('express');
const router = express.Router();
let quizSessions = require('../modules/quizSessionHandler').quizSessions;
const queryOldAttempts = require('../model/mongoose_model').queryOldAttempts;
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


router.post('/results/quizSessionId/:quizSessionId', (req, res) => {

    const quizSessionId = req.params.quizSessionId;
    const ActiveQuizSession = quizSessions.get(quizSessionId);


    console.log(ActiveQuizSession.updateCareerMapScores());

    const RecommendedTracks = [...ActiveQuizSession.getCareerRecommendations()]

    console.log(RecommendedTracks);

    const recommendedTracksDescriptions = [];

    for (track of RecommendedTracks) {
        recommendedTracksDescriptions.push({
            "title": track[1].title,
            "description": track[1].description
            });
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

    UserResult.find({}).sort('-date').limit(10).exec((err, results) => {
        if (!err) {
            console.log(results);
            res.render(
                'results', {
                    careerRecommendations: recommendedTracksDescriptions,
                    quizSessionId: quizSessionId,
                    queriedRecords: results
                }
            )

        }
        else {
            console.log(err);
            res.render(
                'results', {
                    careerRecommendations: recommendedTracksDescriptions,
                    quizSessionId: quizSessionId,
                    queriedRecords: [].push(err)
                }
            )
        }
    });


});


module.exports = router;
