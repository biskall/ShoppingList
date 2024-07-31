import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categoriesEndpoints } from "../apiQueries";
import { Category, Product, CategoriesState } from "../../interfaces/types";

const initialState: CategoriesState = {
  categories: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {}, // Add an empty reducers field
  extraReducers: (builder) => {
    builder.addMatcher(
      categoriesEndpoints.getCategories.matchFulfilled,
      (state, { payload }: PayloadAction<Category[]>) => {
        state.categories = payload;
      }
    );
  },
});

export const categoriesSliceReducer = categoriesSlice.reducer;
export const {} = categoriesSlice.actions;