// require in dependancies
const express = require("express");
const path = require("path");
const fs = require("fs");

// set express functionality to app and establish PORT
const app = express();
const PORT = 3000;

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// handle requests for static files
app.use(express.static(path.resolve(__dirname, '../src')))
// serve index.html on the route '/'
app.get('/', (req, res) => {
  console.log('first')
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

// require router
const logRouter = require('./routes/logRouter.js');
// const dataRouter = require('./routes/dataRouter.js')

// convert incoming requests to JSON
app.use(express.json());
// app.use('*', express.urlencoded({ extended: true }));

// handle specific route requests
app.use('/log', logRouter);
// app.use('/data', dataRouter);

// // TODO: handle generic request to serve HTML file
// app.get("/", (req, res) => {
//   console.log('app.get(/) response');
//   res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"));
// });

// TODO: catch-all route for unknown requests
app.use((req, res) => {
  res.sendStatus(404);
});

// TODO: global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);

  return res.status(errorObj.status).json(errorObj.message);
});

// listen on PORT 3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// export app
module.exports = app;
