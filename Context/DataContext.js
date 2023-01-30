import React, { createContext, useEffect, useState, useReducer } from "react";
import { actionTypes } from "./Types";
import Cookies from "js-cookie";
import { useFetchAvailableBuses } from "../helpers/fetchAvailableBuses";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState();
  const [availableBuses, setAvailableBuses] = useState([]);
  const { getBuses } = useFetchAvailableBuses();
  const [allTrips, setAllTrips] = useState([]);

  useEffect(() => {
    setUser(
      Cookies.get("user_data") ? JSON.parse(Cookies.get("user_data")) : []
    );

    setAllTrips(
      localStorage.getItem("all_trips")
        ? JSON.parse(localStorage.getItem("all_trips"))
        : [],
      "All Trips in COntext"
    );
  }, []);

  return (
    <DataContext.Provider
      value={{
        //  forgotPassword,
        //  setForgotPassword,
        //  goToForgotPassword
        user,
        setUser,
        availableBuses,
        showDropdown,
        setShowDropdown,
        setAllTrips,
        allTrips,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
