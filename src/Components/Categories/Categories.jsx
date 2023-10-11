import useAxios from "axios-hooks";
import React from "react";
import styles from "./Categories.module.css";

const Categories = () => {
  const [{ data, loading, error }] = useAxios(
    "https://ecommerce.routemisr.com/api/v1/categories"
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
        <div className="row justify-content-center align-items-center">
          {data.data.map((ele) => (
            <div className="col-md-6  my-2 text-center" key={ele._id}>
              <img src={ele.image} alt={ele.name} className="w-50" />
              <h3 className="text-main mt-1">{ele.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
