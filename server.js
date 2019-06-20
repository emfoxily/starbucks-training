const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const mongoose = require('mongoose');

const db = mongoose.connection;

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.listen(PORT);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'starbucks';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

db.on('error', err => console.log(`${err.message} is Mongod not running?`));

db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));

db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {});

// eslint-disable-next-line eol-last
app.use('/', serveStatic(path.join(__dirname, '/dist')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

console.log(`Server is listening on port ${PORT}`);
