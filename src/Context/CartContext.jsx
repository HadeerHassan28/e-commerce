import axios from "axios";
import { createContext } from "react";

export let cartContext = createContext();
let CartContextProvider = ({ children }) => {
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
  const values = {
    addToCart: addToCart,
    getLoggedUserCart: getLoggedUserCart,
    removeItem: removeItem,
    updateProductCount: updateProductCount,
    delateCart: delateCart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};
export default CartContextProvider;
