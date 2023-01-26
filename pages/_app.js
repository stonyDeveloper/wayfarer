import "../styles/globals.css";
import { DataContext, DataProvider } from "../context/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DataProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </DataProvider>
    </ChakraProvider>
  );
}
