const express = require('express');
const router = express.Router();
const shortenURL = require('../services/urlshortener');

// GET /api/url
// Return all shortURL-originalURL pairs
router.get('/', (req, res) => {
    res.json('Getting all urls');
});

router.get('/:shortURL', (req, res) => {
    var url = req.params.shortURL;

    res.send(`Getting ${url}`);
});

router.post('/', (req, res) => {
    var { longURL } = req.body;
    var shortURL = shortenURL(longURL);

    var result = {
        longURL,
        shortURL
    }

    res.json(result);
});

router.delete('/:shortURL', (req, res) => {
    var url = req.params.shortURL;

    res.send(`Deleting ${url}`);
});

module.exports = router;