import express from "express";
import {
  setupDatabase,
  insertProducts,
  getCategories,
} from "./controllers/index";

const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const port: number = 5008;

setupDatabase();

app.get("/", getCategories);


app.post("/orderProducts", insertProducts);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
