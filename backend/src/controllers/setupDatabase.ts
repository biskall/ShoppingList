import { Category } from "../interface/types";
import { Request, Response } from "express";
import sequelize from "../config/database";
import { CategoryDB } from "../models/Category";

const categories: Category[] = [
  { id: "1", categoryName: "אלקטרוניקה" },
  { id: "2", categoryName: "ספרים" },
  { id: "3", categoryName: "בגדים" },
  { id: "4", categoryName: "אוכל" },
  { id: "5", categoryName: "רהיטים" },
];

const setupDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // This will drop and recreate the tables

    await CategoryDB.bulkCreate(categories);

    // const allCategories = await CategoryDB.findAll();
    // console.log("Categories:", allCategories);

    // return res.status(200).json({ allCategories });
  } catch (err) {
    console.error("SQL error", err);
  }
};

export default setupDatabase;
