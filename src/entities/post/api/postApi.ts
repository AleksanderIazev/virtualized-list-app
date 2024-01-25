import { baseApi } from "../../../shared/api/baseApi";
import { IPost } from "../model/types";

export const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPosts: build.query<IPost[], { start: number; end: number }>({
      query: ({ start = 0, end = 5 }) => ({
        url: "/posts",
        params: {
          _start: start,
          _end: end,
        },
      }),
    }),
    fetchPostById: build.query<IPost, number>({
      query: (id: number = 1) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

export const { useFetchPostsQuery, useFetchPostByIdQuery } = postApi;
