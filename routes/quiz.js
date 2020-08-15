const express = require('express');
const router = express.Router();
const { QuizSession } = require('./QuizSession.js');







const preferenceQuestions = [

  {
  id: 0,
  section: "preferences",
  title: "What is your preferred work location?",
  image: "res/img_nature_wide.jpg",
  choices: [

    ['U.S.',{'CONS_OFF':-5,'ECO_OFF':-5,'MGMT_OFF':-5,'POL_OFF':-5,'PUB_DIP_OFF':-5,'MED_HEL':1,'IT':1,'ENG':1,'INT_PRGM_ENG_LANG':1,'LAW_ENF_SEC':1,'FOR_AFF_OFF':1,'IT_MGMT':1,'INTEL_SER':1,'PUB_AFF':1,'LANG_SPLST':1}],
    ['International',{'CONS_OFF':-5,'ECO_OFF':-5,'MGMT_OFF':-5,'POL_OFF':-5,'PUB_DIP_OFF':-5,'MED_HEL':1,'IT':1,'ENG':1,'INT_PRGM_ENG_LANG':1,'LAW_ENF_SEC':1,'FOR_AFF_OFF':-5,'IT_MGMT':-5,'INTEL_SER':-5,'PUB_AFF':-5,'LANG_SPLST':-5}],
    ['Both',{'CONS_OFF':1,'ECO_OFF':1,'MGMT_OFF':1,'POL_OFF':1,'PUB_DIP_OFF':1,'MED_HEL':1,'IT':1,'ENG':1,'INT_PRGM_ENG_LANG':1,'LAW_ENF_SEC':1,'FOR_AFF_OFF':1,'IT_MGMT':1,'INTEL_SER':1,'PUB_AFF':1,'LANG_SPLST':1}]

  ]
},

{
  id: 1,
  section: "preferences",
  title: "What kind of professions are you interested in?",
  image: "res/img_snow_wide.jpg",
  choices: [

    ["Engineering",{'ENG':1}],
    ["Cybersecurity/Information Technology",{'IT':1,'IT_MGMT':1}],
    ["Teaching/Education",{'INT_PRGM_ENG_LANG':1}],
    ["Medicine",{'MED_HEL':1}],
    ["International Studies",{'MED_HEL':1,'IT':1,'ENG':1,'INT_PRGM_ENG_LANG':1,'LAW_ENF_SEC':1}],
    ["Language Studies",{'INT_PRGM_ENG_LANG':1,'LANG_SPLST':1}],
    ["Law Enforcement",{'LAW_ENF_SEC':1,'INTEL_SER':1}],
    ["Communications and Journalism",{'PUB_DIP_OFF':1,'PUB_AFF':1}],
    ["Finance",{'ECO_OFF':1}],
    ["Logistics",{'MGMT_OFF':1,'ENG':1}],
    ["Office Management",{'CONS_OFF':1,'MGMT_OFF':1,'ENG':1}],
    ["Social Science/Statistics",{'ECO_OFF':1,'INTEL_SER':1}],
    ["Construction/Trade skills",{'ENG':1}],
    ["Other/None",{}]

  ]
},

{
  id: 2,
  section: "preferences",
  title: "What are some of your skills?",
  image: "res/img_snow_wide.jpg",
  choices: [

    ["Organization & Management",{'CONS_OFF':-1,'MGMT_OFF':-1}],
    ["Ability to work under pressure",{'CONS_OFF':1,'ECO_OFF':1,'MGMT_OFF':1,'POL_OFF':1,'PUB_DIP_OFF':1,'ENG':1,'LAW_ENF_SEC':1,'FOR_AFF_OFF':1,'INTEL_SER':1,'PUB_AFF':1}],
    ["Flexibility and adaptability",{'CONS_OFF':1,'ECO_OFF':1,'MGMT_OFF':1,'POL_OFF':1,'PUB_DIP_OFF':1,'ENG':1,'INT_PRGM_ENG_LANG':1,'LAW_ENF_SEC':1,'FOR_AFF_OFF':1,'PUB_AFF':1}],
    ["Creativity and problem solving",{'CONS_OFF':1,'ECO_OFF':1,'MGMT_OFF':1,'POL_OFF':1,'PUB_DIP_OFF':1,'IT':1,'ENG':1,'FOR_AFF_OFF':1,'IT_MGMT':1,'INTEL_SER':1}],
    ["Ability to build consensus with opposing views", {'ECO_OFF':1,'POL_OFF':1}],
    ["Analytical thinker", {'ECO_OFF':1,'LAW_ENF_SEC':1,'INTEL_SER':1}],
    ["Interpersonal skills", {'ECO_OFF':1,'POL_OFF':1,'PUB_DIP_OFF':1,'INT_PRGM_ENG_LANG':1,'PUB_AFF':1}],
    ["Proficiency in another language",{'PUB_DIP_OFF':1,'INTEL_SER':1,'LANG_SPLST':1}],
    ["Computer programming",{'ENG':1,'IT_MGMT':1}],
    ["Academic research",{'INT_PRGM_ENG_LANG':1,'FOR_AFF_OFF':1}],
    ["Other/None",{}]

 ]
},


{
  id: 3,
  section: "preferences",
  title: "Which statements do you self identify with the most?",
  image: "res/img_snow_wide.jpg",
  choices: [

    ["I am a strategic thinker",{'CONS_OFF':1}],
    ["I am good at persuading people",{'ECO_OFF':1,'POL_OFF':1}],
    ["I enjoy talking in front of large crowds",{'PUB_DIP_OFF':1,'PUB_AFF':1}],
    ["I like to work on complex technical projects",{'ECO_OFF':1,'IT':1,'ENG':1,'IT_MGMT':1,'INTEL_SER':1}],
    ["I strive at making processes more effective and efficient",{'CONS_OFF':1,'MGMT_OFF':1,'ENG':1}],
    ["I like to lead when working in team settings",{'CONS_OFF':1,'ECO_OFF':1,'MGMT_OFF':1,'POL_OFF':1,'PUB_DIP_OFF':1}],
    ["I would enjoy analyzing large amounts of data and using statistical techniques",{'IT':1,'INTEL_SER':1}],
    ["I like working with my hands",{'ENG':1,'LAW_ENF_SEC':1}],
    ["I would feel comfortable working in a warzone",{'CONS_OFF':1,'ECO_OFF':1,'MGMT_OFF':1,'POL_OFF':1,'PUB_DIP_OFF':1,'MED_HEL':1,'IT':1,'ENG':1,'INT_PRGM_ENG_LANG':1,'LAW_ENF_SEC':1}],
    ["I am particularly interested in publishing and digital media",{'PUB_DIP_OFF':1,'PUB_AFF':1}]

  ]
}
];

