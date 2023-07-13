const express = require("express");

// add any controllers
const logController = require("../controllers/logController.js");

const router = express.Router();

// logController.getIndivAnimal, 
router.post("/log", (req, res) => {
  console.log('entered logRouter');
  // return res
  //   .status(200)
  //   .json(res.locals.animalId);
});

// export
module.exports = router;
