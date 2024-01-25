import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchPostByIdQuery } from "../../entities";
import { Button } from "../../shared/ui/Button/Button";
import css from "./ui/PostPage.module.css";
import { Spinner } from "../../shared/ui/Spinner/Spinner";

export const PostPage: FC = () => {
  const { id } = useParams<{ id: any }>();
  const navigate = useNavigate();
  const { data: posts, isLoading, isError } = useFetchPostByIdQuery(id);

  const goBack = () => navigate(-1);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div className={css.notFound}>Пост не найден</div>;
  }

  return (
    <div className={css.postContainer}>
      <h3 className={css.postHeader}>
        {id} {posts?.title}
      </h3>
      <p className={css.postBody}>{posts?.body}</p>
      <Button onClick={goBack}>Назад</Button>
    </div>
  );
};
