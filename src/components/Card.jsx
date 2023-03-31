import React from "react";

const Card = ({ children }) => {
  return (
    <div className="overflow-hidden bg-white shadow-md rounded-md">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <div className="p-4 border-b">
      <h1 className="font-bold text-2xl ">{children}</h1>
    </div>
  );
};

const Body = ({ children }) => {
  return <div className="p-4 border-b ">{children}</div>;
};

const Footer = ({ children }) => {
  return <div className="px-4 py-1">{children}</div>;
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
