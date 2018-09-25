const Article = require('../models/article');

const getArticles = (req, res) => {
    let skip = 0, limit = 5;
    const page = req.query.page, author = req.query.author, title = req.query.title;

    if (page && page > 0) {
        skip = (page - 1) * limit;
    }

    let query = {};
    if (author && author != '') {
        query = { ...query, author: author };
    }

    if (title && title != '') {
        query = { ...query, title: title };
    }

    Article.find(query, {}, { skip: skip, limit: limit }, (err, articles) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(articles);
        }
    })
}

const createArticle = (req, res) => {
    let newArticle = new Article(req.body);

    newArticle.save((err, newArticle) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send();
        }
    })
};

module.exports = { getArticles, createArticle };