import React from "react";
import styles from "./Brands.module.css";
import useAxios from "axios-hooks";
const Brands = () => {
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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <h3 className="h3 text-main fw-bolder">{error.message}</h3>
    </div>;
  }
  //console.log(data);
  return (
    <>
      <div className="container">
        <h2 className="d-flex justify-content-center mt-5 text-muted">
          <strong> Our Brands</strong>
        </h2>
        <div className="row">
          {data.data.map((ele) => (
            <div
              className="col-md-3 border-main my-2 justify-content-center"
              key={ele._id}
            >
              <img src={ele.image} alt={ele.name} className="w-50" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
