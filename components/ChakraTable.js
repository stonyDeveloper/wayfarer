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

const ChakraTable = () => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal" w={'50vw'}>
        <Thead>
          <Tr>
            <Th>Trip ID</Th>
            <Th>Trip Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>trip-da701662919d11ed94dc27fee929ebbb</Td>
            <Td>In Progress</Td>
          </Tr>
          <Tr>
            <Td>trip-da701662919d11ed94dc27fee929ebbb</Td>
            <Td>Completed</Td>
          </Tr>
          <Tr>
            <Td>trip-da701662919d11ed94dc27fee929ebbb</Td>
            <Td>Completed</Td>
          </Tr>
          <Tr>
            <Td>trip-da701662919d11ed94dc27fee929ebbb</Td>
            <Td>Pending</Td>
          </Tr>
        </Tbody>
      
      </Table>
    </TableContainer>
  );
};

export default ChakraTable;
