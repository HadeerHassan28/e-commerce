import React, { useState } from "react";
import styles from "./Login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ({ saveUserData }) => {
  let navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [msgError, setmsgError] = useState("");
  function handleLogin(values) {
    setisLoading(true);
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then((response) => {
        //console.log(response);

        if (response.data.message === "success") {
          // console.log(response.data.token);
          localStorage.setItem("userToken", response.data.token);
          saveUserData();
          setisLoading(false);
          setmsgError("");
          navigate("/");
        }
      })
      .catch((err) => {
        setisLoading(false);
        setmsgError(`${err.response.data.message} `);
        console.log(err.response.data.message);
      });
  }

  let validation = Yup.object({
    email: Yup.string().required("email is required").email("email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "Password must start with uppercase"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: handleLogin,
  });
  return (
    <>
      <div className="w-75 mx-auto py-4">
        <h3>Login now:</h3>
        {msgError.length > 0 ? (
          <div className="alert alert-danger">{msgError}</div>
        ) : null}
        <form onSubmit={formik.handleSubmit}>
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
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : null}

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
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : null}

          {isLoading ? (
            <button className="btn bg-main text-white float-end">
              <i className="fas fa-spinner fa-spin"></i>
            </button>
          ) : (
            <button
              disabled={!(formik.isValid && formik.dirty)}
              className="btn bg-main text-white float-end"
              type="submit"
            >
              Login
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;

//eng.hadeer28@gmail.com  password:Hadeer123
