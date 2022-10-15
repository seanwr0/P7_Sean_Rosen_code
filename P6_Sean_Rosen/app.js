require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/post');
const app = express();
const path = require('path');

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api', postRoutes);

module.exports = app;