import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";
import { useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { DataContext } from "../context/DataContext";
import { useRouter } from "next/router";
import useLogout from "../hooks/useLogout";

const AdminShell = ({ children }) => {
  const { user } = useContext(DataContext);
  const route = useRouter().pathname;
  const { handleLogout } = useLogout();
  // console.log('Present Route', router.pathname)
  const token = Cookies.get("user_data")
    ? JSON.parse(Cookies.get("user_data")).token
    : null;
  const router = useRouter();

  useEffect(() => {
    token ? router.push(`${router.pathname}`) : router.push("/admin");
    console.log(token, "AuthState");
  }, [token]);

  return (
    <div>
      <Stack direction={"row"}>
        <div className="pt-[70px] pl-[30px] w-[27%] min-h-screen bg-[#004643] text-white">
          <p className="text-[30px]">Admin Dashboard</p>
          <div>
            {user
              ? user?.first_name?.[0]?.toUpperCase() +
                user.first_name?.slice(1) +
                " " +
                user?.last_name?.[0]?.toUpperCase() +
                user?.last_name?.slice(1)
              : ""}
          </div>

          <div className="mt-[30px] flex flex-col gap-[20px]">
            <Link
              className={`${
                route === "/admin/create_trip"
                  ? "bg-white text-[#004643]"
                  : "bg-[#004643"
              }  rounded-l-md`}
              href="/admin/create_trip"
            >
              <p className="pl-[15px] py-[9px]">Create Trip</p>
            </Link>
            <Link
              className={`${
                route === "/admin/cancel_trip"
                  ? "bg-white text-[#004643]"
                  : "bg-[#004643"
              }  rounded-l-md`}
              href="/admin/cancel_trip"
            >
              <p className="pl-[15px] py-[9px]">Cancel Trip</p>
            </Link>
            <Link
              className={`${
                route === "/admin/register_bus"
                  ? "bg-white text-[#004643]"
                  : "bg-[#004643"
              }  rounded-l-md`}
              href="/admin/register_bus"
            >
              <p className="pl-[15px] py-[9px]">Register Bus</p>
            </Link>
            <Link
              className={`${
                route === "/admin/bookings"
                  ? "bg-white text-[#004643]"
                  : "bg-[#004643"
              }  rounded-l-md`}
              href="/admin/bookings"
            >
              <p className="pl-[15px] py-[9px]">Bookings</p>
            </Link>
            <Link
              className={`${
                route === "/admin/trips"
                  ? "bg-white text-[#004643]"
                  : "bg-[#004643"
              }  rounded-l-md`}
              href="/admin/trips"
            >
              <p className="pl-[15px] py-[9px]">Trips</p>
            </Link>
            <div
              onClick={handleLogout}
              className="mt-[200px] pl-[15px] cursor-pointer"
            >
              Log Out
            </div>
          </div>
        </div>
        <div className="w-full pt-[70px] pl-[30px]">{children}</div>
      </Stack>
    </div>
  );
};

export default AdminShell



