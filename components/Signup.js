import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { signupSchema } from "../Authentication/Signup/signupSchema";
import { Formik } from "formik";
import { userSignup } from "../Authentication/Signup/signup";

const Signup = ({ signup, toggleSignup, goToLogin, setIsLoading } ) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      validationSchema={signupSchema}
      onSubmit={(values, { resetForm }) => {
        userSignup({
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email.toLowerCase(),
          password: values.password
        }, setIsLoading, toggleSignup)
        resetForm({ values: '' })
      }}
    >
      {(formik) => {
        const { touched, errors, isValid, dirty } = formik;
        // console.log(firstName);
        return (
          <div>
            <div className="login text-black h-[120vh] mt-[-110vh] pt-[100px] flex justify-center">
              <div className="bg-white w-[40vw] h-[90vh] rounded-md flex flex-col pt-[20px]  px-[60px] relative shadow-2xl">
                <div
                  onClick={toggleSignup}
                  className="absolute top-[-20px] right-[-6px] cursor-pointer"
                >
                  <FontAwesomeIcon className="text-[40px]" icon={faXmark} />
                </div>

                <h2 className="text-[40px] font-bold text-[#004643] text-center">
                  Welcome!!
                </h2>
                <form onSubmit={formik.handleSubmit} className="mt-[30px]">
                  <div className="">
                    <Input
                      type="text"
                      label="First Name"
                      placeholder="Enter First Name"
                      width="w-full"
                      id="firstname"
                      name="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {touched.firstName && errors.firstName && (
                      <p className="text-red-600">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="mt-[20px]">
                    <Input
                      type="text"
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter Last Name"
                      width="w-full"
                      id="lastname"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                    {touched.lastName && errors.lastName && (
                      <p className="text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                  <div className="mt-[20px]">
                    <Input
                      type="email"
                      label="Email Address"
                      placeholder="Enter Email Address"
                      width="w-full"
                      id="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {touched.email && errors.email && (
                      <p className="text-red-600">{errors.email}</p>
                    )}
                  </div>
                  <div className=" mt-[20px]">
                    <Input
                      type="password"
                      label="Password"
                      placeholder="Enter Password"
                      width="w-full"
                      id="password"
                      onChange={formik.handleChange}
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
                <p className="mt-[40px] text-center">
                  Already have an account?{" "}
                  <span
                    onClick={goToLogin}
                    className="underline cursor-pointer"
                  >
                    Login here!
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Signup;
