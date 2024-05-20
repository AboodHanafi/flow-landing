import React from "react";

const ButtonOutline = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-sm md:font-medium py-2 px-5 sm:px-8  text-white-500 bg-green-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-100  transition-all"
    >
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
