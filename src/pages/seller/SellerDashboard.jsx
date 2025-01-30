import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

////////////////////////////////////////
import {getAllSellerProducts} from "../../features/Sellers/sellerSlice";
import SellerCard from "./SellerCard";

function SellerDashboard() {
  const dispatch = useDispatch();
  const {products, isLoading, isError, message} = useSelector(
    (state) => state.seller
  );

  useEffect(() => {
    const token = localStorage.getItem("Seller");
    if (token && !products.length) {
      dispatch(getAllSellerProducts(token));
    }
  }, [dispatch, products.length]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Add Recipe Button */}
      <div className="add-recipe-btn text-center pt-3 bg-lightest-grey">
        <Link to="/addProduct">
          <button
            type="button"
            className="focus:outline-none text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 transition-all duration-300"
          >
            Add Recipe
          </button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 pl-4 ">
        <div className="flex-1 flex items-center space-x-2">
          <h5>
            <span className="text-gray-500">Total Products:</span>
            <span className="text-black"> {products.length}</span>
          </h5>
        </div>
      </div>
      {/* Table */}
      <section className="bg-gray-50 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-2xl px-4 lg:px-12  ">
          <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400 ">
                  <tr>
                    <th scope="col" className="p-4">
                      Product
                    </th>
                    <th scope="col" className="p-4">
                      Category
                    </th>
                    <th scope="col" className="p-4">
                      Ratings
                    </th>
                    <th scope="col" className="p-4">
                      Sales
                    </th>
                    <th scope="col" className="p-4">
                      Quantity
                    </th>
                  </tr>
                </thead>
                {products.length > 0 ? (
                  products.map((product) => (
                    <SellerCard key={product._id} product={product} />
                  ))
                ) : (
                  <p>No Products Available</p>
                )}
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SellerDashboard;
