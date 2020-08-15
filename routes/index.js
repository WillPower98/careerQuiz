const express = require('express');
const router = express.Router();


// To faciliate development, we will move all routing logic to index.js
// and make use of a RoutingMap data-structure to server static webpages

router.get("/", (req, res) => {

  console.log("get request to index endpoint");
  res.render("index");
});


router.post("/", (req, res) => {
  console.log("post request to index endpoint");
  res.render("intro_video");
});


module.exports = router;
