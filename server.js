const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// eslint-disable-next-line eol-last
app.use('/', serveStatic(path.join (__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log('Server is listening on port ' + PORT);
