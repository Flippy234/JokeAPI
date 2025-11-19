const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/', (request, response) => {
    response.sendFile('index.html', { root: 'public' })
})

module.exports = router;