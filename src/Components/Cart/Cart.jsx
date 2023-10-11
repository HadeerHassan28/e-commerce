import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import styles from "./Cart.module.css";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Cart = () => {
  let { getLoggedUserCart, removeItem, updateProductCount, delateCart } =
    useContext(cartContext);
  const [cartDetail, setCartDetail] = useState(null);
  const [isEmptyCart, setisEmptyCart] = useState(false);

  async function getCart() {
    let response = await getLoggedUserCart();
    console.log("response", response.data.data);
    if (response?.data?.status === "success") {
      setCartDetail(response.data.data);
    }
  }

  async function delateItem(productId) {
    let response = await removeItem(productId);
    setCartDetail(response.data.data);
    toast.success("item is removed", { duration: 2000 });
    // console.log(response);
  }
  async function updateProductQuantity(productId, count) {
    let response = await updateProductCount(productId, count);
    setCartDetail(response.data.data);
    toast.success("Product Count updated", { duration: 2000 });
  }
  async function clearCart() {
    let response = await delateCart();
    setCartDetail(response.data.data);
    setisEmptyCart(true);
    toast.success("All items are removed", { duration: 2000 });
  }
  useEffect(() => {
    getCart();
  }, []);
  if (isEmptyCart) {
    return (
      <>
        <div className=" d-flex justify-content-center align-items-center vh-100 border-main bg-main-light ">
          <h2 className="text-main">The Cart is Empty</h2>
        </div>
      </>
    );
  }
  return (
    <>
      {cartDetail ? (
        <div className="bg-main-light p-4 my-4 border-main">
          <h3>Shop Cart</h3>
          {cartDetail.products.map((ele) => (
            <div
              className="row border-bottom py-2 my-2 align-items-center "
              key={ele.product._id}
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
                  <button
                    className="btn m-0 p-0"
                    onClick={() => delateItem(ele.product._id)}
                  >
                    <i className="fa-regular fa-trash-can p-1 text-main" />
                    Remove
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-sm border-main"
                    onClick={() =>
                      updateProductQuantity(ele.product._id, ele.count + 1)
                    }
                  >
                    +
                  </button>
                  <span className="mx-2">{ele.count}</span>
                  <button
                    className="btn btn-sm border-main"
                    onClick={() =>
                      updateProductQuantity(ele.product._id, ele.count - 1)
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
          <h6 className="text-main h4">
            Total Cart Price: {cartDetail.totalCartPrice} EGP
          </h6>
          <div className="my-3 ">
            <button className="btn bg-main">
              <Link to="/checkout" className="text-white">
                <i className="fa-brands fa-cc-visa m-2" />
                Check Out
              </Link>
            </button>
          </div>

          <button className="btn m-0 p-0" onClick={clearCart}>
            <i className="fa-regular fa-trash-can p-1 text-main" />
            Clear the Cart
          </button>
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
