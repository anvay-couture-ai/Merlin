import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Filters = ({ data, config, state }) => {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();
  const [selectedFilter, setSelectedFilter] = React.useState(null);
  return (
    <Popover
      placement="right-start"
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Box w="300px" h="900px" overflowY={"scroll"}>
          <Text textAlign={"left"}>Filters</Text>
          {Object.keys(config.filters).map((filter) => {
            return (
              <Flex direction="column" gap="10px">
                <Text textAlign={"left"}>{config.filters[filter].title}</Text>
                {Object.keys(config.filters[filter].options).map((option) => {
                  return (
                    <Button
                      onClick={() => {
                        setSelectedFilter({
                          group: filter,
                          filter: option,
                        });
                        onOpen();
                      }}
                    >
                      {config.filters[filter].options[option]}
                    </Button>
                  );
                })}
              </Flex>
            );
          })}
        </Box>
      </PopoverTrigger>
      <PopoverContent h="900px">
        {/* <PopoverArrow /> */}
        <PopoverCloseButton />
        <PopoverHeader>
          {selectedFilter ? selectedFilter.filter : null}
        </PopoverHeader>
        <PopoverBody>
          {selectedFilter ? (
            <Flex direction="column">
              {data(selectedFilter.group, selectedFilter.filter).map((row) => {
                return (
                  <Flex direction="row" gap="10px">
                    {row}
                  </Flex>
                );
              })}
            </Flex>
          ) : null}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
export default Filters;
