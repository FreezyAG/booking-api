import Sequelize from 'sequelize';

import userModel from "./user"
import bookingModel from "./booking"

import dbConfig from "../config/config";

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const User = userModel(sequelize, Sequelize);
const Booking = bookingModel(sequelize, Sequelize);

const db = {};

db[User.name] = User
db[Booking.name] = Booking

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { sequelize, User, Booking }

export default db
