import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import About from "./Components/About/About";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import NotFound from "./Components/NotFound/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import jwtDecode from "jwt-decode";
import CartContextProvider from "./Context/CartContext";
import { Toaster } from "react-hot-toast";
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
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "product",
          element: (
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: "productdetail/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
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
          element: (
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          ),
        },
        {
          path: "about",
          element: (
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "barnds",
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
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
      <CartContextProvider>
        <Toaster />
        <RouterProvider router={routes}>
          <Layout />
        </RouterProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
