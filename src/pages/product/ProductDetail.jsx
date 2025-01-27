import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

/////////////////////////////////////////////
import QuantityComponent from "../small components/QuantityComponent";
import {getProductDetails} from "../../features/products/productSlice";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const {id} = useParams();
  const dispatch = useDispatch();
  const {product, isLoading, isSuccess, isError, message} = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <div className="bg-gray-100 min-h-screen py-4 sm:mb-0 mb-4">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Slider */}
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.image && product.image.url}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2">
                <span className="font-medium">Category -</span>
                {product.category}
              </p>
              <div className="flex items-center mt-4">
                <span className="text-yellow-500 text-xl">★ ★ ★ ★ ☆</span>
                <span className="ml-2 text-gray-600">(120 reviews)</span>
              </div>
              <p className="text-gray-800 text-xl font-semibold mt-4">
                ₹{product.price}
              </p>
              <div className="text-gray-600 mt-4">
                <div className="font-medium">Description</div>
                {product.description}
              </div>

              {/* Quantity */}

              <QuantityComponent
                quantity={quantity}
                setQuantity={setQuantity}
              ></QuantityComponent>

              {/* Add to Cart */}
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                  Add to Cart
                </button>
                <p className="text-black mt-14 h-7 bg-orange-100 w-56 text-center text-lg font-medium rounded-md sm:mx-0 mx-auto">
                  Product in Stock - {product.quantity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductDetail;
