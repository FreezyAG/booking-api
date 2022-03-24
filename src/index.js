/* -------------------------------------------------------------------------- */
/*                              external imports                              */
/* -------------------------------------------------------------------------- */
import path from "path";
// import cookieParser from "cookie-parser";
// import { Server } from "http";

import express from "express";
import dotEnv from 'dotenv';
// import morgan from "morgan";
// import helmet from "helmet";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

/* ---------------------------- internal imports ---------------------------- */
import logger from "./utils/logger";
import config from "./config";
import { sequelize } from "./db/model";
import cors from "./middleware/utils";

// import { createMongoDBConnection } from "./db/mongodb";
import ErrorHandler from "./middleware/error-handler";

dotEnv.config({ path: path.resolve(path.dirname(__filename), './config/.env') })

import routes from './routes/index';

var app = express();

app.use(cors);
app.use(express.json());
// app.use(cookieParser);
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.use(ErrorHandler);

// db.sequelize.sync();
// drop the table if it already exists
sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

const port = config.server.port
app.listen(port, () => logger.info(`server connected at port: ${port}`));
