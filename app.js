const express = require("express");
const personRouter = require("./src/personRouter");
const app = express();
app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/person', personRouter);

module.exports = app;