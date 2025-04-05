const express = require('express');
const path = require('path');

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../client/build')));

// Main API route
app.get('/api/info', (req, res) => {
  res.json({
    message: 'Pinterest Video Downloader API is running',
    version: '1.0.0'
  });
});
