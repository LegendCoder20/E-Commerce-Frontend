import React from "react";
import {Link} from "react-router-dom";

////////////////////////

function Cart() {
  return (
    <>
      <section class="bg-white py-8 antialiased md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 class="text-xl font-semibold text-black sm:text-2xl">
            Shopping Cart
          </h2>

          <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div class="space-y-6">
                <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                  <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a href="#" class="shrink-0 md:order-1">
                      <img
                        class="h-20 w-20"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                        alt="imac image"
                      />
                    </a>

                    <div class="flex items-center  justify-between md:order-3 md:justify-end">
                      <div class="flex items-center font-semibold flex-col">
                        <p>Quantity </p>
                        <p> 2</p>
                      </div>
                      <div class="text-end md:order-4 md:w-32">
                        <p class="text-base font-bold text-black">$1,499</p>
                      </div>
                    </div>

                    <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <a
                        href="#"
                        class="text-base font-medium text-black hover:underline"
                      >
                        PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple
                        M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU,
                        Keyboard layout INT
                      </a>

                      <div class="flex items-center gap-4">
                        <button
                          type="button"
                          class="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                        >
                          <svg
                            class="me-1.5 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
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

            <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p class="text-xl font-semibold text-gray-900">Order summary</p>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500">
                        Original price
                      </dt>
                      <dd class="text-base font-medium text-gray-900">
                        $7,592.00
                      </dd>
                    </dl>
                  </div>

                  <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt class="text-base font-bold text-gray-900">Total</dt>
                    <dd class="text-base font-bold text-gray-900">$8,191.00</dd>
                  </dl>
                </div>

                <a
                  href="#"
                  class="flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Proceed to Checkout
                </a>

                <div class="flex items-center justify-center gap-2">
                  <span class="text-sm font-normal text-center text-gray-500 ">
                    or
                  </span>
                  <Link
                    to="/"
                    title=""
                    class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
                  >
                    Continue Shopping
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
    </>
  );
}

export default Cart;
