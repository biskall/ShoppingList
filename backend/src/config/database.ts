import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { CategoryDB } from "../models/Category";
import { ProductDB } from "../models/Product";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "mssql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [CategoryDB, ProductDB],
});

export default sequelize;
