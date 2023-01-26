import Cookies from "js-cookie";
import { useState } from "react";
import { authApi } from "../api";

export const useFetchAvailableBuses = () => {
  const getBuses = async () => {
    try {
      const data = await authApi.get("api/v1/trip/available-buses");
      console.log("Set", data?.data?.data);

      Cookies.set("available_buses", JSON.stringify(data?.data?.data));

      return data?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };
  return { getBuses };
};
