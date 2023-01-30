import React, { useState } from "react";
import { authApi } from "../api";

const useFetchAllTrips = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchAllTrips = async () => {
    try {
      setIsLoading(true);
      const trips = await authApi.get("/api/v1/trip/filter-trips");
      console.log(trips?.data?.data?.trips, "handlefetchalltrips");
      localStorage.setItem('all_trips', JSON.stringify(trips?.data?.data?.trips))
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return { handleFetchAllTrips, isLoading };
};

export default useFetchAllTrips;
