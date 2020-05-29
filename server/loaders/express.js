const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("../api/users");
// const app = express();

module.exports = async (app) => {
  // Bodyparser middleware
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  app.use(bodyParser.json());

  // Passport middleware
  app.use(passport.initialize());

  // Passport config
  require("../config/passport")(passport);

  // Routes
  app.use("/api/users", users);

  return app;
};

