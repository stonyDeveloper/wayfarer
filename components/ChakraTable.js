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

const ChakraTable = () => {
  const { allTrips } = useContext(DataContext)
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal" w={'50vw'}>
        <Thead>
          <Tr>
            <Th>Trip ID</Th>
            <Th>Trip Status</Th>
            <Th>Origin</Th>
            <Th>Destination</Th>
          </Tr>
        </Thead>
       
        <Tbody>
          {allTrips.map((trip) => (<Tr key={trip.id}>
            <Td>{trip.trip_id}</Td>
            <Td>{trip.trips_status}</Td>
            <Td>{trip.origin}</Td>
            <Td>{trip.destination}</Td>
          </Tr>))}
          <Tr>
            {/* <Td>trip-da701662919d11ed94dc27fee929ebbb</Td> */}
            {/* <Td>In Progress</Td>
            <Td>Lagos</Td>
            <Td>Abuja</Td> */}
          </Tr>
          {/* <Tr>
            <Td>trip-da701662919d11ed94dc27fee929ebbb</Td>
            <Td>Completed</Td>
            <Td>Lagos</Td>
            <Td>Abuja</Td>
          </Tr>
          <Tr>
            <Td>trip-da701662919d11ed94dc27fee929ebbb</Td>
            <Td>Completed</Td>
            <Td>Lagos</Td>
            <Td>Abuja</Td>
          </Tr>
          <Tr>
            <Td>trip-da701662919d11ed94dc27fee929ebbb</Td>
            <Td>Pending</Td>
            <Td>Pending</Td>
            <Td>Pending</Td>
          </Tr> */}
        </Tbody>
      
      </Table>
    </TableContainer>
  );
};

export default ChakraTable;
