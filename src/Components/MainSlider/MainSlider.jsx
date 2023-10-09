import React, { useState, useEffect } from "react";
import styles from "./MainSlider.module.css";
import silder1 from "../../assets/images/slider-image-3.jpeg";
import silder2 from "../../assets/images/slider-image-2.jpeg";
import silder3 from "../../assets/images/slider-image-1.jpeg";
const MainSlider = () => {
  return (
    <>
      <div className="row my-3">
        <div className="col-md-8">
          <img src={silder2} alt="slider-2" className="w-100" height={200} />
        </div>
        <div className="col-md-4 d-flex flex-column">
          <img src={silder1} height={100} className="mb-1" />
          <img src={silder3} height={100} />
        </div>
      </div>
    </>
  );
};

export default MainSlider;
