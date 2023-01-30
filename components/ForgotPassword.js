import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import Link from "next/link";
import { userLogin } from "../Authentication/Login/login";
import { forgotPasswordSchema } from "../Authentication/ForgotPassword/forgotPasswordSchema";

const ForgotPassword = ({
  login,
  toggleLogin,
  goToSignup,
  setIsLoading,
  goToForgotPassword,
  setForgotPassword,
}) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={forgotPasswordSchema}
      onSubmit={(values, { resetForm }) => {
        alert("check your email");
        resetForm({ values: "" });
      }}
    >
      {(formik) => {
        const { touched, errors } = formik;
        return (
          <div>
            <div className="login text-black h-[120vh] mt-[-110vh] pt-[100px] flex justify-center">
              <div className="bg-white w-[40vw] h-[70vh] rounded-md flex flex-col justify-center px-[60px] relative shadow-2xl">
                <div
                  onClick={() => setForgotPassword(false)}
                  className="absolute top-[-17px] right-[-9px] cursor-pointer"
                >
                  <FontAwesomeIcon className="text-[40px]" icon={faXmark} />
                </div>

                <h2 className="text-[40px] font-bold text-[#004643] text-center">
                  Forgot Password
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

                  <div className="mt-[35px]">
                    <input
                      className={`text-white w-full py-[10px] rounded-full cursor-pointer ${
                        !(formik.dirty && formik.isValid)
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
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default ForgotPassword;
