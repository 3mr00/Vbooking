import React from "react";

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 z-50 flex justify-center items-center">
      <div className="loader"></div>;
    </div>
  );
}

export default Loader;
