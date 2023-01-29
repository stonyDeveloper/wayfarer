import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { authApi } from "../api";
import { successToast, failureToast } from "../Authentication/Toast/toast";

const useCreateTrip = () => {
  const { user } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(false);
  const handleCreatetrip = async (trip) => {
    try {
      console.log(trip, 'Trip')
      setIsLoading(true);
      const { data } = await authApi.post("/api/v1/trip/create-trip", trip);
      console.log(user.token, "Trip");
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
