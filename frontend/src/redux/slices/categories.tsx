import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categoriesEndpoints } from "../apiQueries";
import { Category, CategoriesState } from "../../interfaces/types";

const initialState: CategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      categoriesEndpoints.getCategories.matchFulfilled,
      (state, { payload }: PayloadAction<Category[]>) => {
        state.categories = payload;
        console.log("state.categories =>", state.categories);
        console.log("payload =>", payload);
      }
    );
  },
});

export const categoriesSliceReducer = categoriesSlice.reducer;
export const { } = categoriesSlice.actions;