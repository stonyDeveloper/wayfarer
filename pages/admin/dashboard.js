import React, { useEffect } from "react";
import AdminShell from "../../components/AdminShell";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useFetchAvailableBuses } from "../../helpers/fetchAvailableBuses";
import { SpinnerIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import PopOver from "../../components/PopOver";
import Table from "../../components/ChakraTable";
import ChakraTable from "../../components/ChakraTable";
import useFetchAllTrips from "../../hooks/useFetchAllTrips";
const dashboard = () => {
  const { getBuses } = useFetchAvailableBuses();
  const { handleFetchAllTrips, isLoading } = useFetchAllTrips();
  const { allTrips } = useContext(DataContext);
  useEffect(() => {
    getBuses();
    handleFetchAllTrips();
  }, [allTrips]);
  return (
    <div>
      <AdminShell>
        <div className="flex items-center gap-2">
          <SpinnerIcon />
          {/* <div className="w-[10px] h-[5px] rounded-[100%] bg-black"></div> */}
          <h3 className="text-[40px] font-thin text-[#004643]">Overview</h3>
        </div>

        <div className="mt-[40px] flex gap-[70px] items-center">
          <p className="font-bold text-[#004643] text-[40px]">
            Manage <br /> Your Trips <br /> & Bookings
          </p>
          <div className="flex gap-5">
            <Card
              bg={"#636C79"}
              h={"250px"}
              w={"250px"}
              rounded={"lg"}
              color={"white"}
              p="3"
            >
              <CardHeader>
                <Flex align={"center"} justify="space-between">
                  <p>10 Buses Available</p>
                  <div className="cursor-pointer">
                    <PopOver />
                  </div>
                </Flex>
              </CardHeader>
              <CardBody>
                <div className="text-[80px]">
                  <i class="fa fa-bus" aria-hidden="true"></i>
                </div>
              </CardBody>
            </Card>
            <Card
              bg={"#4D4E8D"}
              h={"250px"}
              w={"250px"}
              rounded={"lg"}
              color={"white"}
              p="3"
            >
              <CardHeader>
                <Flex align={"center"} justify="space-between">
                  <p>5 Trips in Progress</p>
                  <div className="cursor-pointer">
                    <PopOver />
                  </div>
                </Flex>
              </CardHeader>
              <CardBody>
                <div className="text-[80px]">
                  <i class="fa fa-suitcase" aria-hidden="true"></i>
                </div>
              </CardBody>
            </Card>
            <Card
              bg={"#8BB7A1"}
              h={"250px"}
              w={"250px"}
              rounded={"lg"}
              color={"white"}
              p="3"
            >
              <CardHeader>
                <Flex align={"center"} justify="space-between">
                  <p>10 Buses Available</p>
                  <div className="cursor-pointer">
                    <PopOver />
                  </div>
                </Flex>
              </CardHeader>
              <CardBody>
                <div className="text-[80px]">
                  <i class="fa fa-bus" aria-hidden="true"></i>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="mt-[70px]">
          <Skeleton className="w-fit" isLoaded={!isLoading}>
            <ChakraTable />
          </Skeleton>
        </div>
      </AdminShell>
    </div>
  );
};

export default dashboard;
