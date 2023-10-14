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
import CheckOut from "./Components/CheckOut/CheckOut";
import AllOrders from "./Components/AllOrders/AllOrders";
import WishList from "./Components/WishList/WishList";
import Profile from "./Components/Profile/Profile";
import NotFound from "./Components/NotFound/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { useState, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";
import { toast, Toaster } from "react-hot-toast";
import UserDataContextProvider from "./Context/UserDataContext";
import jwtDecode from "jwt-decode";
import { Offline, Online } from "react-detect-offline";
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
          path: "checkout",
          element: (
            <ProtectedRoute>
              <CheckOut />
            </ProtectedRoute>
          ),
        },
        {
          path: "allorders",

          element: (
            <ProtectedRoute>
              <AllOrders />
            </ProtectedRoute>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <Profile userData={userData} />
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
      <UserDataContextProvider>
        <CartContextProvider>
          <div className="network">
            <Offline>Only shown offline</Offline>
          </div>
          <Toaster />
          <RouterProvider router={routes}>
            <Layout />
          </RouterProvider>
        </CartContextProvider>
      </UserDataContextProvider>
    </>
  );
}

export default App;
