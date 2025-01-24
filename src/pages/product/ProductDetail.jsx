import React, {useState} from "react";
import QuantityComponent from "../small components/QuantityComponent";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  return (
    <React.Fragment>
      <div className="bg-gray-100 min-h-screen py-4">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Slider */}
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://www.jiomart.com/images/product/original/rvincgw8kg/royar-traders-shirt-shirts-men-s-cotton-shirt-men-s-spread-collar-shirt-regular-fit-men-s-shirt-men-s-casual-shirt-men-s-formal-shirt-stylish-men-s-shirt-trendy-men-s-shirt-men-s-shirt-for-office-green-xxl-product-images-rvincgw8kg-0-202408011859.jpg?im=Resize=(1000,1000)"
                  alt="Product"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800">Product Name</h2>
              <p className="text-gray-600 mt-2">Category: Electronics</p>
              <div className="flex items-center mt-4">
                <span className="text-yellow-500 text-xl">★ ★ ★ ★ ☆</span>
                <span className="ml-2 text-gray-600">(120 reviews)</span>
              </div>
              <p className="text-gray-800 text-xl font-semibold mt-4">
                $299.99
              </p>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vitae consectetur nisi. Ut fermentum quam eget
                turpis convallis, sit amet aliquet tortor ultrices.
              </p>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductDetail;
