require('dotenv').config();

const { Sequelize } = require('sequelize');

const { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST } =
  process.env;

const db = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
});

db.authenticate()
  .then(() => console.log('Successfully connected to the database.'))
  .catch((err) =>
    console.log('Error connecting to the database.', err)
  );

// const db = {};

module.exports = db;
