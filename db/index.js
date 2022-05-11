require('dotenv').config();

const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL);

db.authenticate()
  .then(() => console.log('Successfully connected to the database.'))
  .catch((err) =>
    console.log('Error connecting to the database.', err)
  );

export const syncAndSeed = async () => {
  await db.sync({ force: true });
  return await Promise.all([]);
};

module.exports = db;

// const syncAndSeed = ()=> {
//   return conn.sync({ force: true })
//     .then(()=> Promise.all([
//       User.create({ name: 'moe'}),
//       User.create({ name: 'larry'}),
//       User.create({ name: 'curly'}),
//     ])
//     );
// };
