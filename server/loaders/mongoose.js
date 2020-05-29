const mongoose = require("mongoose");
const config = require("../config/keys");

const dbPath = config.mongoURI;
// Connect to MongoDB
module.exports = async () => {
  mongoose
    .connect(dbPath, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.log(err));
};
