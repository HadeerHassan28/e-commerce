import React, { useEffect, useState } from "react";
import styles from "./CategrySlider.module.css";
import Slider from "react-slick";
import axios from "axios";
const CategrySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  const [categries, setCategries] = useState([]);
  function getCategries() {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/categories")
      .then((response) => {
        setCategries(response.data.data);
        //console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }
  useEffect(() => {
    getCategries();
  }, []);

  return (
    <>
      <Slider {...settings}>
        {categries?.map((category) => (
          <>
            <div key={category._id}>
              <img
                src={category.image}
                alt={`product img ${category._id}`}
                className="w-100"
                height={200}
              />
              <h2 className="h6 pt-2">{category.name}</h2>
            </div>
          </>
        ))}
      </Slider>
    </>
  );
};

export default CategrySlider;
