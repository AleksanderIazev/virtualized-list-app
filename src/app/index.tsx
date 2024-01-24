// function App() {
//   return (
//     <div className="App">
//       <p>Virtualized list</p>
//       <PostsPage />
//     </div>
//   );
// }

import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
