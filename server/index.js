require('dotenv').config();

const path = require('path');
const express = require('express');

const db = require('./db');

const SERVER_PORT = process.env.SERVER_PORT;
const WELCOME_MESSAGE = process.env.WELCOME_MESSAGE;

const app = express();

// Serve React
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Routes
app.get('/api', (req, res) => {
  res.json({ message: WELCOME_MESSAGE });
});

// Catch all other requests
app.get('*', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../client/build', 'index.html')
  );
});

// Listen
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});

/*

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const morgan = require('morgan')
const session = require('express-session');
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')

const db = require('./db')
const api = require('./api');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session middleware, because my JWT auth broke things and so I am using sessions in the meantime
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.get('/', (req, res) => res.sendFile(index.html));
app.use('/api', api);

// custom error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});


module.exports = app;

*/
