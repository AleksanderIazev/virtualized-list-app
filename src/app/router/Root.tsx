import { Route, Routes } from "react-router-dom";
import { PostPage, PostsPage } from "../../pages";

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostPage />} />
    </Routes>
  );
}
