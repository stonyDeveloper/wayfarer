import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Td,
  Tfoot,
  Th,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useQuery } from "@tanstack/react-query";
import useFetchAllTrips from "../hooks/useFetchAllTrips";
import { Skeleton } from "@chakra-ui/react";

const { handleFetchAllTrips } = useFetchAllTrips();

const AllTripsTable = () => {

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["allTrips"],
    queryFn: handleFetchAllTrips,
  });

  return (
    <Skeleton className="w-fit min-h-[250px]" isLoaded={!isLoading}>
      <TableContainer>
        <Table variant="striped" colorScheme="teal" w={"50vw"}>
          <Thead>
            <Tr>
              <Th>Trip ID</Th>
              <Th>Trip Status</Th>
              <Th>Origin</Th>
              <Th>Destination</Th>
            </Tr>
          </Thead>

          <Tbody>
            {data &&
              data.map((trip) => (
                <Tr key={trip.id}>
                  <Td>{trip.trip_id}</Td>
                  <Td>{trip.trips_status}</Td>
                  <Td>{trip.origin}</Td>
                  <Td>{trip.destination}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Skeleton>
  );
};

export default AllTripsTable;
