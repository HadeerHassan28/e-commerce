import React from "react";
import { motion } from "framer-motion";
import styles from "./Brands.module.css";
import useAxios from "axios-hooks";

const Brands = () => {
  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const [{ data, loading, error }] = useAxios(
    "https://ecommerce.routemisr.com/api/v1/brands"
  );

  if (loading) {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <i className="fas fa-spinner fa-spin fa-3x text-main" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <h3 className="h3 text-main fw-bolder">{error.message}</h3>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="d-flex justify-content-center mt-5 text-muted">
        <strong>Our Brands</strong>
      </h2>
      <motion.div
        className="row d-flex justify-content-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {data.data.map((ele) => (
          <motion.div
            className="card col-md-3 border-main my-2 shadow mx-2 hover-card"
            key={ele._id}
            variants={itemVariants}
          >
            <img
              src={ele.image}
              alt={ele.name}
              className="card-img-top w-100 h-100 hover-card"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Brands;
