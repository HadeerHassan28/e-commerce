import React from "react";
import styles from "./Register.module.css";
import { useFormik } from "formik";
const Register = () => {
  function handleRegister(values) {
    console.log(values);
  }
  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validate: "",
    onSubmit: handleRegister,
  });
  return (
    <>
      <div className="w-75 mx-auto py-4">
        <h3>Register now:</h3>
        <form onSubmit={formik.handleSubmit}>
          {/* name */}
          <label htmlFor="name">Name:</label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            type="text"
            name="name"
            id="name"
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger">{formik.errors.name}</div>
          ) : null}

          {/* email */}
          <label htmlFor="email">Email:</label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="email"
            name="email"
            id="email"
          />

          {/* password */}
          <label htmlFor="password">Password:</label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type="password"
            name="password"
            id="password"
          />

          {/* rePassword */}
          <label htmlFor="rePassword">Re-Password:</label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rePassword}
            type="password"
            name="rePassword"
            id="rePassword"
          />

          {/* phone */}
          <label htmlFor="phone">Phone:</label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            type="tel"
            name="phone"
            id="phone"
          />

          <button className="btn bg-main text-white" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
