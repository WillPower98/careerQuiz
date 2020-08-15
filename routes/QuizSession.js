const { v4: uuidv4 } = require('uuid');




// The career tracks are organizd in this 2D array. Each array inside CareerTracks
// has two elements: an abbreviation and a object. The object holds all the data
// related to the career tracking, including its name, abbreviation, category,
// and score based on user responses. When a quizSession is initialized by a
// get request to "/quiz", the 2D array is loaded into the career map of that
// session. The conversion from array to map allows O(1) access to each
// career track object. At the end of the quiz, the map is converted back into an
// array for sorting.
const CareerTracks = [

  ['CONS_OFF', {'title': 'Consular Officers', 'abbreviation ': 'CONS_OFF', 'category': 'FSO', 'score': 0} ],
  ['ECO_OFF', {'title': 'Economic Officers', 'abbreviation ': 'ECO_OFF', 'category': 'FSO', 'score': 0}],
  ['MGMT_OFF', {'title': 'Management Officers', 'abbreviation ': 'MGMT_OFF', 'category': 'FSO', 'score': 0}],
  ['POL_OFF', {'title': 'Political Officers', 'abbreviation ': 'POL_OFF', 'category': 'FSO', 'score': 0}],
  ['PUB_DIP_OFF', {'title': 'Public Diplomacy Officers', 'abbreviation ': 'PUB_DIP_OFF', 'category': 'FSO', 'score': 0}],
  ['MED_HEL', {'title': 'Medical and Health', 'abbreviation ': 'MED_HEALTH', 'category': 'FSS', 'score': 0}],
  ['IT', {'title': 'Information Technology', 'abbreviation ': 'IT', 'category': 'FSS', 'score': 0}],
  ['ENG', {'title': 'Engineering', 'abbreviation ': 'ENG', 'category': 'FSS', 'score': 0}],
  ['INT_PRGM_ENG_LANG', {'title': 'International Programs and English Language', 'abbreviation ': 'INT_PRGM_ENG_LANG', 'category': 'FSS', 'score': 0}],
  ['LAW_ENF_SEC', {'title': 'Law Enforcement and Security', 'abbreviation ': 'LAW_ENF_SEC', 'category': 'FSS', 'score': 0}],
  ['FOR_AFF_OFF',  {'title': 'Foreign Affairs Officer', 'abbreviation ': 'FOR_AFF_OFF', 'category': 'CS', 'score': 0}],
  ['IT_MGMT', {'title': 'Information Technology Management​', 'abbreviation ': 'IT_MGMT', 'category': 'CS', 'score': 0}],
  ['INTEL_SER', {'title': 'Intelligence Series', 'abbreviation ': 'INTEL_SERIES', 'category': 'CS', 'score': 0}],
  ['PUB_AFF', {'title': 'Public Affairs', 'abbreviation ': 'PUB_AFF', 'category': 'CS', 'score': 0}],
  ['LANG_SPLST', {'title': 'Language Specialist', 'abbreviation ': 'LANG_SPEC', 'category': 'CS', 'score': 0} ]

]

// To permit bidirectional navigation in the quiz, each quizSession needs
// a stack to push pop choice objects
class Stack {
  constructor(){ this.items = []; }
  push(elem) { this.items.push(elem); }
  pop() { return this.length > 0 ? this.items.pop() : "Underflow"; }
  peek() { return this.items[items.length - 1] }
  isempty() { return this.items.length === 0; }
  printStack() { this.items.map(elem => { console.log(elme) }); }
}

/*
In order to permit quick communication between the server and multiple
clients, we implement a class that handles all operations related to quiz
data. This will reduce the need to save session data for each user and
complement the underlying stateless http protocol.
*/
class QuizSession {

  constructor() {
    this._sessionId =  uuidv4();
    this._careerRankingMap = new Map(CareerTracks);
    this._answerStack = new Stack();

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

  addNextUserAnswer(userAnswer) {
    this._answerStack.push(userAnswer);
  }

  removeLastUserAnswer() {
    this._answerStack.pop();
  }


  // setCareerRankingMap(newMap) {
  //   this._careerRankingMap = newMap;
  // }

  getCurrentQuestion() {
    return this._currentQuestion;
  }

  setCurrentQuestion(newQuestion) {
    this._currentQuestion = newQuestion;
  }

  // This method returns the top three career recommendations by converting
  // the careerRankingMap into an array and sorting that array using the
  // sortDescendingOrder() method.
  getCareerRecommendations() {

    // Use spread operator to expand make to 2D array
    let careerRankingsArray = [...getCareerRankingMap()];
    careerRankingsArray = sortDescendingOrder(careerRankingsArray);

    const topThreeRecommendations = careerRankingsArray.slice(0, 3);

    return topThreeRecommendations;
  }

  // Sorts a 2D array based on the value of the second element in each array.
  // Note that each array of the 2D array has two elements: the career track
  // and its score based on user input
  sortDescendingOrder(inputArray) {

    let tempArray = [];
    tempArray = tempArray.concat(inputArray);
    // tempArray.sort((a, b) => b[1] - a[1]);
    tempArray.sort(function(a, b) {
      return b[1] - a[1];
    });
    return tempArray;
  }

}



module.exports = { QuizSession };
