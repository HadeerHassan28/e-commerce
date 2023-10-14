import React, { useContext } from "react";
import styles from "./CheckOut.module.css";
import { useFormik } from "formik";
import { cartContext } from "../../Context/CartContext";

const CheckOut = () => {
  const { onlinePayment, cartId } = useContext(cartContext);
  async function handleSubmit(values) {
    let response = await onlinePayment(cartId, values);
    //console.log(response);
    if (response?.data?.status === "success")
      // window.location.href = response.data.session.url;
      window.open(response.data.session.url, "_blank");
  }
  const formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <>
      <div className="w-50 pt-5 mx-auto vh-100 ">
        <form onSubmit={formik.handleSubmit}>
          {/* details */}
          <label htmlFor="details">Details :</label>
          <input
            type="text"
            className="form-control mb-3 "
            name="details"
            id="details"
            value={formik.values.details}
            onChange={formik.handleChange}
          />

          {/* phone */}
          <label htmlFor="phone">Phone :</label>
          <input
            type="tel"
            className="form-control mb-3"
            name="phone"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />

          {/* city */}
          <label htmlFor="city">City :</label>
          <input
            type="text"
            className="form-control mb-3"
            name="city"
            id="city"
            value={formik.values.city}
            onChange={formik.handleChange}
          />

          <button className="btn border-main w-100 pay" type="submit">
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckOut;
