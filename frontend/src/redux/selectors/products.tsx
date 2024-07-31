import { RootState } from "../index";
import { Product } from "../../interfaces/types";

export const getProductsQuantity = (state: RootState): number => state.products.quantity;
