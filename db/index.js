require('dotenv').config();

const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL);

db.authenticate()
  .then(() => console.log('Successfully connected to the database.'))
  .catch((err) =>
    console.log('Error connecting to the database.', err)
  );

module.exports = db;
