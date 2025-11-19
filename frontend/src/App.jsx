import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/login";
import Test from "./Pages/Test/Test";
import Card from "./Pages/Card";
import ScrollSection from "./Pages/Test/ScrollSection";
import Footer from "./Pages/Test/Footer";
import Profile from './Pages/Test/Profile';
import Home from "./Pages/Test/Home";
import About from "./Pages/Test/About";
import RollingImage from "./Pages/Test/RollingImage";
import Third from "./Pages/Test/Third";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Test",
    element: <Test />
  },
  {
    path: "/Card",
    element: <Card />
  },
  {
    path:"/Third",
    element:<Third />
  },
  {
    path:"/ScrollSection",
    element:<ScrollSection />
  },
  {
    path:"/Footer",
    element: < Footer />
  },
  {
    path:"/Profile",
    element: <Profile />
  },
  {
    path:"/Home",
    element: < Home />
  },
  {
    path:"/About",
    element: <About />
  },
  {
    path:"/RollingImage",
    element: <RollingImage />
  }
])
export default function App() {
  return <RouterProvider router={router} />;
}
