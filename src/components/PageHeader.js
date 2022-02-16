import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="h-20 bg-black flex justify-center items-center lg:h-40">
      <h1 className="text-4xl text-white font-500 lg:font-bold">{title}</h1>
    </div>
  );
};

export default PageHeader;
