import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./combineReducer";
import { baseApi } from "../../shared/api/baseApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
