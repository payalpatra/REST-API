const { Router } = require("express");
const express = require("express");
const user = require("../models/user");
const router = express.Router();
const User = require("../models/user"); // This gonna pull our users from models/user
// Getting all Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    // 500 --> error in server
    res.status(500).json({
      message: err.message,
    });
  }
});

//Getting One user
router.get("/:id", getUsers, (req, res) => {
  res.json(res.user);
});

//Creating One
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    userInteraction: req.body.userInteraction,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser); // Succesfuuly saved
  } catch (err) {
    // 400 --> User gives a bad data
    res.status(400).json({
      message: err.message,
    });
  }
});

//Update User //// Patch for specific information
router.patch("/:id", getUsers, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.userInteraction != null) {
    res.user.userInteraction = req.body.userInteraction;
  }
  ////Updating
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

// Delete User
router.delete("/:id", getUsers, async (req, res) => {
  try {
    await res.user.remove();
    res.json({
      message: "Deleted User",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

///Creating a Middleware
async function getUsers(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({
        message: "cannot find user",
      });
    }
  } catch (err) {
    return res.status().json({
      message: err.message,
    });
  }

  res.user = user;
  next();
}

module.exports = router;
