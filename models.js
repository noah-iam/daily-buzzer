// models.js
const mongoose = require('./db'); // Adjust the path as needed

const newsSchema = new mongoose.Schema({
  title: String,
  link: String,
  pubDate: Date,
  description: String,
  clean_text: String,
  crawlTime: Number,
});

const News = mongoose.model('News', newsSchema, 'rss-feed');

module.exports = { News };
