import React, { useState } from "react";
import Hero from "../components/Hero";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { ColorRing } from "react-loader-spinner";
import ForgotPassword from "../components/ForgotPassword";

const HomePage = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const toggleLogin = () => {
    console.log("dsadsd");
    setLogin(!login);
  };

  const toggleSignup = () => {
    setSignup(!signup);
  };

  const goToSignup = () => {
    setSignup(true);
    setLogin(false);
  };

  const goToLogin = () => {
    setLogin(true);
    setSignup(false);
  };

  const goToForgotPassword = () => {
    setForgotPassword(true);
    toggleLogin();
  };
  return (
    <div>
      <Hero toggleLogin={toggleLogin} toggleSignup={toggleSignup} />
      <div className="px-[8rem] mt-[50px] h-[40vh]">
        <div className="flex justify-between text-[#004643] text-[20px]">
          <div className="flex items-center gap-5">
            <img className="" src="/bus-icon.png" alt="" />
            <p>Book Your Trip Online</p>
          </div>
          <div className="flex items-center gap-5">
            <img className="" src="/msg-icon.png" alt="" />
            <p>We&apos;re Here For You 24/7</p>
          </div>
          <div className="flex items-center gap-5">
            <img className="" src="/trip-icon.png" alt="" />
            <p>Better Trip Experience</p>
          </div>
        </div>
        <div className="h-[0.5px] bg-[gray] mt-[10px]"></div>
        <div className="mt-[50px]">
          <h2 className="text-[20px]">
            <span className="font-bold text-[#004643]">
              Is Wayfarer right for you?
            </span>{" "}
            <span className="text-[17px] font-light">
              Here&apos;s what our users think
            </span>
          </h2>
          <div className="flex mt-[30px] justify-between">
            <div className="border-black border-[1px] py-[5px] px-[10px] rounded-md">
              <p>&apos;Perfect Organisation- good communication&apos;</p>
              <p className="mt-[20px]">- Buchi Emecheta</p>
            </div>
            <div className="border-black border-[1px] py-[5px] px-[10px] rounded-md">
              <p>&apos;Perfect Organisation- good communication&apos;</p>
              <p className="mt-[20px]">- Zulu Sofola</p>
            </div>
            <div className="border-black border-[1px] py-[5px] px-[10px] rounded-md">
              <p>&apos;Perfect Organisation- good communication&apos;</p>
              <p className="mt-[20px]">- Jagua Nana</p>
            </div>
          </div>
        </div>
      </div>
      {login && (
        <div className="relative">
          <Login
            login={login}
            forgotPassword={forgotPassword}
            toggleLogin={toggleLogin}
            goToSignup={goToSignup}
            setIsLoading={setIsLoading}
            setForgotPassword={setForgotPassword}
            goToForgotPassword={goToForgotPassword}
          />
          {isLoading && (
            <div className="absolute top-[45vh] left-[47vw]">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={[
                  "#004643",
                  "#004643",
                  "##004643",
                  "#004643",
                  "#004643",
                ]}
              />
            </div>
          )}
        </div>
      )}
      {signup && (
        <div className="relative">
          <Signup
            signup={signup}
            toggleSignup={toggleSignup}
            goToLogin={goToLogin}
            setIsLoading={setIsLoading}
            setSignup={setSignup}
          />
          {isLoading && (
            <div className="absolute top-[50vh] left-[47vw]">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={[
                  "#004643",
                  "#004643",
                  "##004643",
                  "#004643",
                  "#004643",
                ]}
              />
            </div>
          )}
        </div>
      )}
      {forgotPassword && (
        <div className="relative">
          <ForgotPassword
             login={login}
             toggleLogin={toggleLogin}
             gotToSignup={goToSignup}
             setIsLoading={setIsLoading}
             setForgotPassword={setForgotPassword}
             goToForgotPassword={goToForgotPassword}
          />
          {isLoading && (
            <div className="absolute top-[50vh] left-[47vw]">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={[
                  "#004643",
                  "#004643",
                  "##004643",
                  "#004643",
                  "#004643",
                ]}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
