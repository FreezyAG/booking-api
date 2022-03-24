import Sequelize from "sequelize";

import config from "../../config";
import users from "./user";

const dbConfig = config.db

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'postgres',

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const User = users(sequelize, Sequelize);

export { Sequelize, sequelize, User }