import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchPostsQuery } from "../../entities";
import { Button } from "../../shared/ui/Button/Button";
import css from "./ui/PostPage.module.css";

export const PostPage: FC = () => {
  const { id } = useParams<{ id: any }>();
  const navigate = useNavigate();
  const { data: posts } = useFetchPostsQuery();

  const selectedPost = posts!.find((post) => post.id === parseInt(id, 10));
  const goBack = () => navigate(-1);

  if (!selectedPost) {
    return <div className={css.notFound}>Пост не найден</div>;
  }

  const { title, body } = selectedPost;

  return (
    <div className={css.postContainer}>
      <h3 className={css.postHeader}>
        {id} {title}
      </h3>
      <p className={css.postBody}>{body}</p>
      <Button onClick={goBack}>Назад</Button>
    </div>
  );
};
