import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

////////////////////////////////////

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const checkPassword = async () => {
      const {value: password} = await Swal.fire({
        title: "Enter Admin Password",
        input: "password",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
      });

      if (password === import.meta.env.VITE_PASSWORD) {
        setIsAuthenticated(true);
      } else {
        Swal.fire("Access Denied", "Incorrect Password!");
        nav("/");
      }
    };

    checkPassword();
  }, []);

  if (!isAuthenticated) {
    return <h1 className="text-center mt-10 mb-10">🚫Access Denied!🚫</h1>;
  }

  return (
    <>
      <div className="w-auto h-12 font-semibold flex justify-around p-4 text-lg mb-2 ">
        <Link
          to="/allData/users"
          className="relative py-2 px-3 text-gray-600 rounded md:p-0 md:text-lg md:dark:hover:text-black 
        leading-[1.5] 
        after:content-[''] after:block after:h-[2px] after:bg-black 
        after:absolute after:bottom-[-18px] sm:after:bottom-[-10px] 
        after:left-2 sm:after:left-0  sm:after:w-full after:w-14
        after:scale-x-0 after:origin-left after:transition-transform 
        after:duration-300 hover:after:scale-x-100"
          state={{isAuthenticated}}
        >
          Users
        </Link>

        <Link
          to="/allData/sellers"
          className="relative py-2 px-3 text-gray-600 rounded md:p-0 md:text-lg md:dark:hover:text-black 
          leading-[1.5] 
          after:content-[''] after:block after:h-[2px] after:bg-black 
          after:absolute after:bottom-[-18px] sm:after:bottom-[-10px] 
          after:left-2 sm:after:left-0  sm:after:w-full after:w-16
          after:scale-x-0 after:origin-left after:transition-transform 
          after:duration-300 hover:after:scale-x-100"
          state={{isAuthenticated}}
        >
          Sellers
        </Link>
        <Link
          to="/allData/products"
          className="relative py-2 px-3 text-gray-600 rounded md:p-0 md:text-lg md:dark:hover:text-black 
          leading-[1.5] 
          after:content-[''] after:block after:h-[2px] after:bg-black 
          after:absolute after:bottom-[-18px] sm:after:bottom-[-10px] 
          after:left-2 sm:after:left-0  sm:after:w-full after:w-20
          after:scale-x-0 after:origin-left after:transition-transform 
          after:duration-300 hover:after:scale-x-100"
          state={{isAuthenticated}}
        >
          Products
        </Link>
      </div>
    </>
  );
}

export default AdminPage;
