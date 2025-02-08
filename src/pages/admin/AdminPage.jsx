import React from "react";
import {Link} from "react-router-dom";

////////////////////////////////////

function AdminPage() {
  return (
    <>
      <div class="w-auto h-12 font-semibold flex justify-around p-4 text-lg mb-2 ">
        <Link
          to="/allData/users"
          className="relative py-2 px-3 text-gray-600 bg-black rounded 
      md:bg-transparent md:text-gray-600 md:p-0  md:text-lg 
      md:dark:hover:text-black leading-[1.5]  
      after:content-[''] after:block after:h-[2px]  after:bg-black 
      after:absolute after:bottom-[-10px] 
      after:left-0 after:w-full 
      after:scale-x-0 after:origin-left after:transition-transform 
      after:duration-300 hover:after:scale-x-100"
        >
          Users
        </Link>
        <Link
          to="/allData/sellers"
          className="relative py-2 px-3 text-gray-600 bg-black rounded 
      md:bg-transparent md:text-gray-600 md:p-0  md:text-lg 
      md:dark:hover:text-black leading-[1.5]  
      after:content-[''] after:block after:h-[2px]  after:bg-black 
      after:absolute after:bottom-[-10px] 
      after:left-0 after:w-full 
      after:scale-x-0 after:origin-left after:transition-transform 
      after:duration-300 hover:after:scale-x-100"
        >
          Sellers
        </Link>
        <Link
          to="/allData/products"
          className="relative py-2 px-3 text-gray-600 bg-black rounded 
      md:bg-transparent md:text-gray-600 md:p-0  md:text-lg 
      md:dark:hover:text-black leading-[1.5]  
      after:content-[''] after:block after:h-[2px] after:bg-black 
      after:absolute after:bottom-[-10px] 
      after:left-0 after:w-full 
      after:scale-x-0 after:origin-left after:transition-transform 
      after:duration-300 hover:after:scale-x-100"
        >
          Products
        </Link>
      </div>
    </>
  );
}

export default AdminPage;
