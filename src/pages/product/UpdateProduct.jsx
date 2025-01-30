import React, {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

//////////////////////////////////////////
import WebsiteMainLogo from "../../../public/Website Main Logo.png";
import {getProductDetails} from "../../features/products/productSlice";
import {updateProduct} from "../../features/Sellers/sellerSlice";

function UpdateProduct() {
  const nav = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch();

  const [productFormData, setProductFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
    description: "",
  });

  const {product, isLoading, isSuccess, isError} = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setProductFormData({
        name: product.name || "",
        price: product.price || "",
        quantity: product.quantity || "",
        category: product.category || "",
        description: product.description || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setProductFormData({...productFormData, [e.target.name]: e.target.value});
  };

  const update = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productData = {
      name: formData.get("name"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
      category: formData.get("category"),
      description: formData.get("description"),
    };

    dispatch(updateProduct({productData, id: product._id}));

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
        <div className="shadow-2xl hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)] rounded-xl sm:w-4/5 sm:max-w-4xl sm:flex  items-stretch transform transition-transform duration-300 ease-in-out hover:scale-105 sm:ml-0 sm:mr-0 ml-6 mr-6 sm:gap-0  sm:mt-1 mt-10">
          {/* Logo Section */}
          <div className="sm:w-1/2 flex justify-center items-center flex-col bg-white bg-opacity-40 backdrop-blur-md sm:rounded-r-sm rounded-xl text-center  sm:mb-0 mb-8 ">
            <img
              src={product.image && product.image.url}
              alt={product.name}
              className="sm:h-72 sm:w-auto h-20 sm:block hidden "
            />
            <Link to="/">
              <img
                src={WebsiteMainLogo}
                alt=""
                className="h-20 w-96  sm:mb-0  sm:h-14 sm:w-72 sm:mt-6 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-x-12 hover:rotate-y-12 hover:shadow-2xl "
              />
            </Link>
          </div>

          {/* Form Section */}
          <div className="sm:w-1/2 sm:p-8 p-8 flex flex-col justify-center bg-white sm:rounded-l-sm rounded-xl">
            <h2 className="text-center text-2xl font-bold text-black mb-6 rounded-lg pt-1 pb-2">
              Update Product
            </h2>
            <form method="POST" className="space-y-4 " onSubmit={update}>
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
                  value={productFormData.name}
                  onChange={handleChange}
                  className="rounded-lg bg-gray-50 border text-gray-900 text-sm w-full p-2.5"
                  autoComplete="name"
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
                  value={productFormData.price}
                  onChange={handleChange}
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
                  value={productFormData.quantity}
                  onChange={handleChange}
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
                  value={productFormData.category}
                  onChange={handleChange}
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
                  value={productFormData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold py-2"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UpdateProduct;
