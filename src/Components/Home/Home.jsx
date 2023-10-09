import React from "react";
import CategrySlider from "../CategrySlider/CategrySlider";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <CategrySlider />
      <FeaturedProducts />
    </>
  );
};

export default Home;
