import Sequelize from "sequelize";

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

export { Sequelize, sequelize, User, Booking }
