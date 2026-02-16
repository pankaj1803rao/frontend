import "./App.css";
import Signup from "./auth/register/Signup.jsx";
import Loging from "./auth/Login.jsx";
import Home from "./components/Home.jsx";
import Addproduct from "./productcrud/Addproduct";
import Header from "./common/Header";
import Moredetails from "./productcrud/Moredetails.jsx";
import ListItem from "./components/ListItem.jsx";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    // ✅ Public routes (NO header)
    { path: "/login", element: <Loging /> },
    { path: "/signup", element: <Signup /> },

    // ✅ Main app routes (WITH header)
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, // ✅ default
        { path: "home", element: <Home /> },
        { path: "addproduct", element: <Addproduct /> },
        { path: "moredetail/:id", element: <Moredetails /> },
        { path: "cart", element: <ListItem /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
