import React, { useState } from "react";
import { authApi } from "../api";
import { successToast, failureToast } from "../Authentication/Toast/toast";

const useCreateTrip = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleCreatetrip = async (trip) => {
    try {
      console.log(trip, 'Trip')
      setIsLoading(true);
      const { data } = await authApi.post("/api/v1/trip/create-trip", trip);
      console.log(data, "trip created");
      setIsLoading(false);
      successToast('Trip created successfully!');
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
      failureToast(error.response?.data?.message);
    }
  };
  return { handleCreatetrip, isLoading };
};

export default useCreateTrip;
