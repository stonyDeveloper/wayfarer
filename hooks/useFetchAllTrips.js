import React, { useState } from "react";
import { authApi } from "../api";

const useFetchAllTrips = () => {
  // const [isLoading, setIsLoading] = useState(false);

  const handleFetchAllTrips = async () => {
    try {
      console.log("This hook is working")
      // setIsLoading(true);
      const res = await authApi.get("/api/v1/trip/filter-trips");
      console.log(res?.data?.data.trips, "handlefetchalltrips");
      // localStorage.setItem('all_trips', JSON.stringify(res?.data?.data?.trips))
      // setIsLoading(false);
      return res?.data?.data.trips
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
    }
  }
  return { handleFetchAllTrips };
};

export default useFetchAllTrips;
