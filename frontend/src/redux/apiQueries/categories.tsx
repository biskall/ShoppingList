// apiQueries.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category } from "../../interfaces/types";

// const api_url = "http://localhost:5008/";

const categoriesApi = createApi({
    reducerPath: "categoriesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5008/`,
    }),
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => ({
                url: "",
                method: "GET",
            }),
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    endpoints: categoriesEndpoints,
    reducerPath: categoriesReducerPath,
    reducer: categoriesReducer,
    middleware: categoriesMiddleware,
} = categoriesApi;
