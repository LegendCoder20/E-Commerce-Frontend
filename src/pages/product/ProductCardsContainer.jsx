import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

///////////////////////////////////////
import {getAllProducts} from "../../features/products/productSlice";
import ProductCard from "./ProductCard";

const ProductCardsContainer = () => {
  const dispatch = useDispatch();
  const {products, isLoading, isError, message} = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>; // Make a Component of Skeleton Loading and Put it inside it
  // if (isError) return <div>Error: {message}</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 place-items-center min-h-screen">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p>No Products Available</p>
      )}
    </div>
  );
};

export default ProductCardsContainer;
