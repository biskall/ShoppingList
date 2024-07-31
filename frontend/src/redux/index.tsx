import { configureStore } from "@reduxjs/toolkit";
import * as apiQueries from "./apiQueries/index";
import * as slices from "./slices";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfiguration = {
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
};

export const store = configureStore({
    reducer: {
        categories: slices.categoriesSliceReducer,
        [apiQueries.categoriesReducerPath]: apiQueries.categoriesReducer,
        products: slices.productsSliceReducer,
        [apiQueries.productsReducerPath]: apiQueries.productsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(persistConfiguration).concat([
            apiQueries.categoriesMiddleware,
            apiQueries.productsMiddleware,
        ]),
});

export type RootState = ReturnType<typeof store.getState>
export * from "./apiQueries/index";
export * from "./slices/index";
export * from "./selectors/index";