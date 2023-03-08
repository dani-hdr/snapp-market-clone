import React from "react";
import Portal from "../utils/Portal";

const Overlay = ({ onClick }) => {
  return (
    <Portal>
      <div
        className="fixed z-10 w-full h-full top-0 left-0 bg-black opacity-50"
        onClick={onClick}
      ></div>
    </Portal>
  );
};

export default Overlay;
