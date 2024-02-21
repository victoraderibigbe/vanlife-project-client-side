import { FloatingLabel } from "flowbite-react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_REGISTER_USER_URL;;

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post(url, values)
        .then((res) => {
          console.log(res);
          if (res.data.status) {
            toast.success(res.data.message);
            resetForm({ values: "" });
            setTimeout(() => {
              navigate("/login");
            }, 2500);
          } else {
            toast.error(res.data.message);
            resetForm({ values: "" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("This field is required"),
      lastname: Yup.string().required("This field is required"),
      email: Yup.string()
        .required("This field is required")
        .email("Must be an email"),
      password: Yup.string()
        .required("This field is required")
        .min(8, "Password must be at least 8 characters"),
    }),
  });

  return (
    <div className="relative w-full p-2 mx-auto my-5 min-h-80v md:w-2/5">
      <div className="px-5 rounded-lg shadow-lg md:p-10">
        <h3 className="mb-2">Sign up an account</h3>
        <form action="" onSubmit={formik.handleSubmit}>
          <FloatingLabel
            variant="filled"
            label="First Name"
            className={
              formik.touched.firstname && formik.errors.firstname
                ? "border-red-500 m-0 md:text-lg rounded-t-lg"
                : "m-0 md:text-lg rounded-t-lg"
            }
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="text-red-500">
            {formik.touched.firstname && formik.errors.firstname}
          </small>
          <FloatingLabel
            variant="filled"
            label="Last Name"
            className={
              formik.touched.lastname && formik.errors.lastname
                ? "border-red-500 m-0 md:text-lg rounded-none"
                : "m-0 md:text-lg rounded-t-lg"
            }
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <small className="text-red-500">
            {formik.touched.lastname && formik.errors.lastname}
          </small>
          <FloatingLabel
            variant="filled"
            label="Email"
            className={
              formik.touched.email && formik.errors.email
                ? "border-red-500 m-0 md:text-lg rounded-none"
                : "m-0 md:text-lg rounded-t-none"
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
            Register
          </button>
        </form>
        <div className="p-3 my-3 text-sm font-semibold text-center md:text-lg">
          <span>Have an account?</span>
          <span className="ml-2 text-orange-500 hover:text-orange-700">
            <Link to="/login">Sign in now</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
