import { FC } from "react";
import { PostCard } from "../../entities";
import { useFetchPostsQuery } from "../../entities";
import { Spinner } from "../../shared/ui/Spinner/Spinner";
import css from "./ui/PostsPage.module.css";

import { Virtuoso } from "react-virtuoso";

export const PostsPage: FC = () => {
  const { data, isLoading } = useFetchPostsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Virtuoso
      style={{ height: "100vh" }}
      totalCount={200}
      itemContent={() => (
        <div className={css.posts__wrapper}>
          {data!.map((el: any) => (
            <PostCard key={el.id} {...el} />
          ))}
        </div>
      )}
    />
  );
};
