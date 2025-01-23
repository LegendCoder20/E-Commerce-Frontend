import {useState} from "react";
import {Dialog} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempora iure, sapiente voluptas laudantium sint libero corrupti qui molestiae unde fuga nobis dolore temporibus eos tenetur tempore quidem sit alias.",
  imageSrc:
    "https://tailwindui.com/plus/img/ecommerce-images/product-quick-preview-02-detail.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
};

export default function ProductCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      >
        Open Dialog
      </button>

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
        <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center mt-20 p-4 pt-44">
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

            {/* Product Content */}
            <div className="flex flex-col sm:flex-row h-auto sm:h-[30rem]">
              {/* Image */}
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full sm:max-w-sm object-contain rounded-lg bg-gray-100"
              />

              {/* Product Details */}
              <div className="mt-4 sm:mt-0 sm:ml-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {product.name}
                </h2>
                <p className="mt-2 text-lg text-gray-900">{product.price}</p>
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
}
