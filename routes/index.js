var express = require('express');
var router = express.Router();


const Question = {
  title: "What is your preferred work location?",
  image: "res/img_nature_wide.jpg",
  choices: ["U.S.", "International", "Both"]
};

const NextQuestion = {
  title: "Are you a US Citizen?",
  image: "res/img_snow_wide.jpg",
  choices: ["Yes", "No", "That's classified!"]
};



/* The client with first access the get method. The post method will be used
for subsequent interactions with the client. The post method checks the question
title/name and the answer the uer provided. This can be used to update the
career track rankings and to dynamically pass a question object to the client
currently, only two question objects are defined, but we can add more very
easily. */

router.get("/", (req, res) => {
  res.render('index', { title: 'career quiz', question: Question});
});

router.post("/", (req, res) => {

    const preferredLocation = req.body.userChoice;
    const questionTitle = req.body.questionTitle
    console.log("The title of the question was: " + questionTitle);
    console.log("The answer of the user was: " + preferredLocation);
    res.render('index', { title: 'career quiz', question: NextQuestion});
});

module.exports = router;
