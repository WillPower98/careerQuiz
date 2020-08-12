const express = require('express');
const router = express.Router();


router.get("/video", (req, res) => {

  console.log("get request to video endpoint");
  res.render("intro_video");
});


router.post("/video", (req, res) => {
  console.log("post request to video endpoint");
});

module.exports = router;
