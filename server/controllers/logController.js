const db = require('../models/facilityModel.js');

const logController = {};

// middleware

// check if animal name exists in the database
// if true, return the animal's _id
logController.getIndivAnimal = async (req, res, next) => {
  try {
    console.log('entered logController.getIndivAnimal')
    const { name } = req.body;
    console.log('req.body: ', name);
    const queryString = 'SELECT _id FROM animals WHERE name = $1';

    const result = await db.query(queryString, [name]);
    res.locals.animalId = result;

    return next();

  } catch (err) {
    return next({
      log: 'Error in logController.getIndivAnimal: ' + err,
      message: { err: 'That animal does not exist in the database./n Please either enter a new name or click the Add Animal button'}
    });
  }

};

module.exports = logController;
