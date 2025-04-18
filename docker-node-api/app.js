const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/testdb';

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected 🚀');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node + MongoDB 🐳');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});