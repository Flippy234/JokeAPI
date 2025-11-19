const express = require("express");
const router = express.Router();

const { jokes } = require('../../../app');

router.get("/", (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json(randomJoke);
});

module.exports = router;
