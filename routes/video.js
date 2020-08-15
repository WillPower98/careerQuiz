const express = require('express');
const router = express.Router();

// This endpoint is reponsible for serving multimedia (video) content.
// The endpoint takes a single parameter, a number that corresponds the
// requested video.

router.get("/video/number/:number", (req, res) => {

  const VideoNumber = req.params.number;

  switch (VideoNumber) {
    case "1":
      res.render("video_1");
      break;
    case "2":
      res.render("video_2");
      break;
    default:
      console.log("Error: undefined resource requested")
      res.status(404).render("error.ejs");

  }
  console.log("get request to video endpoint");

});

module.exports = router;
