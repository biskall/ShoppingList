import {
    Table,
    Column,
    Model,
    ForeignKey,
    DataType,
  } from 'sequelize-typescript';
  import { CategoryDB } from './Category';
  import { Product } from "../interface/types";
  
  @Table({
    tableName: 'Products',
    timestamps: false,
  })
  export class ProductDB extends Model<Product> {
    @Column({
      type: DataType.STRING,
    })
    name!: string;
  
    @ForeignKey(() => CategoryDB)
    @Column({
      type: DataType.STRING,
    })
    categoryId!: string;
  
    @Column({
      type: DataType.INTEGER,
    })
    quantity!: number;
  
    @Column({
      type: DataType.BIGINT,
      allowNull: false,
    })
    orderNumber!: number;
  }
  