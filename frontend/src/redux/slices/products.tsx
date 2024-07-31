import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsEndpoints } from "../apiQueries/products";
import { Product, ProductsState } from "../../interfaces/types";

const initialState: ProductsState = {
    products: null,
    quantity: 0,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        countTotalItems(state, action: PayloadAction<{ quantity: number }>) {
            state.quantity += action.payload.quantity;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            productsEndpoints.orderProducts.matchFulfilled,
            (state, { payload }: PayloadAction<Product[]>) => {
                state.products = payload;
            }
        );
    },
});

export const productsSliceReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;
