import { Category } from "../interface/types";
import { Request, Response } from "express";
import sequelize from "../config/database";
import { CategoryDB } from "../models/Category";

const getCategories = async (req: Request, res: Response) => {
  try {
    const allCategories = await CategoryDB.findAll();
    console.log("Categories:", allCategories);

    const categories: Category[] = allCategories.map((category) => ({
      id: category.id,
      categoryName: category.categoryName,
    }));

    return res.status(200).json(categories);
  } catch (err) {
    console.error("SQL error", err);
  }
};

export default getCategories;
