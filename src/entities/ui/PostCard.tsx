import { FC } from "react";
import { IPost } from "../model/types";
import { Link } from "react-router-dom";
import { shortText } from "../../shared/lib/shortText";
import { Button } from "../../shared/ui/Button/Button";
import css from "../ui/PostCard.module.css";

export const PostCard: FC<IPost> = ({ id, title, body }) => {
  return (
    <div className={css.cardContainer}>
      <div className={css.cardHeader}>
        <p className={css.postId}>{id}</p>
        <h3 className={css.postTitle}>{title}</h3>
      </div>
      <p className={css.postBody}>{shortText(body)}</p>

      <Link to={`posts/${id}`} className={css.viewButton}>
        <Button>Просмотр</Button>
      </Link>
    </div>
  );
};
