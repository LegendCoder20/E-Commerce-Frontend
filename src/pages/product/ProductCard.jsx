import React, {useState} from "react";
import {Dialog} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";

const ProductCard = React.memo(({product}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative group w-full max-w-xs mx-auto mb-6  transition-transform duration-100 transform hover:scale-105 ">
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

            {/* Product Details Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image Section */}
              <div className="relative transform transition-transform duration-500 group perspective-[800px]">
                <div className="w-full sm:max-w-sm object-contain transform group-hover:rotate-x-[15deg] group-hover:-rotate-y-[10deg] group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                  <img
                    src={product.image?.url}
                    alt={product.name}
                    className="w-full h-auto object-cover rounded-lg bg-gray-100"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Product Info Section */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {product.name}
                </h2>
                <p className="mt-3 text-lg text-gray-900 mb-2 font-semibold">
                  <span className="font-bold">₹</span>
                  {product.price}
                </p>
                <p className="mt-2 text-base text-gray-900 inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-sm font-bold px-5 py-2 rounded-full mb-4 tracking-wider">
                  Seller - {product.seller?.fullName || "Seller not available"}
                </p>

                <p className="mt-1 text-base font-semibold py-1 mb-4">
                  Category - {product.category}
                </p>
                <p className="mt-2 text-xs sm:text-base text-gray-700">
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
