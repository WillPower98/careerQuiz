const express = require('express');
const router = express.Router();

// This endpoint is reponsible for serving multimedia (video) content.
// The endpoint takes a single parameter, a number that corresponds the
// requested video.

router.get("/general/type/:type/number/:number", (req, res) => {

  const RequestedResourceType = req.params.type;

  switch (RequestedResourceType) {
    case "video":
      res.render("video_1");
      break;
    case "text_instructions":
      res.render("interlude_1");
      break;
    default:
      console.log("Error: undefined resource requested")
      res.status(404).render("error.ejs");

  }
  console.log("get request to general endpoint");

});

module.exports = router;
