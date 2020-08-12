const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {

  console.log("get request to index endpoint");
  res.render("index");
});


router.post("/", (req, res) => {
  console.log("post request to index endpoint");
  res.render("intro_video");
});

module.exports = router;
