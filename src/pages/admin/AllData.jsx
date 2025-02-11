import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {Dialog} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";

/////////////////////////////////////
import {
  fetchAllUsers,
  fetchAllSellers,
  fetchAllProducts,
} from "../../features/Admin/adminSlice";
import AdminPage from "./AdminPage";

function AllData() {
  const {value} = useParams();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dispatch = useDispatch();
  const {allUsers, allSellers, allProducts} = useSelector(
    (state) => state.admin
  );

  const isAuthenticated = useSelector((state) => state.admin.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      if (value === "users") {
        dispatch(fetchAllUsers());
      } else if (value === "sellers") {
        dispatch(fetchAllSellers());
      } else if (value === "products") {
        dispatch(fetchAllProducts());
      }
    }
  }, [value, dispatch, isAuthenticated]);

  const field =
    value === "users"
      ? allUsers
      : value === "sellers"
      ? allSellers
      : value === "products"
      ? allProducts
      : [];

  return (
    <>
      {isAuthenticated ? (
        <AdminPage></AdminPage>
      ) : (
        <div className="mt-10 text-center">🚫Access Denied🚫</div>
      )}

      {/* Product Length  */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 pl-4 mb-1">
        <div className="flex-1 flex items-center space-x-2">
          <h5>
            <span className="text-gray-500 font-bold uppercase">
              Total {value} :
            </span>
            <span className="text-black ml-2 font-bold ">
              {value === "users"
                ? allUsers.length
                : value === "sellers"
                ? allSellers.length
                : value === "products"
                ? allProducts.length
                : 0}
            </span>
          </h5>
        </div>
      </div>

      {/* Top Row */}
      {isAuthenticated ? (
        <section className="bg-gray-50 p-3 sm:p-5 antialiased">
          <div className="mx-auto max-w-screen-2xl px-4 lg:px-12  ">
            <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400 ">
                    {value === "users" ? (
                      <tr>
                        <th scope="col" className="p-4">
                          Name
                        </th>

                        <th scope="col" className="p-4">
                          Email
                        </th>
                        <th scope="col" className="p-4">
                          Phone
                        </th>
                        <th scope="col" className="p-4">
                          Created At
                        </th>
                        <th scope="col" className="p-4">
                          Updated At
                        </th>
                      </tr>
                    ) : value === "sellers" ? (
                      <tr>
                        <th scope="col" className="p-4">
                          Name
                        </th>
                        <th scope="col" className="p-4">
                          Business Email
                        </th>
                        <th scope="col" className="p-4">
                          Phone
                        </th>
                        <th scope="col" className="p-4">
                          Shop Name
                        </th>
                        <th scope="col" className="p-4">
                          Created At
                        </th>
                        <th scope="col" className="p-4">
                          Updated At
                        </th>
                      </tr>
                    ) : value === "products" ? (
                      <tr>
                        <th scope="col" className="p-4">
                          Image
                        </th>
                        <th scope="col" className="p-4">
                          Product Name
                        </th>
                        <th scope="col" className="p-4">
                          Category
                        </th>
                        <th scope="col" className="p-4">
                          Price
                        </th>
                        <th scope="col" className="p-4">
                          Created At
                        </th>
                        <th scope="col" className="p-4">
                          Updated At
                        </th>
                        <th scope="col" className="p-4">
                          Seller
                        </th>
                      </tr>
                    ) : (
                      "Unknown"
                    )}
                  </thead>
                  {/* Top Row */}
                  {isAuthenticated && (
                    <>
                      {" "}
                      {/*🟨 Product Length 🟨*/}
                      {field.length > 0 ? (
                        <>
                          {field.map((item) => (
                            <>
                              <tbody>
                                <tr className="border-b dark:border-gray-300 hover:bg-white ">
                                  <th
                                    scope="row"
                                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap  "
                                  >
                                    {value === "products" ? (
                                      <div className="flex items-center mr-3">
                                        <img
                                          src={item.image && item.image.url}
                                          alt="Product image"
                                          className="h-8 sm:w-14 mr-3"
                                          loading="lazy"
                                        />
                                      </div>
                                    ) : (
                                      <>
                                        <th
                                          scope="row"
                                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap  "
                                        >
                                          {value === "users"
                                            ? item.name
                                            : value === "sellers"
                                            ? item.fullName
                                            : value === "products"
                                            ? item.name
                                            : "Unknown"}
                                        </th>
                                      </>
                                    )}
                                  </th>
                                  {value === "users" ? (
                                    <>
                                      <td className="px-4 py-3">
                                        <span className="  font-medium px-2 py-0.5 rounded dark:bg-primary-900 text-black ">
                                          <a href={`mailto:${item.email}`}>
                                            {item.email}
                                          </a>
                                        </span>
                                      </td>
                                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                                        <div className="flex items-center">
                                          <a
                                            href={`https://wa.me/${item.phone}`}
                                          >
                                            {item.phone}
                                          </a>
                                        </div>
                                      </td>
                                      <td className="px-4 py-3 text-black">
                                        {item.createdAt.slice(0, 10)}
                                      </td>
                                      <td className="px-4 py-3 text-black">
                                        {item.updatedAt.slice(0, 10)}
                                      </td>
                                    </>
                                  ) : value === "sellers" ? (
                                    <>
                                      <td className="px-4 py-3">
                                        <span className="  font-medium px-2 py-0.5 rounded dark:bg-primary-900 text-black ">
                                          <a
                                            href={`mailto:${item.businessEmail}`}
                                          >
                                            {item.businessEmail}
                                          </a>
                                        </span>
                                      </td>
                                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                                        <div className="flex items-center">
                                          <a
                                            href={`https://wa.me/${item.phone}`}
                                          >
                                            {item.phone}
                                          </a>
                                        </div>
                                      </td>
                                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                                        <div className="flex items-center">
                                          {item.shopName}
                                        </div>
                                      </td>
                                      <td className="px-4 py-3 text-black">
                                        {item.createdAt.slice(0, 10)}
                                      </td>
                                      <td className="px-4 py-3 text-black">
                                        {item.updatedAt.slice(0, 10)}
                                      </td>
                                    </>
                                  ) : value === "products" ? (
                                    <>
                                      <td className="px-4 py-3">
                                        <span className="  font-medium px-2 py-0.5 rounded dark:bg-primary-900 text-black text-center ">
                                          {item.name}
                                        </span>
                                      </td>
                                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                                        <div className="flex items-center">
                                          {item.category}
                                        </div>
                                      </td>
                                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">
                                        <div className="flex items-center">
                                          {item.price}
                                        </div>
                                      </td>
                                      <td className="px-4 py-3 text-black">
                                        {item.createdAt.slice(0, 10)}
                                      </td>
                                      <td className="px-4 py-3 text-black">
                                        {item.updatedAt.slice(0, 10)}
                                      </td>
                                      <td className="px-4 py-3 text-black">
                                        Seller Name{" "}
                                      </td>
                                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="flex items-center space-x-4">
                                          <button
                                            type="button"
                                            data-drawer-target="drawer-read-product-advanced"
                                            data-drawer-show="drawer-read-product-advanced"
                                            aria-controls="drawer-read-product-advanced"
                                            className="py-1 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200  dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-700"
                                            onClick={() => {
                                              setSelectedItem(item);
                                              setOpen(true);
                                            }}
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                              fill="currentColor"
                                              className="w-4 h-4 mr-2 -ml-0.5"
                                            >
                                              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                              <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                              />
                                            </svg>
                                            Preview
                                          </button>
                                        </div>
                                      </td>
                                    </>
                                  ) : null}
                                </tr>
                              </tbody>
                              {/* Dialog */}
                              <Dialog
                                open={open}
                                onClose={() => setOpen(false)}
                                className="relative z-10"
                              >
                                {/* Backdrop */}
                                <div
                                  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                                  aria-hidden="true"
                                />

                                {/* Panel */}
                                <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center lg:mt-2 mt-20 p-4 lg:pt-14 pt-44">
                                  <Dialog.Panel className="relative w-full max-w-xs sm:max-w-2xl transform overflow-hidden rounded-lg bg-white p-4 sm:p-6 text-left shadow-xl transition-all">
                                    {/* Close Button */}
                                    <button
                                      type="button"
                                      onClick={() => setOpen(false)}
                                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                                    >
                                      <span className="sr-only">Close</span>
                                      <XMarkIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                      />
                                    </button>

                                    {/* Product Details Layout */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                                      {/* Image Section */}
                                      <div className="relative transform transition-transform duration-500 group perspective-[800px]">
                                        <div className="w-full sm:max-w-sm object-contain transform group-hover:rotate-x-[15deg] group-hover:-rotate-y-[10deg] group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                                          <img
                                            src={
                                              selectedItem?.image &&
                                              selectedItem?.image.url
                                            }
                                            alt={selectedItem?.name}
                                            className="w-full h-auto object-cover rounded-lg bg-gray-100"
                                            loading="lazy"
                                          />
                                        </div>
                                      </div>

                                      {/* Product Info Section */}
                                      <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                          {selectedItem?.name}
                                        </h2>
                                        <p className="mt-3 text-lg text-gray-900 mb-2 font-semibold">
                                          <span className="font-bold">₹</span>
                                          {selectedItem?.price}
                                        </p>
                                        {/* <p className="mt-2 text-base text-gray-900 inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-sm font-bold px-5 py-2 rounded-full mb-4 tracking-wider">
                                          Seller -{" "}
                                          {selectedItem.seller?.fullName ||
                                            "Seller not available"}
                                        </p> */}

                                        <p className="mt-1 text-base font-semibold py-1 mb-4">
                                          Category - {selectedItem?.category}
                                        </p>
                                        <p className="mt-1 text-base font-semibold py-1 mb-4">
                                          Quantity - {selectedItem?.quantity}
                                        </p>
                                        <p className="mt-2 text-xs sm:text-base text-gray-700">
                                          {selectedItem?.description}
                                        </p>
                                      </div>
                                    </div>
                                  </Dialog.Panel>
                                </div>
                              </Dialog>
                            </>
                          ))}
                        </>
                      ) : (
                        <>
                          <p>{value} Not Available</p>
                        </>
                      )}
                    </>
                  )}
                </table>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="mt-10 text-center">🚫Access Denied🚫</div>
      )}
    </>
  );
}

export default AllData;
