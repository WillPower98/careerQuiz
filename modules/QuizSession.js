const { v4: uuidv4 } = require('uuid');
const { CareerTracks } = require('../data/careerTracks.js');


// To permit bidirectional navigation in the quiz, each quizSession needs
// a stack to push pop choice objects
class Stack {
  constructor(){ this.items = []; }
  push(elem) { this.items.push(elem); }
  pop() { return this.items.length > 0 ? this.items.pop() : "Underflow"; }
  peek() { return this.items[items.length - 1] }
  isempty() { return this.items.length === 0; }
  printStack() { this.items.map(elem => { console.log(elme) }); }
}

// Sorts a 2D array based on the value of the second element in each array.
// Note that each array of the 2D array has two elements: the career track
// and its score based on user input
function sortDescendingOrder(inputArray) {

  let tempArray = [];
  tempArray = tempArray.concat(inputArray);
  // tempArray.sort((a, b) => b[1] - a[1]);
  tempArray.sort(function(a, b) {
    return b[1].score - a[1].score;
  });
  return tempArray;
}



/*
In order to permit quick communication between the server and multiple
clients, we implement a class that handles all operations related to quiz
data. This will reduce the need to save session data for each user and
complement the underlying stateless http protocol.
*/
class QuizSession {

  constructor(removeSelfMethod) {
    this._sessionId =  uuidv4();
    this._careerRankingMap = new Map(CareerTracks);
    this._answerStack = new Stack();

    this._currentQuestion = {};

    this.removeSelf =  removeSelfMethod;
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

  getLastUserAnswer() {
    return this._answerStack.pop();
  }

  answerStackIsEmpty() {
    return this._answerStack.isempty();
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

  updateCareerMapScores() {

    let careerMap = this._careerRankingMap;
    while ( ! this._answerStack.isempty() ) {
      let UserChoiceArray = this._answerStack.pop();

      for (let i = 0; i < UserChoiceArray.length; i++) {
        let currentUserChoice = JSON.parse(UserChoiceArray[i]);
        Object.keys(currentUserChoice).forEach(function(key, index) {
          careerMap.get(key).score += currentUserChoice[key];
        });
      }
    }
    this.setCareerRankingMap(careerMap);
  }

  // This method returns the top three career recommendations by converting
  // the careerRankingMap into an array and sorting that array using the
  // sortDescendingOrder() method.
  getCareerRecommendations() {

    // Use spread operator to expand make to 2D array
    let careerRankingsArray = [...this.getCareerRankingMap()];
    careerRankingsArray = sortDescendingOrder(careerRankingsArray);

    const topThreeRecommendations = careerRankingsArray.slice(0, 3);

    return topThreeRecommendations;
  }

}



module.exports = { QuizSession };
