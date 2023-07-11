const exampleController = {};

// add middleware
exampleController.exampleMiddleware = (req, res, next) => {
  // some content
  // res.locals.
  // return next()
  // catch errors and put the w/in next -> return next(err)
};

module.exports = exampleController;
