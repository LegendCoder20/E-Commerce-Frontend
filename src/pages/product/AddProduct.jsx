import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

//////////////////////////////////////////
import websiteLogo from "../../../public/Website Main Logo Transparent.png";
import WebsiteMainLogo from "../../../public/Website Main Logo.png";
import {createProduct} from "../../features/Sellers/sellerSlice";

function AddProduct() {
  const nav = useNavigate();

  const dispatch = useDispatch();
  const {product, isSuccess, isLoading, isError, seller} = useSelector(
    (state) => state.seller
  );

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
    }
    if (!seller) {
      nav("/loginSeller");
    }
  }, [seller]);

  const addProduct = (e) => {
    e.preventDefault();

    const productFormData = new FormData(e.target);
    const productData = {
      name: productFormData.get("name"),
      description: productFormData.get("description"),
      price: productFormData.get("price"),
      quantity: productFormData.get("quantity"),
      category: productFormData.get("category"),
      image: productFormData.get("image"),
    };

    dispatch(createProduct(productData));

    nav("/sellerDashboard");
  };

  return (
    <React.Fragment>
      <div
        className=" flex justify-center items-center  min-h-screen bg-gradient-to-r from-cyan-200 via-cyan-200 to-cyan-200 "
        style={{
          backgroundImage: `url('https://thumbs.dreamstime.com/b/smooth-sky-blue-color-paper-background-ai-generative-design-instagram-facebook-wall-painting-327195843.jpg')`,

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Centralized Box */}
        <div className="shadow-2xl hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)] rounded-xl sm:w-4/5 sm:max-w-4xl sm:flex  items-stretch transform transition-transform duration-300 ease-in-out hover:scale-105 sm:ml-0 sm:mr-0 ml-6 mr-6 sm:gap-0  sm:mt-10 mt-10">
          {/* Logo Section */}
          <div className="sm:w-1/2 flex justify-center items-center flex-col bg-white bg-opacity-40 backdrop-blur-md sm:rounded-r-sm rounded-xl text-center  sm:mb-0 mb-8 ">
            <img
              src={websiteLogo}
              alt="Website Logo"
              className="sm:h-60 sm:w-auto h-20 sm:block hidden "
            />
            <Link to="/">
              <img
                src={WebsiteMainLogo}
                alt=""
                className="h-20 w-96  sm:mb-0  sm:h-14 sm:w-72 sm:mt-2 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-x-12 hover:rotate-y-12 hover:shadow-2xl "
              />
            </Link>
          </div>

          {/* Form Section */}
          <div className="sm:w-1/2 sm:p-8 p-8 flex flex-col justify-center bg-white sm:rounded-l-sm rounded-xl">
            <h2 className="text-center text-2xl font-bold text-black mb-6 rounded-lg pt-1 pb-2">
              Add New Product
            </h2>
            <form method="POST" className="space-y-4 " onSubmit={addProduct}>
              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-black"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="productName"
                  //   value={fullName}
                  // ref={nameRef}
                  className="rounded-lg bg-gray-50 border text-gray-900 text-sm w-full p-2.5"
                  autoComplete="name"
                  //   onChange={onChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-black"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="rounded-lg bg-gray-50 border text-gray-900 text-sm w-full p-2.5"
                  //   onChange={onChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-black"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="rounded-lg bg-gray-50 border text-gray-900 text-sm w-full p-2.5"
                  //   onChange={onChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-black"
                >
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="rounded-lg bg-gray-50 border text-gray-900 text-sm w-full p-2.5"
                  //   onChange={onChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-black"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  rows="3"
                  className="rounded-lg bg-gray-50 border text-gray-900 text-sm w-full p-2.5 resize-none"
                  //   onChange={onChange}
                  required
                />
              </div>

              {/* Image Input */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-black"
                >
                  Upload File
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
                  id="file_input"
                  type="file"
                  name="image"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold py-2"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddProduct;
