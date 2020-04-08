const express = require('express');
const router = express.Router();
const shortenURL = require('../services/urlshortener');
const { getAllURLs, getOneURL, postURL, deleteURL } = require('../infrastructure/url');

// GET /api/url
// Return all shortURL-originalURL pairs
router.get('/', async (req, res) => {
    try{
        res.json(await getAllURLs());
    }
    catch (err){
        res.status(500).json({message: err});
    }
});

// GET /api/[shortURL]
// Given a shortURL return the long one
router.get('/:shortURL', async (req, res) => {
    var url = req.params.shortURL;

    try{
        var result = await getOneURL(url);
        if(result == null){
            res.status(404).json({message: 'shortURL not found'});
        }
        res.json(result);
    }
    catch (err){
        res.status(500).json({message: err});
    }
});

// POST /api/url
// Shorten the longURL and return it
router.post('/', async (req, res) => {
    var { longURL } = req.body;
    var shortURL = shortenURL(longURL);

    try {
        var result = await postURL(shortURL, longURL);
        res.json(result);
    }
    catch (err) {
        res.status(400).json({message: err});
    }
});

// DELETE /api/url/[shortURL]
// Delete shortURL
router.delete('/:shortURL', async (req, res) => {
    var url = req.params.shortURL;

    try{
        var result = await deleteURL(url);
        if(result.n < 1){
            res.status(404).json({message: 'shortURL not found'});
        }

        res.json(result);
    }
    catch (err){
        res.status(500).json({message: err});
    }
});

module.exports = router;