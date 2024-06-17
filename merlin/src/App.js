import {
  Box,
  Button,
  ChakraProvider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  ThemeProvider,
  useDisclosure,
} from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import Table from "./components/artifactory/Table";
import getData from "./data";
import getConfig from "./configs";
import theme from "./theme";
import Main from "./views/Main";
import {
  Download,
  Filter,
  Grid3x3,
  KeyboardArrowDown,
  KeyboardDoubleArrowLeft,
  MenuOpen,
  Sort,
  TableBar,
  Visibility,
} from "@mui/icons-material";

function App() {
  const _components = {
    data: {
      name: "Data Display",
      items: [
        "Table",
        "Filters",
        "Card",
        "List",
        "Carousel",
        "Accordion",
        "Tabs",
        "Timeline",
        "Calendar",
        "Map",
        "Tree",
        "Kanban",
        "Gantt Chart",
      ],
    },
    graphs: {
      name: "Graphs",
      items: [
        "Bar Chart",
        "Line Chart",
        "Pie Chart",
        "Area Chart",
        "Scatter Plot",
        "Bubble Chart",
        "Heat Map",
        "Tree Map",
        "Box Plot",
        "Histogram",
        "Violin Plot",
        "Funnel Chart",
        "Donut Chart",
        "Gauge Chart",
        "Radar Chart",
        "Polar Chart",
        "Sankey Diagram",
        "Chord Diagram",
        "Flow Diagram",
        "Venn Diagram",
        "Word Cloud",
        "Tag Cloud",
        "Sunburst Chart",
        "Parallel Coordinates",
        "Network Diagram",
        "Timeline",
      ],
    },
  };
  const [component, setComponent] = useState("table");
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Flex
          direction="column"
          w="100%"
          bg="#fbfbfb"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex zIndex={1000} w="100%" h="50px" alignItems={"center"}>
            <Flex paddingLeft="20px" gap="20px" alignItems={"center"}>
              <IconButton
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  color: "gray",
                }}
                icon={drawerOpen ? <KeyboardDoubleArrowLeft /> : <MenuOpen />}
                colorScheme="teal"
                onClick={
                  drawerOpen
                    ? () => setDrawerOpen(false)
                    : () => setDrawerOpen(true)
                }
              />

              <Text
                style={{
                  color: "#D26A51",
                  fontWeight: "900",
                }}
              >
                Merlin
                <span style={{ color: "#999999" }}>.playground</span>
              </Text>
              <Menu>
                <MenuButton
                  bg="#EDF2FA"
                  border="0"
                  as={Button}
                  aria-label="Options"
                  rightIcon={<KeyboardArrowDown />}
                  variant="outline"
                  fontSize={"13px"}
                  _hover={{
                    bg: "#EDF2FA",
                  }}
                  _focus={{
                    bg: "#EDF2FA",
                  }}
                  h="30px"
                >
                  V1.0.0
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<Grid3x3 />} command="⌘T">
                    V0.0
                  </MenuItem>
                  <MenuItem icon={<Sort />} command="⌘N">
                    V1.0
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
          <Flex w="100%" alignItems={"center"} justifyContent={"center"}>
            <Flex
              borderRight={"1px solid #ddd"}
              overflowY="scroll"
              pl="20px"
              w="200px"
              left="0"
              h="calc(100vh - 50px)"
              display={drawerOpen ? "block" : "none"}
              position={"absolute"}
              zIndex={1000}
              gap="20px"
              alignItems={"flex-start"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
            >
              {Object.keys(_components).map((key) => {
                return (
                  <Flex
                    mt="20px"
                    direction="column"
                    gap="2px"
                    key={key}
                    w="100%"
                    alignItems={"flex-start"}
                  >
                    <Text
                      fontSize={"13px"}
                      textAlign={"left"}
                      color="#D26A51"
                      fontWeight={"900"}
                    >
                      {_components[key].name.toUpperCase()}
                    </Text>
                    {_components[key].items.map((item) => {
                      return (
                        <Button
                          style={{
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            color: "gray",
                            fontSize: "13px",
                          }}
                          variant="ghost"
                          onClick={() => {
                            setComponent(item.toLowerCase());
                          }}
                        >
                          {item}
                        </Button>
                      );
                    })}
                  </Flex>
                );
              })}
            </Flex>
            <Flex w="100%" pl={drawerOpen ? "200px" : "0"}>
              <Main component={component} />
            </Flex>
            {/* <Table config={getConfig("table")} data={getData("table")} /> */}
          </Flex>
        </Flex>
      </ChakraProvider>
    </div>
  );
}

export default App;
