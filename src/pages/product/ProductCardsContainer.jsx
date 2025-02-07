import React, {useState, useEffect, lazy, Suspense, useMemo} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

///////////////////////////////////////
import {getAllProducts} from "../../features/products/productSlice";
const ProductCard = lazy(() => import("./ProductCard"));
import Loader from "../small components/Loader";

const ProductCardsContainer = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const hSearchInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };
  console.log("Search Input:", searchInput);

  const dispatch = useDispatch();
  const {products, totalPages, limit, isLoading, isError, message} =
    useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts(page));
    window.scrollTo(0, 0);
  }, [dispatch, page]);

  ///////////////////////////
  useEffect(() => {
    if (products.length > 0) {
      setItems(products.slice(0, limit));
    }
  }, []);

  const filteredProducts = searchInput
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : products;

  const fetchMoreData = () => {
    if (products.length < 20) {
      setItems((prevItems) => [
        ...prevItems,
        ...products.slice(prevItems.length, prevItems.length + 5),
      ]);
    }
  };

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length < limit}
        // loader={<h1>InfiniteScroll......</h1>}
        endMessage={<h1></h1>}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        refreshFunction={() => setPage(1)}
        pullDownToRefreshContent={
          <h3 className="text-center">&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 className="text-center">&#8593; Release to refresh</h3>
        }
      >
        {/*🟨 Search Bar 🟨*/}
        <div className="text-center h-18 text-5xl ">
          <div className="h-26 w-full  flex flex-wrap justify-between items-center p-4">
            {/* Pagination Buttons */}
            <ul className="flex -space-x-px text-base sm:h-10 justify-center mb-2 mt-6">
              <p className="flex self-end justify-start text-lg font-semibold mr-2  p-2">
                Pages
              </p>
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
            <div className="w-full sm:w-4/5 max-w-lg sm:mr-2">
              <input
                type="text"
                onChange={hSearchInput}
                placeholder={`Search for Product`}
                className="w-full sm:w-[450px] pl-10 sm:pl-16 h-10 text-lg sm:text-base border-2 border-gray-200 shadow-sm bg-white text-black rounded focus:outline-none bg-no-repeat bg-[url('https://www.nicepng.com/png/detail/5-55201_search-icon-png-grey.png')] bg-[length:20px] bg-[position:10px_center] sm:bg-[position:20px_center]"
              />
            </div>
          </div>
        </div>
        {/*🟨 Search Bar 🟨*/}

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 place-items-center sm:place-items-start min-h-screen ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Suspense
                key={product._id}
                fallback={
                  <div className="relative group w-full max-w-xs mx-auto mb-4 overflow-hidden">
                    {/* Product Image */}
                    <Link to="/">
                      <div className="w-full sm:h-80 h-52 bg-gray-300 rounded-lg p-0.5">
                        <img
                          src=""
                          alt=""
                          className="w-full object-cover block rounded-lg border-0"
                          loading="lazy"
                        />
                      </div>
                    </Link>

                    {/* Hover Effect */}
                    <div className="absolute inset-x-0 bottom-12 m-3 h-10 bg-gray-300 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer md:w-auto  sm:w-[14.5rem]">
                      <button className="text-black font-medium pointer-events-none w-auto "></button>
                    </div>

                    {/* Product Name */}
                    <div className="mt-2 text-center text-lg font-medium text-gray-300 bg-gray-300 rounded-md w-28   mx-auto">
                      .
                    </div>

                    {/* Product Price */}
                    <div className=" text-center text-sm mt-2 text-gray-300 bg-gray-300 rounded-md  w-20 mx-auto">
                      <span className="font-bold">.</span>.
                    </div>
                  </div>
                }
              >
                <ProductCard product={product} />
              </Suspense>
            ))
          ) : (
            <p>No Products Available</p>
          )}
        </div>
      </InfiniteScroll>
      {/* Pagination Buttons */}
      <ul className="flex -space-x-px text-base sm:h-10 justify-center mb-10">
        <p className="flex self-end justify-end text-lg font-semibold mr-2  p-2">
          Pages
        </p>

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
