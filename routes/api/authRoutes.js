// Requiring our models and passport as we've configured it
const User = require("../../models/user");
const passport = require("../../config/passport");


// const router = require("express").Router();

module.exports = function(router) {
  router.post("/api/auth/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    })
  });

router.post("/api/auth/signup", (req, res) => {
    req.body.password = User.generateHash(req.body.password);
    User.create({
      email: req.body.username,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/login");
      })
      .catch(err => {
        res.status(401).json(err);
      })
  });
}




// module.exports = function(app) {
//   // Using the passport.authenticate middleware with our local strategy.
//   // If the user has valid login credentials, send them to the members page.
//   // Otherwise the user will be sent an error
//   app.post("/login", , 
//   });

//   // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
//   // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
//   // otherwise send back an error
// app.post("/signup", 
//   });

//   // Route for logging user out
//   app.get("/logout", (req, res) => {
//     req.logout();
//     res.redirect("/");
//   });

//   // Route for getting some data about our user to be used client side
//   app.get("/user_data", (req, res) => {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });
// };
