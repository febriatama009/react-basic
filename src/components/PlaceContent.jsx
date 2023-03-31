import React from "react";

const PlaceContent = ({ children }) => {
  return (
    <div className="bg-black font-mono">
      <div className="bg-violet-900/20 antialiased min-h-screen flex items-center justify-center tracking-tight">
        <div className="max-w-4xl">{children}</div>
      </div>
    </div>
  );
};

export default PlaceContent;
