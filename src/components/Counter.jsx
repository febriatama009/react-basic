import React, { useState } from "react";
import Button from "./Button";

export default function Counter({ initialValue }) {
  const [name, setName] = useState(initialValue);

  const handleClick = () => {
    setName((prevName) => prevName + 1);
  };

  return (
    <div>
      {name}
      <Button onClick={handleClick} className="bg-sky-600 text-white">
        Count +1
      </Button>
      <Button
        onClick={() => {
          handleClick();
          handleClick();
          handleClick();
        }}
        className="bg-sky-600 text-white"
      >
        Count +3
      </Button>
    </div>
  );
}
