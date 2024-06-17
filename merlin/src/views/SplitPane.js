import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import SplitPaneContext from "./SplitPaneContext";
const convertVhToPx = (vh = 50) => {
  const oneVhInPx = window.innerHeight / 100;
  return oneVhInPx * vh;
};
const SplitPane = ({ children, ...props }) => {
  const [clientHeight, setClientHeight] = useState(null);
  const [clientWidth, setClientWidth] = useState(null);
  const yDividerPos = useRef(null);
  const xDividerPos = useRef(null);

  const onMouseHoldDown = (e) => {
    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  const onMouseHoldUp = () => {
    yDividerPos.current = null;
    xDividerPos.current = null;
  };

  const onMouseHoldMove = (e) => {
    if (!yDividerPos.current && !xDividerPos.current) {
      return;
    }

    setClientHeight(clientHeight + e.clientY - yDividerPos.current);
    setClientWidth(clientWidth + e.clientX - xDividerPos.current);

    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseHoldUp);
    document.addEventListener("mousemove", onMouseHoldMove);

    return () => {
      document.removeEventListener("mouseup", onMouseHoldUp);
      document.removeEventListener("mousemove", onMouseHoldMove);
    };
  });

  return (
    <div {...props}>
      <SplitPaneContext.Provider
        value={{
          clientHeight,
          setClientHeight,
          clientWidth,
          setClientWidth,
          onMouseHoldDown,
        }}
      >
        {children}
      </SplitPaneContext.Provider>
    </div>
  );
};

export const Divider = (props) => {
  const { onMouseHoldDown } = useContext(SplitPaneContext);

  return <div {...props} onMouseDown={onMouseHoldDown} />;
};

export const SplitPaneTop = ({ children, ...props }) => {
  const topRef = createRef();
  const { clientHeight, setClientHeight } = useContext(SplitPaneContext);
  useEffect(() => {
    if (!clientHeight) {
      setClientHeight(topRef.current.clientHeight);
      return;
    }

    topRef.current.style.minHeight = clientHeight + "px";
    topRef.current.style.maxHeight = clientHeight + "px";
  }, [clientHeight]);

  return (
    <div {...props} className="split-pane-top" ref={topRef}>
      {children}
    </div>
  );
};

export const SplitPaneBottom = ({ children, ...props }) => {
  const bottomRef = createRef();
  const { clientHeight, setClientHeight } = useContext(SplitPaneContext);
  useEffect(() => {
    if (!clientHeight) {
      //   setClientHeight(bottomRef.current.clientHeight);
      return;
    }

    bottomRef.current.style.minHeight =
      convertVhToPx(100) - clientHeight - 20 - 5 - 50 + "px";
    bottomRef.current.style.maxHeight =
      convertVhToPx(100) - clientHeight - 20 - 5 - 50 + "px";

    console.log("bottomRef", bottomRef.current.style.minHeight, clientHeight);
  }, [clientHeight]);

  return (
    <div {...props} className="split-pane-bottom" ref={bottomRef}>
      {children}
    </div>
  );
};

export const SplitPaneLeft = ({ children, ...props }) => {
  const topRef = createRef();
  const { clientWidth, setClientWidth } = useContext(SplitPaneContext);

  useEffect(() => {
    if (!clientWidth) {
      setClientWidth(topRef.current.clientWidth / 2);
      return;
    }

    topRef.current.style.minWidth = clientWidth + "px";
    topRef.current.style.maxWidth = clientWidth + "px";
  }, [clientWidth]);

  return (
    <div {...props} className="split-pane-left" ref={topRef}>
      {children(clientWidth, setClientWidth)}
    </div>
  );
};

export const SplitPaneRight = ({ children, ...props }) => {
  return (
    <div {...props} className="split-pane-right ">
      {children}
    </div>
  );
};

export default SplitPane;
