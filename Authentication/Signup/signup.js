import { failureToast, successToast } from "../Toast/toast";
import { api } from "../../api";





export const userSignup =  
  async ({ first_name, last_name, email, password }, setIsLoading, toggleSignup) => {
    setIsLoading(true)
    try {
      const { data } = await api.post("/api/v1/auth/sign_up", {
        first_name,
        last_name,
        email,
        password,
      });
      setIsLoading(false)
      console.log(data);
      successToast("Signed up successfully!");
      setTimeout(() => {
        toggleSignup();
      }, 4000);
    //   setTimeout(toggleSignup(), 3000)
      return data;
    } catch (error) {
      console.log(error.response, "error");
      setIsLoading(false)
      failureToast(error.response?.data?.message);
    //   return rejectWithValue(error.response.data);
    }
  };

