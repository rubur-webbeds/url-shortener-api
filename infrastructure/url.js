const URLModel = require('../models/url');

module.exports = {
    getAllURLs: async () => {
        return await URLModel.find();
    },
    getOneURL: async (shortURL) => {
        return await URLModel.findOne({shortURL});
    },
    postURL: async (shortURL, longURL) => {
        var newURL = new URLModel({
            shortURL,
            longURL
        });
    
        return await newURL.save();
    },
    deleteURL: async (shortURL) => {
        return await URLModel.deleteOne({shortURL});
    }
}