const mongoose = require('mongoose');
const { DB } = require('./config');

const connectionURL = `mongodb://${DB.username}:${DB.password}@${DB.host}:${DB.port}/${DB.name}`
mongoose.connect(connectionURL, { useNewUrlParser: true });

module.exports = mongoose.connection;