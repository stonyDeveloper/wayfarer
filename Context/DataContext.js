import React, { createContext, useEffect, useState, useReducer } from "react";
import { actionTypes } from "./Types";
import Cookies from "js-cookie";
import { useFetchAvailableBuses } from "../helpers/fetchAvailableBuses";

const DataContext = createContext({});



const DataProvider = ({ children }) => {  
   const [user, setUser] = useState()
   const [availableBuses, setAvailableBuses] = useState([])
   const { getBuses }  = useFetchAvailableBuses()

   


   useEffect(() => {
     setUser(Cookies.get("user_data") ? JSON.parse(Cookies.get("user_data")) : [])
     getBuses()
   }, [])

  
   
   

 
  return (
    <DataContext.Provider
      value={{
      //  forgotPassword,
      //  setForgotPassword,
      //  goToForgotPassword
      user,
      setUser,
      availableBuses
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
