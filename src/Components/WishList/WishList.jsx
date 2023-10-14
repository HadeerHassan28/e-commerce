import React, { useContext, useState, useEffect } from "react";
import { cartContext } from "../../Context/CartContext";
import styles from "./WishList.module.css";

const WishList = () => {
  const [listDetail, setListDetail] = useState(null);

  const { getProductToWishList } = useContext(cartContext);
  async function getProductToList() {
    let response = await getProductToWishList();
    if (response?.data?.status === "success") setListDetail(response.data.data);

    // console.log(response.data.data);
  }
  useEffect(() => {
    getProductToList();
  }, []);

  return (
    <>
      {listDetail ? (
        <div className="bg-main-light p-4 my-4 border-main">
          <h3>Wish List</h3>
          {listDetail.map((ele) => (
            <div
              className="row border-bottom py-2 my-2 align-items-center "
              key={ele._id}
            >
              <div className="col-md-2">
                <img
                  src={ele.imageCover}
                  alt="image product"
                  className="w-100"
                />
              </div>
              <div className="col-md-10 d-flex justify-content-between">
                <div>
                  <h6>{ele.title}</h6>
                  <h6 className="text-main">Price: {ele.price} EGP</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <i className="fas fa-spinner fa-spin fa-3x text-main" />
        </div>
      )}
    </>
  );
};

export default WishList;
