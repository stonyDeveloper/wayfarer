import { useState } from "react";
import Cookies from "js-cookie";

const token = Cookies.get("user_data")
  ? JSON.parse(Cookies.get("user_data")).token
  : [];
const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);

  let isAuthenticated;
  token ? isAuthenticated : !isAuthenticated

  return { isAuthenticated, isLoading, setIsLoading };
};

export default useAuth;
