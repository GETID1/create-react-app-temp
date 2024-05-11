import React from "react";
import "./index.css";

const Dialog = ({ visible, onCancel, children }) => {
  const domRef = React.useRef(null);
  const timer = React.useRef(null);
 
  React.useEffect(() => {
    const dom = domRef.current;
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (!visible) {
        dom.style.top = "-999999px";
      }
    }, 300)
    return () => {
      clearTimeout(timer.current);
    }
  }, [visible]);
  React.useEffect(() => {
    const dom = domRef.current;
    if (dom) {
      if (visible) {
        dom.style.top = "0px"; 
        dom.style.opacity = 1;
      } else {
        dom.style.opacity = 0;
      }
    }
  }, [visible]);
  return (
    <div className="dialog-wrapper" ref={domRef}>
      <div
        className="mask"
        onClick={() => {
          onCancel?.();
        }}
      ></div>
      <div className="dialog-container">{children}</div>
    </div>
  );
};

export default Dialog;
