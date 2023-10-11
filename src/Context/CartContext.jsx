import axios from "axios";
import { createContext } from "react";

export let cartContext = createContext();
let CartContextProvider = ({ children }) => {
  const addToCart = (productId) => {
    let header = { token: localStorage.getItem("userToken") };
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
  const getLoggedUserCart = (productId) => {
    let header = { token: localStorage.getItem("userToken") };
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
  const values = {
    addToCart: addToCart,
    getLoggedUserCart: getLoggedUserCart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};
export default CartContextProvider;
