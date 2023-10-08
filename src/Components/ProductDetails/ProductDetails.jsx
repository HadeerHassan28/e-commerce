import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import axios from "axios";
import Slider from "react-slick";
const ProductDetails = () => {
  const [productDetail, setproductDetail] = useState(null);
  let params = useParams();

  function getProductDetail(id) {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products/${id}")
      .then((response) => {
        setproductDetail(response.data.data);
        //console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }
  useEffect(() => {
    getProductDetail(params.id);
  }, [params.id]);

  if (!productDetail) {
    return (
      <div className="container ">
        <h3 className="h3 text-main fw-bolder">Loading...</h3>
      </div>
    );
  }
  return (
    <>
      <div className={styles.productDetails}>
        <h2>{productDetail.title}</h2>
        <img
          src={productDetail.imageCover}
          alt={productDetail.title}
          className={styles.productImage}
        />
        <p>{productDetail.description}</p>
        <p>Price: {productDetail.price} EGP</p>
        <p>Ratings: {productDetail.ratingsAverage}</p>
      </div>
      );
    </>
  );
};

export default ProductDetails;
