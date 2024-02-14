import { FloatingLabel } from "flowbite-react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const SignIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial state of user login
  const navigate = useNavigate();
  const url = import.meta.env.VITE_USER_LOGIN_URL;

  // Update isLoggedIn in localStorage when its value changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post(url, values)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            toast.success(res.data.message);
            resetForm({ values: "" });
            setIsLoggedIn(true); // Update isLoggedIn to true
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setTimeout(() => {
              navigate("/host");
            }, 2500);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
          console.log("Login failed");
          resetForm({ values: "" });
        });
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("This field is required")
        .email("Must be an email"),
      password: Yup.string()
        .required("This field is required")
        .min(8, "Password must be at least 8 characters"),
    }),
  });

  return (
    <div className="relative w-full p-2 mx-auto my-5 min-h-80v md:my-10 md:w-2/5">
      <div className="px-5 rounded-lg shadow-lg md:p-10">
        <h3 className="mb-2">Sign in to your account</h3>
        <form action="" onSubmit={formik.handleSubmit}>
          <FloatingLabel
            variant="filled"
            label="Email"
            className={
              formik.touched.email && formik.errors.email
                ? "border-red-500 m-0 md:text-lg rounded-t-lg"
                : "m-0 md:text-lg rounded-t-lg"
            }
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="text-red-500">
            {formik.touched.email && formik.errors.email}
          </small>
          <FloatingLabel
            variant="filled"
            label="Password"
            className={
              formik.touched.password && formik.errors.password
                ? "border-red-500 m-0 md:text-lg rounded-b-lg"
                : "m-0 md:text-lg rounded-b-lg"
            }
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="text-red-500">
            {formik.touched.password && formik.errors.password}
          </small>
          <button className="form-btn" type="submit">
            Login
          </button>
        </form>
        <div className="p-3 my-3 text-sm font-semibold text-center md:text-lg">
          <span>Don't have an account?</span>
          <span className="ml-2 text-orange-500 hover:text-orange-700">
            <Link to="/register">Sign up now</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
