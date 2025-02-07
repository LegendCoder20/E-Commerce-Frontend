import React, {useState, useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";
/////////////////////////////////////////////
import Cart from "./Cart";
import {getCart} from "../../features/Users/userSlice";

function CartComponent() {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const {cart, isLoading, isError, message} = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    const fetchTotalPrice = async () => {
      const cartData = await dispatch(getCart());
      const cartDataPrice = cartData.payload[0].products.map((product) => {
        return {
          price: product.product_id.price * product.quantity,
        };
      });

      const total = cartDataPrice.reduce(
        (acc, product) => acc + product.price,
        0
      );

      setTotal(total);
    };

    fetchTotalPrice();
  }, []);

  const memoizedCartItems = useMemo(() => {
    if (Array.isArray(cart)) {
      return cart.flatMap((cartItems) =>
        cartItems.products.map((product) =>
          product.product_id ? (
            <Cart key={product.product_id._id} product={product} />
          ) : null
        )
      );
    }
  }, [cart]);

  const cartProductLength = Array.isArray(cart)
    ? cart.reduce((acc, cartItems) => acc + cartItems.products.length, 0)
    : 0;

  const token = localStorage.getItem("User");

  const checkout = async (amount) => {
    const {
      data: {order},
    } = await axios.post(
      "http://localhost:5000/api/checkout",

      {amount},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const {
      data: {key},
    } = await axios.get("http://localhost:5000/api/getKey");

    const options = {
      key: key,
      amount: amount,
      currency: "INR",
      name: "ClickNShop",
      description: "Your Order from ClickNShop",
      image:
        "https://img.atom.com/story_images/visual_images/1700817213-ClicknShop.png?class=show",
      order_id: order.id,
      callback_url: "http://localhost:5000/api/verification",
      prefill: {
        name: "Aryan Manjarekar",
        email: "aryan.manjarekar.22@gmail.com",
        contact: "7718070610",
      },
      notes: {
        address: "ClickNShop Corporate Office",
      },
      theme: {
        color: "#282c34",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-black sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          {/* Cart Items */}
          <div className="w-full lg:max-w-2xl xl:max-w-4xl lg:flex-col">
            {/* {cart.length > 0 ? memoizedCartItems : <p>Loading</p>} */}
            {cartProductLength > 0 ? (
              memoizedCartItems
            ) : (
              <p>Your Cart is Empty </p>
            )}
          </div>

          {/* Order Summary */}
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <p className="text-xl font-semibold text-gray-900">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ₹{total}
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                  <dt className="text-base font-bold text-gray-900">Total</dt>
                  <dd className="text-base font-bold text-gray-900">
                    ₹{total}
                  </dd>
                </dl>
              </div>

              <button
                onClick={() => {
                  checkout(total);
                }}
                className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Proceed to Checkout
              </button>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-center text-gray-500">
                  or
                </span>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartComponent;
