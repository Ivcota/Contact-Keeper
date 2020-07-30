const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
      check("name", "Name is required").not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Please enter a passwor dwith 6 or more characters').isLength({min: 6}),
    ],
  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmprty()) {
        return res.status(400).json({ errors: error.array() })
    }

    res.send('passed');
  }
);

module.exports = router;
