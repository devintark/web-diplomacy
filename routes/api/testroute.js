const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Load input validation
// Load User model

router.get('/test0', (req, res) =>  {
        res.status(200).json({test: true})
    }
);

module.exports = router;
