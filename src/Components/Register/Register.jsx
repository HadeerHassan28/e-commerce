import React from "react";
import styles from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const Register = () => {
  function handleRegister(values) {
    console.log(values);
  }
  let validation = Yup.object({
    name: Yup.string()
      .required("name is required")
      .min(3, "name minlength is 3")
      .max(10, "name maxlength is 10"),
    phone: Yup.string()
      .required("phone is required")
      .matches(/^01[0125][0-9]{8}$/, "Phone must be valid number "),
    email: Yup.string().required("email is required").email("email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "Password must start with uppercase"),
    rePassword: Yup.string()
      .required("rePassword is required")
      .oneOf([Yup.ref("password")], "Password and rePassword don't match"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: validation,
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
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger">{formik.errors.rePassword}</div>
          ) : null}

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
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert alert-danger">{formik.errors.phone}</div>
          ) : null}

          <button
            disabled={!(formik.isValid && formik.dirty)}
            className="btn bg-main text-white float-end"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
