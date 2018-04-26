const express = require('express');
const path = require('path');
const app = express();
module.exports = app;

app.use(require('./middleware'));

app.use(require('./routes'));

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  console.log(err.message);
  console.log(err.stack);
  res.send(err.message || 'Internal server error');
});
