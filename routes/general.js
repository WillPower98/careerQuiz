const express = require('express');
const router = express.Router();

// This endpoint is reponsible for handle all requests that are not for
// quz questsions. The endpoint takes two parameters: a type (such as video)
// and a number, to select the appropriate resource

router.get("/general/type/:type/number/:number", (req, res) => {

  const RequestedResourceType = req.params.type;

  switch (RequestedResourceType) {
    case "video":
      res.render("video_1");
      break;
    case "text_instructions":
      res.render("interlude_1");
    case "results":
      res.render("results")
      break;
    default:
      console.log("Error: undefined resource requested")
      res.status(404).render("error.ejs");

  }
  console.log("get request to general endpoint");

});

module.exports = router;
