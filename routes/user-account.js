const express = require("express");
const router = new express.Router();
const User = require("../models/User");

router.get("/user-account/:id", (req, res) => {
  let bigWrapper = "wrapper-pages";
  User.findById(req.params.id)
    .then(users => {
      res.render("user/user-account", { users, bigWrapper, navlayout: true });
    })
    .catch(err => console.error(err));
});

module.exports = router;
