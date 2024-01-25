import { FC, useEffect, useState } from "react";
import { PostCard } from "../entities";
import { useFetchPostsQuery } from "../entities";
import { Spinner } from "../shared/ui/Spinner/Spinner";

export const Scroll: FC = () => {
  const [currentPostStart, setCurrentPostStart] = useState(() => {
    const storedPosition = sessionStorage.getItem("scrollPosition");
    return storedPosition ? parseInt(storedPosition, 10) : 0;
  });
  const { data, isLoading, isFetching } = useFetchPostsQuery({
    start: 0,
    end: currentPostStart + 7,
  });

  const [isMyFetchingDown, setIsFetchingDown] = useState(false);
  const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);

  useEffect(() => {
    if (isMyFetchingDown && !isFetching) {
      setCurrentPostStart((prev) => {
        const newPosition = prev < 93 ? prev + 7 : prev;
        sessionStorage.setItem("scrollPosition", newPosition.toString());
        return newPosition;
      });
      setIsFetchingDown(false);
    }
  }, [isMyFetchingDown]);

  useEffect(() => {
    if (isMyFetchingUp) {
      setCurrentPostStart((prev) => {
        const newPosition = prev > 0 ? prev - 1 : prev;
        sessionStorage.setItem("scrollPosition", newPosition.toString());
        return newPosition;
      });
      setIsMyFetchingUp(false);
    }
  }, [isMyFetchingUp]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e: any): void => {
    if (e.target.documentElement.scrollTop < 50) {
      setIsMyFetchingUp(true);
    }
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      50
    ) {
      setIsFetchingDown(true);
      window.scrollTo(
        0,
        e.target.documentElement.scrollHeight +
          e.target.documentElement.scrollTop
      );
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {data!.map((el: any) => (
        <PostCard key={el.id} {...el} />
      ))}
    </>
  );
};
