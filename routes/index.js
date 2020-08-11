const express = require('express');
const router = express.Router();
const { QuizSession } = require('./QuizSession.js');

let career_points = {};

const q0 = {
  title: "What is your preferred work location?",
  image: "res/img_nature_wide.jpg",
  choices: ["U.S.", "International", "Both"]
};

const q1 = {
  title: "Are you a US Citizen?",
  image: "res/img_snow_wide.jpg",
  choices: ["Yes", "No", "That's classified!"]
};

let questions = [q0, q1]
let qcounter = 0

function nextQuestion(){
  qcounter++;
  return questions[qcounter]
}

function thisQuestion(){
  return questions[qcounter]
}
function processQuestion(userAnswer){
  if(qcounter == 0){
    filterCareers(userAnswer)
  }
}

function filterCareers(pref_location){
  let fso = ["Consular Officers", "Economic Officers", "Management Officers", "Political Officers", "Public Diplomacy Officers"]
      let fss = ["Medical and Health", "Information Technology", "Engineering", "International Programs and English Language", "Law Enforcement and Security"]
      let cs = ["Foreign Affairs Officer", "Information Technology Management​", "Intelligence Series", "Public Affairs", "Language Specialist"]


      //assigning career tracks based off of pref location
      let tracks = []
      switch(pref_location){
              case("U.S."):
                      tracks = cs.concat(fss)
                      break;
              case("International"):
                      tracks = fso.concat(fss)
                      break;
              case("Both"):
                      tracks = fso.concat(fss).concat(cs)
                      break;
              default:
      }

      console.log("Possible tracks are " + tracks.toString())

      let career_table = {}
      //creating the career tracks dict
      for(let i = 0; i < tracks.length; i++){
              career_table[tracks[i]] = 0
      }

      career_points = career_table
      console.log(career_points)
}

/* IMPORTANT: DO NOT TOUCH. This is the runtime data structure used to store
   the quiz progress of all users. */
let quizSessions = new Map();



/* The client with first access the get method. The post method will be used
for subsequent interactions with the client. The post method checks the question
title/name and the answer the uer provided. This can be used to update the
career track rankings and to dynamically pass a question object to the client
currently, only two question objects are defined, but we can add more very
easily. */
router.get("/", (req, res) => {

  const NewQuizSession = new QuizSession();

  quizSessions.set(NewQuizSession.getQuizSessionId(), NewQuizSession);

  console.log(quizSessions);

  NewQuizSession.setCurrentQuestion(q0);



  res.render('index', { title: 'career quiz', quizSession: NewQuizSession});
});

router.post("/", (req, res) => {

    const userAnswer = req.body.userChoice;
    const questionTitle = req.body.questionTitle;
    const quizSessionId = req.body.quizSessionId;
    console.log("The title of the question was: " + questionTitle);
    console.log("The answer of the user was: " + userAnswer);
    console.log("The id of the quiz session is: " + quizSessionId);
    console.log("Checking that quizSessionID is in map... ");

    console.log(quizSessions.has(quizSessionId));

    console.log(quizSessions);

    ActiveQuizSession = quizSessions.get(quizSessionId);
    console.log(ActiveQuizSession);

    // processQuestion(userAnswer, )

    ActiveQuizSession.setCurrentQuestion(q1);

    res.render('index', { title: 'career quiz', quizSession: ActiveQuizSession});
});

module.exports = router;
