/* -------------------------------------------------------------------------- */
/*                              external imports                              */
/* -------------------------------------------------------------------------- */
import path from "path";
import express from "express";
import dotEnv from 'dotenv';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

/* ---------------------------- internal imports ---------------------------- */
import logger from "./utils/logger";
import config from "./config";
import { sequelize } from "./db/model/index.js";
import cors from "./middleware/utils";
import ErrorHandler from "./middleware/error-handler";

dotEnv.config({ path: path.resolve(path.dirname(__filename), './config/.env') })

import routes from './routes';

var app = express();

app.use(cors);
app.use(express.json());
// app.use(cookieParser);
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.use(ErrorHandler);

sequelize.sync();
// drop the table if it already exists
// sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

const port = config.server.port
app.listen(port, () => logger.info(`server connected at port: ${port}`));
