import { RootState } from "../index";
import { Product } from "../../interfaces/types";

export const selectProducts = (state: RootState): Product[] | null => state.products.products;
