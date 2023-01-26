import React, { useState } from "react";
import Hide from "../public/Hide.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Input = ({ type, width, placeholder, label, onChange, value, id, onBlur, name, min }) => {
  const [passwordInputType, setPasswordInputType] = useState(type)
  const togglePassword = () => {
    if(passwordInputType == 'text'){
      setPasswordInputType(type)
    console.log('text')

    } else if(passwordInputType == type){
      setPasswordInputType("text")
    console.log(type)

    }
  }

  return (
    <div className="flex flex-col gap-[16px]">
      <label className="">{label}</label>

      <div className="relative">
        <input
          className={`h-[40px] py-[16px] px-[24px] rounded-[10px] border-[1px] border-[#C0C0C0] ${width}`}
          type={passwordInputType}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          id={id}
          name={name}
          min={min}

        />
        {passwordInputType=='password' && <FontAwesomeIcon onClick={togglePassword} className="text-[#8C8C8C] w-[20px] absolute top-[30%] right-[24px]" icon={faEye}/>}
        {passwordInputType == 'text' && label == 'Password' ? (<FontAwesomeIcon onClick={togglePassword}  className="text-[#8C8C8C] w-[20px] absolute top-[30%] right-[24px]" icon={faEyeSlash}/>): ''}

        {/* <img className="absolute top-[30%] right-[24px]" src="/Hide.png" alt="hide" /> */}
        

      </div>
    </div>
  );
};

export default Input;
