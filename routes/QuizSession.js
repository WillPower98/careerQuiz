const { v4: uuidv4 } = require('uuid');


const fso = ["Consular Officers", "Economic Officers", "Management Officers",
              "Political Officers", "Public Diplomacy Officers"];

const fss = ["Medical and Health", "Information Technology", "Engineering",
              "International Programs and English Language",
              "Law Enforcement and Security"];

const cs = ["Foreign Affairs Officer", "Information Technology Management​",
            "Intelligence Series", "Public Affairs", "Language Specialist"];


/*
In order to permit stateless communication between the server and multiple
clients, we implement a class that handles all operations related to quiz
data. This will reduce the need to save session data for each user and
complement the underlying stateless http protocol.
*/
class QuizSession {

  constructor() {
    this._sessionId =  uuidv4();
    this._careerRankingMap = new Map();

    /* There are three career categories. When a new quiz session is created,
        Each career track in each category is loaded into the careerRankingMap
        with its category and an initial score (i.e., rank) of 0.
    */

    fso.map(track => {this._careerRankingMap.set(track, {"kind": "fso", "score": 0});})
    fss.map(track => {this._careerRankingMap.set(track, {"kind": "fss", "score": 0});})
    cs.map(track => {this._careerRankingMap.set(track, {"kind": "cs", "score": 0});})

    this._currentQuestion = {};
  }

  // The _quizSessionId is created only through a call to the constructor.
  // It is a read-only random 4 byte int that can be accessed with a call to
  // this method
  getQuizSessionId() {
    return this._sessionId;
  }

  getCareerRankingMap() {
    return this._careerRankingMap;
  }

  setCareerRankingMap(newMap) {
    this._careerRankingMap = newMap;
  }

  getCurrentQuestion() {
    return this._currentQuestion;
  }

  setCurrentQuestion(newQuestion) {
    this._currentQuestion = newQuestion;
  }

}


module.exports = { QuizSession };
