const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const indexRouter = require('./routes/index.js');
const quizRouter = require('./routes/quiz.js');
const videoRouter = require('./routes/general.js');
const preResultsRouter = require('./routes/preResults.js');
const resultsRouter = require('./routes/results.js');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use('/', indexRouter);
app.use('/', quizRouter);
app.use('/', videoRouter);
app.use('/', preResultsRouter);
app.use('/', resultsRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server has started on port 3000');
});
