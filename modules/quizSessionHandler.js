



// This is the runtime data structure used to store the quiz progress of all users.
let quizSessions = new Map();


module.exports.quizSessions = new Map();


// class QuizSessionHandler {
//
//   constructor() {
//     /* IMPORTANT: DO NOT TOUCH. These are critical runtime data structure */
//     this.quizSessionsMap = new Map();
//   }
//
//   addQuizSession(newQuizSession) {
//     this.quizSessionsMap.set(newQuizSession.getQuizSessionId(), newQuizSession);
//   };
//
//   getQuizSession(QuizSessionId) {
//
//   }
//
//   removeQuizSession(newQuizSession) {
//     this.quizSessionsMap.unset(newQuizSession.getQuizSessionId());
//   };
//
//   isQuizSessionInMap(quizSessionId) {
//     return this.quizSessionsMap.has(quizSessionId);
//   };
