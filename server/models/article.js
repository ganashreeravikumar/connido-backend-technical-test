
const mongoose = require('mongoose');

const Article = mongoose.model('Article', {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    dateCreated: { type: Date, required: true },
    dateUpdated: { type: Date, required: true }
});

module.exports = Article;
