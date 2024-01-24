import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "./tags";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({}),
});
