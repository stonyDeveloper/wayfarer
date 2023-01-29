import React from "react";
import { useState } from "react";
import { authApi } from "../api";
import { successToast, failureToast } from "../Authentication/Toast/toast";
import Cookies from "js-cookie";

const useRegisterBus = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegisterBus = async (trip) => {
    try {
        // const token = Cookies.get("user_data") && JSON.parse(Cookies.get("user_data")).token
        // console.log(token,"token")
      setIsLoading(true);
      const { data } = await authApi.post("/api/v1/trip/register-bus", trip);
      console.log(data);
      setIsLoading(false);
      successToast("Bus Registered Successfully");
    } catch (error) {
      console.log(error, "error");
      setIsLoading(false)
      failureToast(error.response?.data?.message)
    }
  };
  return { handleRegisterBus, isLoading };
};

export default useRegisterBus;
