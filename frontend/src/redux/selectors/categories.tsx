import { RootState } from "../index";
import { Category } from "../../interfaces/types";

export const getCategories = (state: RootState): Category[] | null => state.categories.categories;
