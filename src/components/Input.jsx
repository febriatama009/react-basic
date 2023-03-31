import React, { useRef, useEffect } from "react";

const Input = ({ isFocused = false, type = "text", ...props }) => {
  //agar tidak mengulangi state yang sama terus menerus
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <input
        {...props}
        className="transition duration-300 w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg my-1"
        type={type}
        ref={inputRef}
      />
    </>
  );
};

export default Input;
