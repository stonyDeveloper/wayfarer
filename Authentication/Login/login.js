import { successToast, failureToast } from "../Toast/toast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import useApi from "../../api";
import { api } from "../../api";


export const userLogin = async (
  { email, password },
  setLoading,
  toggleLogin
) => {
  setLoading(true);
  try {
    const { data } = await api.post("/api/v1/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", data?.data?.token);

    setLoading(false);
    console.log(data);
    successToast("Logged in successfully!");
    setTimeout(() => {
      toggleLogin();
    }, 4000);
    return data;
  } catch (error) {
    console.log(error.response, "error");
    setLoading(false);
    failureToast(error.response?.data?.message);
  }
};

export const useAdminLogin = () => {
  const [ isLoading, setIsLoading ] = useState()
  const router = useRouter();

  const handleSubmit = async ({email, password}) => {
    try {
    setIsLoading(true);
    const { data } = await api.post("/api/v1/auth/admin/login", {
      email,
      password,
    });
    Cookies.set("user_data", JSON.stringify(data?.data));
    console.log("user_data", data?.data);
    setIsLoading(false);
    console.log("data", data);

    router.push("/admin/dashboard");
    
    successToast("Logged in successfully");
    // return data;
  } catch (error) {
    console.log("error", error);
    setIsLoading(false);
    failureToast(error.response?.data?.message);
  }}

  return { handleSubmit, isLoading }
};
