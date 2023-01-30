import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Stack,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { loginSchema } from "../../Authentication/loginSchema";
import { Formik } from "formik";
import { adminLogin, useAdminLogin } from "../../Authentication/Login/login";
import { ColorRing } from "react-loader-spinner";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useFetchAvailableBuses } from "../../helpers/fetchAvailableBuses";

const Login = () => {
  const { onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { handleSubmit, isLoading } = useAdminLogin();
  const token = Cookies.get("user_data")
    ? JSON.parse(Cookies.get("user_data")).token
    : null;
  const router = useRouter();
  

  useEffect(() => {
    token ? router.push(`${router.pathname}`) : router.push("/admin");
  },[]);

  
  

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit({
          email: values.email,
          password: values.password,
        });
      }}
    >
      {(formik) => {
        const { touched, errors } = formik;
        return (
          <div className="admin-login h-screen ">
            <>
              <Drawer
                isOpen={true}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
                autoFocus={true}
                size={"xl"}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader
                    fontSize={"50px"}
                    fontWeight={"bold"}
                    className="text-[#004643] text-center mt-[100px]"
                  >
                    Admin Login
                  </DrawerHeader>

                  <DrawerBody className="mt-[30px]">
                    <form
                      onSubmit={formik.handleSubmit}
                      className="text-center relative"
                    >
                      <Stack spacing={"10"} justify={"center"} align={"center"}>
                        <div className="w-[60%]">
                          <Text className="text-left mb-[10px]">
                            Email Address
                          </Text>
                          <Input
                            size={"lg"}
                            placeholder="Enter Email Address"
                            onChange={formik.handleChange}
                            id="email"
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                          />
                          {touched.email && errors.email && (
                            <p className="text-red-600 text-left">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div className="w-[60%]">
                          <Text className="text-left mb-[10px]">Password</Text>
                          <InputGroup size="md">
                            <Input
                              type={show ? "text" : "password"}
                              size={"lg"}
                              placeholder="Enter Password"
                              id="password"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.password}
                            />

                            <InputRightElement width="4.5rem">
                              <Button
                                mt={"6px"}
                                h="2rem"
                                size="sm"
                                onClick={handleClick}
                              >
                                {show ? "Hide" : "Show"}
                              </Button>
                            </InputRightElement>
                          </InputGroup>
                          {touched.password && errors.password && (
                            <p className="text-red-600 text-left">
                              {errors.password}
                            </p>
                          )}
                        </div>
                      </Stack>
                      <Button
                        type="submit"
                        width={"60%"}
                        mt={"50px"}
                        bg={"#004643"}
                        color={"white"}
                        variant={"outline"}
                        _hover={{ bg: "white", color: "#004643" }}
                      >
                        Log In
                      </Button>
                      {isLoading && (
                        <div className="absolute top-[40%] right-[50%]">
                          <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={[
                              "#004643",
                              "#004643",
                              "##004643",
                              "#004643",
                              "#004643",
                            ]}
                          />
                        </div>
                      )}
                    </form>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
