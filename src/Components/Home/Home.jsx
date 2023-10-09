import React from "react";
import CategrySlider from "../CategrySlider/CategrySlider";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import MainSlider from "../MainSlider/MainSlider";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <MainSlider />
      <CategrySlider />
      <FeaturedProducts />
    </>
  );
};

export default Home;
