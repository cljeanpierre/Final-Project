const User = require("../../models/user");
const Game = require("../../models/game");
const passport = require("../../config/passport");
const router = require("express").Router();

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    email: req.user.email,
    id: req.user.id
  })
});

router.post("/signup", (req, res) => {
  req.body.password = User.generateHash(req.body.password);
  User.create({
    email: req.body.username,
    password: req.body.password
  })
    .then(() => {
      res.end();
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.post("/scores", (req, res)=> {
  Game.create({
    user: req.body.id,
    score: req.body.score,
  })
    .then((data)=> {
      res.json(data);
      res.end();
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/scores", (req, res)=> {
  Game.find({})
    .populate("User")
    .sort({score: -1})
    .then(data=> {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    })
});



module.exports = router;


//   // Route for logging user out
//   app.get("/logout", (req, res) => {
//     req.logout();
//     res.redirect("/");
//   });
