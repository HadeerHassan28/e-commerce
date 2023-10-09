import React, { useState, useEffect } from "react";
import styles from "./FeaturedProducts.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  function getProduct() {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then((response) => {
        setProducts(response.data.data);
        //console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }
  useEffect(() => {
    getProduct();
  }, []);
  if (!products) {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <i className="fas fa-spinner fa-spin fa-3x text-main" />
        {/* <h3 className="h3 text-main fw-bolder">Loading...</h3> */}
      </div>
    );
  }
  return (
    <>
      <div className="row mt-5">
        <h2 className="text-muted mb-2">Products </h2>
        {products.map((ele) => (
          <div key={ele.id} className="col-md-2">
            <Link to={`/productdetail/${ele.id}`}>
              <div className="product px-2 py-3 cursor-pointer">
                <img
                  alt="product name"
                  src={ele.imageCover}
                  className="w-100"
                />
                <span className="text-main fw-bold font-sm">
                  {ele.category.name}
                </span>
                <h3 className="h6 fw-bolder">
                  {ele.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">{ele.price} EGP</span>
                  <span>
                    <i className="fas fa-star rating-color"></i>
                    {ele.ratingsAverage}{" "}
                  </span>
                </div>
                <button className="btn bg-main text-white w-100">+ Add</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
