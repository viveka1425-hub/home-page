import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/login";
import Test from "./Pages/Test/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Test",
    element: <Test />
  }
])
export default function App() {
  return <RouterProvider router={router} />;
}
