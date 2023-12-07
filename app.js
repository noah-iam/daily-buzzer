// app.js
const express = require('express');
const mongoose = require('./db');
const { News } = require('./models');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Example server code
// Example server code using Mongoose v6.x
app.get('/', async (req, res) => {
    try {
      const news = await News.find({}).exec();
  
      // Verify the 'news' data before rendering
     // console.log('Fetched news data:', news);
  
      // Render the EJS template and pass the news data
      res.render('index', { news });
    } catch (err) {
      console.error('Error fetching news:', err);
      res.status(500).send('Internal Server Error');
    }
  });
  
  
  

// Define other routes as needed

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
