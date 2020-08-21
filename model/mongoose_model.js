const mongoose = require("mongoose");



// Connect to remote Mongo Atlas database
mongoose.connect("mongodb+srv://ChrisCross:Crossmongo@cluster0.wwh6v.mongodb.net/impactHackDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Define the Mongoose Schema. The results property of each record is an array
// containing three careerTrack objects
const quizAttemptSchema = {
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: Date,
  recommendedCareers: {
    type: Array,
    required: true
  },

};

// Create the model
const UserResult = mongoose.model("UserResult", quizAttemptSchema);


// To save a new user result, just use this code:
// const NewUserResult = new UserResult({
//   firstName: "fasfdasfa",
//   lastName: "fasdfdasfa",
//   email: "fdasfda@fjdasfa.com"
//   recommendedCareers: []
// });
//
// NewUserResult.save();

// sort by "field" descending and return to 10 latest results
const getOtherUersRecommendations = () => {

  UserResult.find({}).sort('-date').limit(10).exec((err, results) => {
      if (!err) {
          console.log(results);
          return results;
          // Add other peoples top recommendation to finish.ejs
      }
      else {
          console.log(err);
          // Render error message along with other current user's recommendations
          return [].push(err);
      }
  });



}



module.exports = { UserResult, getOtherUersRecommendations };
