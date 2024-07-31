import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsEndpoints } from "../apiQueries/products";
import { Product, ProductsState } from "../../interfaces/types";

const initialState: ProductsState = {
    products: null,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            productsEndpoints.getProducts.matchFulfilled,
            (state, { payload }: PayloadAction<Product[]>) => {
                state.products = payload;
                console.log("state.products =>", state.products);
                console.log("payload =>", payload);
            }
        );
        builder.addMatcher(
            productsEndpoints.orderProducts.matchFulfilled,
            (state, { payload }: PayloadAction<Product[]>) => {
                state.products = payload;
                console.log("Updated state.products after ordering =>", state.products);
                console.log("payload =>", payload);
            }
        );
    },
});

export const productsSliceReducer = productsSlice.reducer;
export const { } = productsSlice.actions;
