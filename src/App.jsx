import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import About from "./Components/About/About";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import NotFound from "./Components/NotFound/NotFound";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import jwtDecode from "jwt-decode";
function App() {
  const [userData, setUserData] = useState(null);
  function saveUserData() {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout userData={userData} />,
      children: [
        {
          index: "true",
          element: <Home />,
        },
        {
          path: "product",
          element: <Products />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "login",
          element: <Login saveUserData={saveUserData} />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "barnds",
          element: <Brands />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}>
        <Layout />
      </RouterProvider>
    </>
  );
}

export default App;
