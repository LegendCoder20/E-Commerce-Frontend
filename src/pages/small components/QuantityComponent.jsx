import React, {useState} from "react";

function QuantityComponent({quantity, setQuantity}) {
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <React.Fragment>
      {/* Quantity */}
      <div className="product-count mt-6">
        <label htmlFor="quantity" className="block text-gray-700 font-medium">
          Quantity
        </label>
        <div className="flex items-center mt-2">
          <button
            onClick={handleDecrement}
            className="qtyminus w-10 h-10 bg-gray-800 text-white text-lg flex items-center justify-center rounded-l-md"
          >
            -
          </button>
          <input
            type="text"
            name="quantity"
            value={quantity}
            className="qty w-16 h-10 text-center border-t border-b border-gray-300 focus:outline-none"
            readOnly
          />
          <button
            onClick={handleIncrement}
            className="qtyplus w-10 h-10 bg-gray-800 text-white text-lg flex items-center justify-center rounded-r-md"
          >
            +
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(QuantityComponent);
