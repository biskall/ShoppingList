import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
} from "sequelize-typescript";
import { Category } from "../interface/types";

@Table({
  tableName: "Categories",
  timestamps: false,
})
export class CategoryDB extends Model<Category> {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
  })
  id: string | undefined;

  @Column({
    type: DataType.STRING,
  })
  categoryName: string | undefined;
}
