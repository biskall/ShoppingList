import { RootState } from "../index";
import { Category, Product } from "../../interfaces/types";

export const getCategories = (state: RootState): Category[] | null => state.categories.categories;

// export const selectCategoryById = (state: RootState, categoryId: string): Category | undefined =>
//     state.categories.categories?.find(category => category.id === categoryId);

// export const selectProductsByCategoryId = (state: RootState, categoryId: string): Product[] | null =>
//     state.categories.products[categoryId] ?? null;
