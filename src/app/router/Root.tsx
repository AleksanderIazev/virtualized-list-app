import { Route, Routes } from "react-router-dom";
import { PostPage, PostsPage } from "../../pages";

export function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostPage />} />
    </Routes>
  );
}
