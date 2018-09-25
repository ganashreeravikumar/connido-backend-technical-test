const express = require('express');
const bodyParser = require('body-parser');

const { SERVER } = require('./server/config');
const db = require('./server/db');
const Articles = require('./server/controllers/articles');

const app = express();
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Connection established with DB....');

  app.get("/api/articles", Articles.getArticles);
  app.post("/api/articles", Articles.createArticle);
});

const server = app.listen(SERVER.port, () => {
  console.log(`Your app is listening on port: ${SERVER.port}`);
});
