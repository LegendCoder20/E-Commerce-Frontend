import React, {useState} from "react";
import {Dialog} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";

const ProductCard = React.memo(({product}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative group w-full max-w-xs mx-auto mb-4 ">
        {/* Product Image */}
        <Link to={`/productDetails/${product._id}`}>
          <img
            src={product.image && product.image.url}
            alt={product.name}
            className="w-full  object-cover rounded-lg sm:h-80 h-52 "
            loading="lazy"
          />
        </Link>

        {/* Hover Effect */}
        <div
          className="absolute inset-x-0 bottom-12 m-3 h-10 bg-gray-300 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer md:w-auto  sm:w-[14.5rem]"
          onClick={() => setOpen(true)}
        >
          <button className="text-black font-medium pointer-events-none w-auto ">
            Quick View
          </button>
        </div>

        {/* Product Name */}
        <div className="mt-1 text-center text-lg font-medium text-gray-900">
          {product.name}
        </div>

        {/* Product Price */}
        <div className="mt-0 text-center text-sm text-gray-600">
          <span className="font-bold">₹</span>
          {product.price}
        </div>
      </div>

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
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Product Details */}
            <div className="flex flex-col sm:flex-row h-auto sm:h-[30rem]">
              <img
                src={product.image && product.image.url}
                alt={product.name}
                className="w-full sm:max-w-sm object-contain rounded-lg bg-gray-100"
                loading="lazy"
              />
              <div className="mt-4 sm:mt-0 sm:ml-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {product.name}
                </h2>
                <p className="mt-2 text-lg text-gray-900">
                  {" "}
                  <span className="font-bold">₹</span>
                  {product.price}
                </p>
                <p className="mt-2 text-lg text-gray-900">
                  {product.seller && product.seller.fullName
                    ? product.seller.fullName
                    : "Seller not available"}
                </p>

                <p className="text-gray-600 mt-2">{product.category}</p>
                <p className="mt-4 text-sm sm:text-lg text-gray-700">
                  {product.description}
                </p>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
});

export default ProductCard;
