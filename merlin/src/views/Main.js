import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "./SplitPane";
import { useState } from "react";

import "./App.css";
import getData from "../data";
import getConfig from "../configs";
import { Button, Flex, IconButton, Spacer } from "@chakra-ui/react";
import {
  DataObject,
  Description,
  Fullscreen,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Settings,
} from "@mui/icons-material";
import getComponent from "../components";
const convertVwToPx = (vh = 50) => {
  const oneVhInPx = window.innerWidth / 100;
  return oneVhInPx * vh;
};
function Main({ component }) {
  const Component = getComponent(component);
  const iconButtonStyle = {
    border: "0px",
    color: "#aaaaaa",
    background: "transparent",
    boxShadow: "none",
    padding: 0,
    width: "20px",
    height: "20px",
    "&:hover": {
      color: "#333333",
      background: "transparent",
    },
  };
  const buttonStyle = (active = false) => ({
    border: "0px",
    color: active ? "#000" : "#aaaaaa",
    background: "transparent",
    boxShadow: "none",
    padding: "0 5px",
    fontSize: "14px",
    "&:hover": {
      color: "#333333",
      background: "transparent",
    },
  });
  const [tab, setTab] = useState("description");
  const tabs = {
    description: {
      title: "Description",
      icon: <Description style={{ fontSize: "15px" }} />,
    },
    configuration: {
      title: "Configuration",
      icon: <Settings style={{ fontSize: "15px" }} />,
    },
    data: {
      title: "Data",
      icon: <DataObject style={{ fontSize: "15px" }} />,
    },
  };
  const [leftPaneHovered, setLeftPaneHovered] = useState(false);
  return (
    <div className="App" style={{ width: "100%" }}>
      <SplitPane className="split-pane-row">
        <SplitPaneLeft
          onMouseEnter={() => setLeftPaneHovered(true)}
          onMouseLeave={() => setLeftPaneHovered(false)}
        >
          {(clientWidth, setClientWidth) => (
            <Flex
              w="100%"
              h="40px"
              bg="#EDF2FA"
              alignItems={"center"}
              overflow={"scroll"}
              justifyContent={clientWidth <= 50 ? "center" : null}
            >
              <Flex
                wrap={"no-wrap"}
                gap="10px"
                display={clientWidth <= 50 ? "none" : "block"}
              >
                {Object.keys(tabs).map((_tab) => (
                  <Button
                    cursor={"pointer"}
                    style={buttonStyle(tab == _tab)}
                    onClick={() => setTab(_tab)}
                    leftIcon={tabs[_tab].icon}
                  >
                    {tabs[_tab].title}
                  </Button>
                ))}
              </Flex>
              <Spacer display={clientWidth <= 50 ? "none" : "block"} />
              <IconButton
                alignSelf={"center"}
                visibility={
                  leftPaneHovered || clientWidth <= 50 ? "visible" : "hidden"
                }
                sx={iconButtonStyle}
                onClick={() =>
                  clientWidth > 50 ? setClientWidth(50) : setClientWidth(500)
                }
                icon={
                  clientWidth <= 50 ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )
                }
              />
              <IconButton
                alignSelf={"center"}
                display={clientWidth <= 50 ? "none" : "block"}
                visibility={leftPaneHovered ? "visible" : "hidden"}
                sx={{ ...iconButtonStyle, paddingBottom: "5px" }}
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => setClientWidth(convertVwToPx(100) - 50)}
                icon={<Fullscreen />}
              />
            </Flex>
          )}
        </SplitPaneLeft>
        <Divider className="separator-col" />

        <SplitPaneRight
          //   className="split-pane-col"
          style={{ paddingTop: "20px" }}
        >
          <SplitPaneTop>
            {" "}
            <Component
              config={getConfig(component)}
              data={getData(component)}
            />
          </SplitPaneTop>
          <Divider className="separator-row" />
          <SplitPaneBottom style={{ height: "300px" }}></SplitPaneBottom>
        </SplitPaneRight>
      </SplitPane>
    </div>
  );
}

export default Main;
