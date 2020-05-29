const loaders = require("./loaders");
const express = require("express");

async function startServer() {
  const app = express();
  await loaders(app);
  const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready !`);
  });
}

startServer();
