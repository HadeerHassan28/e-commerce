import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
  let { getLoggedUserCart } = useContext(cartContext);
  const [cartDetail, setCartDetail] = useState(null);
  async function getCart() {
    let response = await getLoggedUserCart();
    console.log("response", response);
    if (response?.data?.status === "success") {
      setCartDetail(response.data.data);
    }
  }
  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      {cartDetail ? (
        <div className="bg-main-light p-4 my-4">
          <h3>Shop Cart</h3>
          {cartDetail.products.map((ele, index) => (
            <div
              className="row border-bottom py-2 my-2 align-items-center"
              key={index}
            >
              <div className="col-md-2">
                <img
                  src={ele.product.imageCover}
                  alt="image product"
                  className="w-100"
                />
              </div>
              <div className="col-md-10 d-flex justify-content-between">
                <div>
                  <h6>{ele.product.title}</h6>
                  <h6 className="text-main">Price: {ele.price} EGP</h6>
                  <button className="btn m-0 p-0">
                    <i className="fa-regular fa-trash-can p-1 text-main" />
                    Remove
                  </button>
                </div>
                <div>
                  <button className="btn btn-sm border-main">+</button>
                  <span className="mx-2">{ele.count}</span>
                  <button className="btn btn-sm border-main">-</button>
                </div>
              </div>
            </div>
          ))}
          <h6 className="text-main h4">
            Total Cart Price: {cartDetail.totalCartPrice} EGP
          </h6>
        </div>
      ) : (
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <i className="fas fa-spinner fa-spin fa-3x text-main" />
        </div>
      )}
    </>
  );
};

export default Cart;
