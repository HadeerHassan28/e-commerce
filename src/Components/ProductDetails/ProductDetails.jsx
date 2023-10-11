import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import axios from "axios";
import Slider from "react-slick";
import { cartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
const ProductDetails = () => {
  const { addToCart } = useContext(cartContext);
  const [productDetail, setproductDetail] = useState(null);
  let params = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  function getProductDetail(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((response) => {
        setproductDetail(response.data.data);
        //console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }
  async function addProduct(id) {
    let response = await addToCart(id);
    // console.log(response);
    if (response?.data?.status === "success") {
      toast.success(response.data.message, {
        duration: 2000,
      });
    } else {
      toast.error("Something went wrong", {
        duration: 2000,
      });
    }
  }
  useEffect(() => {
    getProductDetail(params.id);
  }, [params.id]);
  //console.log(productDetail.images);
  if (!productDetail) {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <i className="fas fa-spinner fa-spin fa-3x text-main" />
        {/* <h3 className="h3 text-main fw-bolder">Loading...</h3> */}
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-5 ">
            <Slider {...settings}>
              {productDetail?.images.map((img, index) => (
                <>
                  <div
                    className="d-flex align-items-center flex-column mt-5 "
                    key={index}
                  >
                    <img
                      src={img}
                      alt={`product img ${index}`}
                      className="w-75"
                    />
                  </div>
                </>
              ))}
            </Slider>
          </div>
          <div className="col-md-7  d-flex align-self-center flex-column">
            <h2>{productDetail.title}</h2>
            <p>{productDetail.description}</p>
            <div className="d-flex justify-content-between">
              <span className="text-muted">{productDetail.price} EGP</span>
              <span>
                <i className="fas fa-star rating-color"></i>
                {productDetail.ratingsAverage}
              </span>
            </div>
            {console.log(productDetail)}
            <button
              className="btn bg-main text-white w-100"
              onClick={() => addProduct(productDetail._id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
