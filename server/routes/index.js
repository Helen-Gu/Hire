var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// register a router: User sign up
/* 
  1. get req params
  2. processing
  3. return res
*/
router.post("/register", function (req, res) {
  const { firstName, lastName, email, passWord } = req.body;
});
module.exports = router;
