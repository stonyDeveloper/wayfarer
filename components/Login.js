import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Formik } from "formik";
import { loginSchema } from "../Authentication/loginSchema";
import Link from "next/link";
import { userLogin } from "../Authentication/Login/login";

const Login = ({ login, toggleLogin, goToSignup, setIsLoading, setForgotPassword, goToForgotPassword } ) => {

  return (
    <Formik
      initialValues={{email: "", password: ""}}
      validationSchema={loginSchema}
      onSubmit={(values, { resetForm }) => {
        userLogin({
          email: values.email
          .toLowerCase(),
          password: values.password
        }, setIsLoading, toggleLogin)
        resetForm({ values: ''})
      }}
    >
      {(formik) => {
        const { touched, errors } = formik;
        return(
          <div>
          <div className="login text-black h-[120vh] mt-[-110vh] pt-[100px] flex justify-center">
            <div className="bg-white w-[40vw] h-[70vh] rounded-md flex flex-col justify-center px-[60px] relative shadow-2xl">
              <div
                onClick={toggleLogin}
                className="absolute top-[-17px] right-[-9px] cursor-pointer"
              >
                <FontAwesomeIcon className="text-[40px]" icon={faXmark} />
              </div>

              <h2 className="text-[40px] font-bold text-[#004643] text-center">
                Welcome Back!!
              </h2>
              <form onSubmit={formik.handleSubmit} className="mt-[30px]">
                <div className="">
                  <Input
                    type="text"
                    label="Email Address"
                    placeholder="Enter Email Address"
                    width="w-full"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                {touched.email && errors.email && (
                      <p className="text-red-600">{errors.email}</p>
                    )}
                </div>
                <div className=" mt-[30px]">
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Enter Password"
                    width="w-full"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleChange}
                    value={formik.values.password}
                  />
                  {touched.password && errors.password && (
                      <p className="text-red-600">{errors.password}</p>
                    )}
                </div>
                <div className=" mt-[35px]">
                <input
                      className={`text-white w-full py-[10px] rounded-full cursor-pointer ${
                        !(formik.isValid && formik.dirty)
                          ? "bg-[#cccccc]"
                          : "bg-[#004643]"
                      }`}
                      type="submit"
                      // disabled={!(formik.isValid && formik.dirty)}
                    />
                </div>

                {/* <i class="fa-solid fa-user"></i> */}
                {/* <FontAwesomeIcon icon={faEye}/> */}
              </form>
              <div className="flex justify-between items-center mt-[40px]">
              <p>Don't have an account? <span onClick={goToSignup} className="underline cursor-pointer">Sign up here!</span></p>
              <p onClick={goToForgotPassword} className="underline cursor-pointer">Forgot password?</p>
              </div>
            </div>
          </div>
        </div>
        )
        
      }}
    </Formik>
  );
};

export default Login;
