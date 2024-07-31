import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../interfaces/types";

const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5008/`,
    }),
    endpoints: (builder) => ({
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
    useOrderProductsMutation,
    endpoints: productsEndpoints,
    reducerPath: productsReducerPath,
    reducer: productsReducer,
    middleware: productsMiddleware,
} = productsApi;
