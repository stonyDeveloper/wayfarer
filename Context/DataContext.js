import React, { createContext, useEffect, useState, useReducer } from "react";
import { actionTypes } from "./Types";
import Cookies from "js-cookie";

const DataContext = createContext({});



const DataProvider = ({ children }) => {  
   const [user, setUser] = useState()


   useEffect(() => {
     setUser(Cookies.get("user_data") ? JSON.parse(Cookies.get("user_data")) : [])
   }, [])
   

 
  return (
    <DataContext.Provider
      value={{
      //  forgotPassword,
      //  setForgotPassword,
      //  goToForgotPassword
      user,
      setUser
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
