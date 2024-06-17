import React, { useState } from "react";
import {
  TableContainer,
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react";

const Table = ({ data, config, state }) => {
  const [_data, _setData] = useState(data());
  return (
    <TableContainer
      style={{
        border: "2px solid #e2e8f0",
        padding: "10px",
        margin: "0px 20px",
        borderRadius: "5px",
      }}
    >
      <ChakraTable
        // variant="simple"
        size="md"
        style={{ borderSpacing: "0 1em" }}
        // __css={{ width: "full", tableLayout: "fixed" }}
      >
        <Thead>
          <Tr
            style={{
              borderBottom: `2px solid #EEEEEE`,
              padding: "20px 10px",
            }}
          >
            {config.columns.map((column) => {
              return (
                <Th
                  // ml="1"
                  textAlign={"left"}
                  key={column.key}
                  colSpan={column.colSpan}
                  style={{
                    padding: "0 10px",
                    borderBottom: `2px solid #EEEEEE`,
                  }}
                >
                  {column.title}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {_data.map((row) => {
            return (
              <Tr
                key={row.key}
                style={{
                  borderBottom: `2px solid #EEEEEE`,

                  // borderBottom: `2px solid #EEEEEE`,
                  padding: "20px 10px",
                }}
              >
                {config.columns.map((column) => {
                  return (
                    <Td
                      textAlign={"left"}
                      key={column.key}
                      style={{
                        borderBottom: `2px solid #EEEEEE`,
                        padding: "0px 10px",
                      }}
                      colSpan={column.colSpan}
                    >
                      <Text
                        style={{
                          wordBreak: "break-word",
                        }}
                        // maxW="500px"
                      >
                        {" "}
                        {row[column.dataIndex]}
                      </Text>
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};
export default Table;
