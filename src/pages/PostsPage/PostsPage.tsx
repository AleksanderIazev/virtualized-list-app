import { FC } from "react";
import { Scroll } from "../../features/Scroll";
import css from "./ui/PostsPage.module.css";

export const PostsPage: FC = () => {
  return (
    <div className={css.posts__wrapper}>
      <Scroll />
    </div>
  );
};
