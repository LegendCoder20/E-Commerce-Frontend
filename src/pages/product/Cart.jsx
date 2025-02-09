import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

////////////////////////
import {deleteProduct, reset} from "../../features/Users/userSlice";

const Cart = React.memo(({product}) => {
  const dispatch = useDispatch();
  const deleteCartProduct = async (e) => {
    e.preventDefault();
    await dispatch(deleteProduct(product.product_id._id));
    dispatch(reset());
    window.location.reload();
  };

  return (
    <>
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl ">
        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              <img
                className="h-20 w-20"
                src={product.product_id.image && product.product_id.image.url}
                alt={product.product_id.name}
              />

              <div className="flex items-center  justify-between md:order-3 md:justify-end">
                <div className="flex items-center font-semibold flex-col">
                  <p>Quantity </p>
                  <p>{product.quantity}</p>
                </div>
                <div className="text-center md:order-4 md:w-32">
                  <p className="font-semibold">Price</p>
                  <p className="text-base font-bold text-black">
                    ₹{product.product_id.price}
                  </p>
                </div>
                <div className="text-center md:order-4 md:w-16">
                  <p className="font-semibold">Total</p>
                  <p className="text-base font-bold text-black">
                    ₹{product.product_id.price * product.quantity}
                  </p>
                </div>
              </div>

              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <Link
                  to={`/productDetails/${product.product_id._id}`}
                  href="#"
                  className="text-base font-medium text-black hover:underline"
                >
                  {product.product_id.name}
                  <span className="px-2 ">-</span>
                  {product.product_id.description}
                </Link>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={deleteCartProduct}
                    className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                  >
                    <svg
                      className="me-1.5 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18 17.94 6M18 18 6.06 6"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Cart;
