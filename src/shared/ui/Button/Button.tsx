import { FC, ReactNode, MouseEvent } from "react";
import css from "../Button/Button.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={css.post__btn} onClick={onClick}>
      {children}
    </button>
  );
};
