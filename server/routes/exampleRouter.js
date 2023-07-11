const express = require("express");

// add any controllers
const exampleController = require("../controllers/exampleController.js");

const router = express.Router();

// example router method
router.get("/", fileController.getCharacters, (req, res) => {
  return res
    .status(200)
    .json({ characters: res.locals.characters, favs: res.locals.favs });
});

// export
module.exports = router;
