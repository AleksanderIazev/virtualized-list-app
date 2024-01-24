import { baseApi } from "../../shared/api/baseApi";
import { IPost } from "../model/types";

export const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPosts: build.query<IPost[], void>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchPostsQuery } = postApi;
