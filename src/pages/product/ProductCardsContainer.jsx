import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

///////////////////////////////////////
import {getAllProducts} from "../../features/products/productSlice";
import ProductCard from "./ProductCard";

const ProductCardsContainer = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const {products, totalPages, isLoading, isError, message} = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getAllProducts(page));
    window.scrollTo(0, 0);
  }, [dispatch, page]);

  if (isLoading) return <div>Loading...</div>; // Make a Component of Skeleton Loading and Put it inside it
  // if (isError) return <div>Error: {message}</div>;

  return (
    <>
      {/* Pagination Buttons */}
      <ul class="flex -space-x-px text-base sm:h-10 justify-center mb-2 mt-6">
        {Array.from({length: totalPages}, (_, index) => (
          <button
            className={` w-10 ${
              page === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            } flex items-center justify-center px-4 sm:h-10 h-8 leading-tight`}
            key={index + 1}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </ul>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 place-items-center sm:place-items-start min-h-screen ">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No Products Available</p>
        )}
      </div>

      {/* Pagination Buttons */}
      <ul class="flex -space-x-px text-base sm:h-10 justify-center mb-10">
        {Array.from({length: totalPages}, (_, index) => (
          <button
            className={` w-10 ${
              page === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            } flex items-center justify-center px-4  sm:h-10 h-8 leading-tight`}
            key={index + 1}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </ul>
    </>
  );
};

export default ProductCardsContainer;
