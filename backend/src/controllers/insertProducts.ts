import { Product } from "../interface/types";
import { Request, Response } from "express";
import { ProductDB } from "../models/Product";
import sequelize from "../config/database";

// const products: Product[] = [
//   { name: "Laptop", categoryId: "1", quantity: 10 },
//   { name: "Novel", categoryId: "2", quantity: 20 },
//   { name: "T-Shirt", categoryId: "3", quantity: 30 },
//   { name: "Bread", categoryId: "4", quantity: 40 },
// ];

export const insertProducts = async (req: Request, res: Response) => {
  try {
    console.log("req.body =>" ,req.body);
    const { products } = req.body; 

    await sequelize.sync();

    const timestamp = Date.now();
    const productsWithOrderNumbers = products.map((product: Product) => ({
      ...product,
      orderNumber: timestamp,
    }));

    await ProductDB.bulkCreate(productsWithOrderNumbers);

    const allProducts = await ProductDB.findAll();
    console.log("Products:", allProducts);

    return res.status(200).json({ allProducts });
  } catch (err) {
    console.error("SQL error", err);
  }
};

export default insertProducts;
