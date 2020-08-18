const express = require('express');
const router = express.Router();

// This endpoint is reponsible for handle all requests that are not for
// quz questsions. The endpoint takes two parameters: a type (such as video)
// and a number, to select the appropriate resource

router.post("/general", (req, res) => {

  console.log(req.body.type);
  console.log(req.body.id);
  console.log(req.body.number);

  const RequestedResourceType = req.body.type;

  switch (RequestedResourceType) {
    case "video":
      const VideoNumber = parseInt(req.body.number);

      if (VideoNumber === 1) {
        res.render("video_1");
      }

      if (VideoNumber === 2) {
        res.render("video_2", { sessionId: req.body.id });
      }

      break;
    case "text_instructions":
      const InterludeNumber = parseInt(req.body.number);

      if (InterludeNumber ===  1) {
        res.render("interlude_1");
      }

      if (InterludeNumber ===  2) {
        res.render("interlude_2");
      }

      if (InterludeNumber ===  3) {
        res.render("interlude_3", { sessionId: req.body.id });
      }


      break;
    default:
      console.log("Error: undefined resource requested")
      res.status(404).render("error.ejs");

  }
  console.log("get request to general endpoint");

});

module.exports = router;