// scenario-based questions
const q5 = {

  id: 4,
  section: "scenarios",
  title: `You are a Diplomat in a country with conservative social rules. An
  American dance group is coming into town. This is a commerciallly organized
  performance but the embassy is provididng some support that will get its
  name on the program sponsor. There is a reception planned with 100 VIP guests
  to be held at the Ambassadors after the performance. The local theatre director
  then says the costumes aren't modest enough. Neither the theatre director nor
  of the dance group will budge. What is the best and and worse course
  of action?`,
  image: "res/img_snow_wide.jpg",
  choices: [
    ["You tell the theatre director to cooporate because the embassy is a sponsor and has the right to do whatever it wants.",{'PUB_DIP_OFF':-1,'INT_PRGM_ENG_LANG':-1,'LANG_SPLST':-1}],
    ["You ask the director of the dance group if is possible to change or alter the costumes. ",{'PUB_DIP_OFF':1,'INT_PRGM_ENG_LANG':1,'LANG_SPLST':1}],
    ["You listen to both directors and negotiate a compromise that would allow to the show to go on.",{'PUB_DIP_OFF':2,'INT_PRGM_ENG_LANG':2,'LANG_SPLST':2}]

  ]
};



const q6 = {
  title: "Which statements do you self identify with the most?",
  image: "res/img_snow_wide.jpg"
//   choices: [
//     ]
};
const q7 = {
  title: "Which statements do you self identify with the most?",
  image: "res/img_snow_wide.jpg"
//   choices: [
//     ]
};

//cultural adaptablity questions
const q8 = {
};
const q9 = {
};

// userAnswer = list of choices selected by the user
function updateCareerMap(userAnswer, activeQuizSession){

  let career_map = activeQuizSession.getCareerRankingMap();
  let choices_map = new Map(activeQuizSession.getCurrentQuestion().choices);

  for(let i = 0; i < userAnswer.length; i++) {

    // we get choice object that correspond to the user's answer
    let userChoice = choices_map.get(userAnswer[i]);

    // for every career track in the choice object use abbreviation (key) to update score in career map
    Object.keys(userChoice).forEach(function(key,index) {
      career_map.get(key).score = career_map.get(key).score + userChoice[key];
    });
  }

  activeQuizSession.setCareerRankingMap(career_map);
};



/* IMPORTANT: DO NOT TOUCH. These are critical runtime data structure */

// This is the runtime data structure used to store the quiz progress of all users.
let quizSessions = new Map();



/* The client with first access the get method. The post method will be used
for subsequent interactions with the client. The post method checks the question
title/name and the answer the uer provided. This can be used to update the
career track rankings and to dynamically pass a question object to the client
currently, only two question objects are defined, but we can add more very
easily. */
router.get("/quiz", (req, res) => {

  const NewQuizSession = new QuizSession();

  quizSessions.set(NewQuizSession.getQuizSessionId(), NewQuizSession);

  console.log(quizSessions);

  NewQuizSession.setCurrentQuestion(preferenceQuestions[0]);



  res.render('quiz', { title: 'career quiz', quizSession: NewQuizSession});
});





router.post("/quiz", (req, res) => {

    const userAnswer = req.body.userChoice;
    const questionTitle = req.body.questionTitle;
    const quizSessionId = req.body.quizSessionId;
    const questionId = parseInt(req.body.questionId);
    const section = req.body.section;

    console.log("The title of the question was: " + questionTitle);
    console.log("The answer of the user was: " + userAnswer);
    console.log("The id of the quiz session is: " + quizSessionId);
    console.log("The id of the last question is: " + questionId);
    console.log(`Checking that quizSessionID is in map... ${quizSessions.has(quizSessionId)}`);
    console.log("The current section of this quiz is: " + section);
    console.log("...");
    // console.log(quizSessions);

    ActiveQuizSession = quizSessions.get(quizSessionId);
    // console.log(ActiveQuizSession);


    let currentQuestionId = questionId + 1;
    currentQuestion = preferenceQuestions[currentQuestionId];



    if (section === "scenarios") {
      ActiveQuizSession.setCurrentQuestion(q5);
      res.render('quiz', { title: 'career quiz', quizSession: ActiveQuizSession});
    }

    console.log(preferenceQuestions.length);

    if (currentQuestionId === preferenceQuestions.length) {
      console.log("end of preference questions")
      res.render('interlude_2', {quizSession: ActiveQuizSession});
    } else {
      ActiveQuizSession.setCurrentQuestion(currentQuestion);
      res.render('quiz', { title: 'career quiz', quizSession: ActiveQuizSession});
    }

});

module.exports = router;
