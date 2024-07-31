import express from "express";
import {
  setupDatabase,
  insertProducts,
  getCategories,
} from "./controllers/index";

const cors = require("cors");

const app = express();
require("dotenv").config();

// const dboperations = require("./sequelize/dbOperations");
// dboperations.getLoginDetails().then((result: any) => {
//   console.log("result =>", result);
// });

app.use(cors());
app.use(express.json());

const port: number = 5008;
setupDatabase();
app.get("/", getCategories);
// app.get("/", insertProducts);

app.post("/orderProducts", insertProducts);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
