import { Category } from "../interface/types";
import sequelize from "../config/database";
import { CategoryDB } from "../models/Category";

const categories: Category[] = [
  { id: "1", categoryName: "מוצרי ניקיון" },
  { id: "2", categoryName: "גבינות" },
  { id: "3", categoryName: "ירקות ופירות" },
  { id: "4", categoryName: "בשר" },
  { id: "5", categoryName: "דגים ומאפים" },
];

const setupDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await CategoryDB.bulkCreate(categories);
  } catch (err) {
    console.error("SQL error", err);
  }
};

export default setupDatabase;
