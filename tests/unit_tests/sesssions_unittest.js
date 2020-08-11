const { QuizSession } = require('../../routes/QuizSession.js');
const assert = require("assert");


const TestQuizSession = new QuizSession();

console.log(TestQuizSession.getQuizSessionId());

const careers = ["Consular Officers", "Economic Officers", "Management Officers",
                "Political Officers", "Public Diplomacy Officers", "Medical and Health",
                "Information Technology", "Engineering",
                "International Programs and English Language",
                "Law Enforcement and Security", "Foreign Affairs Officer",
                "Information Technology Management​", "Intelligence Series",
                "Public Affairs", "Language Specialist"]

// Check to make sure that the career ranking datastructure is properly
// initialized
careers.map(career => { assert(TestQuizSession._careerRankingMap.has(career)); })
careers.map(career => { assert(TestQuizSession._careerRankingMap.get(career).score === 0); })

assert(TestQuizSession._careerRankingMap.has("Interal Process Analyst") === false);
