import { Product } from "../interface/types";
import { Request, Response } from "express";
import { ProductDB } from "../models/Product";
import sequelize from "../config/database";

export const insertProducts = async (req: Request, res: Response) => {
  try {
    const { products } = req.body; 

    await sequelize.sync();

    const timestamp = Date.now();
    const productsWithOrderNumbers = products.map((product: Product) => ({
      ...product,
      orderNumber: timestamp,
    }));

    await ProductDB.bulkCreate(productsWithOrderNumbers);

    const allProducts = await ProductDB.findAll();

    return res.status(200).json({ allProducts });
  } catch (err) {
    console.error("SQL error", err);
  }
};

export default insertProducts;
