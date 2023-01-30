import React from "react";
// import Typical from "react-typical";

const Hero = ({ toggleLogin, toggleSignup }) => {
  return (
    <div className="hero h-[60vh] text-white">
      <div className="nav px-20 py-4 flex items-center justify-between">
        <div className="logo">
          <p className="text-[50px] font-bold">
            Way<span className="text-[#004643] text-[60px]">F</span>arer
          </p>
        </div>

        <div className="btns flex items-center gap-[40px]">
          <p
            onClick={toggleLogin}
            className="text-[20px] cursor-pointer hover:underline hover:text-[#004643]"
          >
            Login
          </p>
          <button
            onClick={toggleSignup}
            className="border-[1px] py-4 rounded-md px-6 hover:bg-[#004643]"
          >
            Create Account
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-[50px]">
        <p className="text-[55px] font-light text-center">
          Travel to the world’s best locations via <br />
          <span className="ml-[10px]">
            {/* <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Bus',
                    3000,
                    'Car',
                    5000
                ]
                }
            /> */}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
