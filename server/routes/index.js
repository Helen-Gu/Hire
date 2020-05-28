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
router.post("/register", (req, res) => {
  const { firstName, lastName, email, passWord } = req.body;
  if (email === 'helengu1996@gmail.com') {
    res.send({ code: 1, msg: 'usar already exists' });
  } else {
    res.send({ code: 0, data: {id: '123', firstName, lastName }})
  }
});
module.exports = router;
