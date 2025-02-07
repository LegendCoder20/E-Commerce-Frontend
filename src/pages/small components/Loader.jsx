import React from "react";

function Loader() {
  return (
    <>
      <div className=" flex items-center justify-center h-[80vh] ">
        <div className="relative w-14 h-14 flex flex-col items-center justify-center ">
          <span className="absolute w-14 h-14 border-8 border-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin"></span>
          <span className="absolute w-14 h-14 border-8 border-blue-500 border-l-transparent border-r-transparent rounded-full animate-[spin_2s_linear_infinite_reverse]"></span>
          <span className="absolute w-8 h-8 border-8 border-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin"></span>
          <span className="text-white font-bold mt-28">LOADING...</span>
        </div>
      </div>
    </>
  );
}

export default Loader;
