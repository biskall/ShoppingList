import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../interfaces/types";

// const api_url = "http://localhost:5008/";

const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5008/`,
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => ({
                url: "products",
                method: "GET",
            }),
        }),
        orderProducts: builder.mutation<Product[], { products: Product[] }>({
            query: ({ products }) => ({
                url: 'orderProducts',
                method: 'POST',
                body: {
                    products
                },
            }),
        }),
    }),

});

export const {
    useGetProductsQuery,
    useOrderProductsMutation,
    endpoints: productsEndpoints,
    reducerPath: productsReducerPath,
    reducer: productsReducer,
    middleware: productsMiddleware,
} = productsApi;
