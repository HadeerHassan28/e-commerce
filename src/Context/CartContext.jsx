import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let cartContext = createContext();
let CartContextProvider = ({ children }) => {
  //? to make once login is done the cart is open and the num of items appeare
  const [cartId, setcartId] = useState(null);
  const [numOfCartItem, setnumOfCartItem] = useState(0);
  async function getCart() {
    let response = await getLoggedUserCart();
    if (response?.data?.status === "success") {
      setnumOfCartItem(response.data.numOfCartItems);
      //console.log("context", response.data.numOfCartItems);
      setcartId(response.data.data._id);
    }
  }
  useEffect(() => {
    getCart();
  }, []);
  let header = { token: localStorage.getItem("userToken") };
  const addToCart = (productId) => {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId: productId,
        },
        {
          headers: header,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  };
  const getLoggedUserCart = () => {
    return axios
      .get(
        `https://ecommerce.routemisr.com/api/v1/cart`,

        {
          headers: header,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  };
  const removeItem = (productId) => {
    return axios
      .delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,

        {
          headers: header,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  };
  const updateProductCount = (productId, count) => {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count: count,
        },
        {
          headers: header,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  };
  const delateCart = () => {
    return axios
      .delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,

        {
          headers: header,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  };

  //! For online Payment:
  const onlinePayment = (cartId, shippingAddress) => {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,
        {
          shippingAddress: shippingAddress,
        },
        {
          headers: header,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  };
  //! For wishList:
  const addToWishList = (productId) => {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          productId: productId,
        },
        {
          headers: header,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  };

  const getProductToWishList = () => {
    return axios
      .get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,

        {
          headers: header,
        }
      )
      .then((response) => response)
      .catch((error) => error);
  };

  const values = {
    addToCart: addToCart,
    getLoggedUserCart: getLoggedUserCart,
    removeItem: removeItem,
    updateProductCount: updateProductCount,
    delateCart: delateCart,
    onlinePayment: onlinePayment,
    cartId: cartId,
    numOfCartItem: numOfCartItem,
    setnumOfCartItem: setnumOfCartItem,
    addToWishList: addToWishList,
    getProductToWishList: getProductToWishList,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};
export default CartContextProvider;
