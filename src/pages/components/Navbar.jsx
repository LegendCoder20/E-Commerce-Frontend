import React, {useState, useEffect} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

/////////////////////////////
import HeaderTitle from "../small components/HeaderTitle";
import WebsiteLogo from "../../../public/Website Navbar Logo.jpg";
import {getUser, getCart, logoutUser} from "../../features/Users/userSlice";
import {getSeller, logoutSeller} from "../../features/Sellers/sellerSlice";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartProductLength, setCartProductLength] = useState(0); // state to track cart length
  const nav = useNavigate();

  const dispatch = useDispatch();

  const {user, cart, isLoading, isError, message} = useSelector(
    (state) => state.user
  );
  const {seller} = useSelector((state) => state.seller);

  const location = useLocation();
  const sellerRoutes = ["/sellerDashboard", "/addProduct", "/updateProduct"];
  const userRoutes = [
    "/",
    "/productDetails",
    "/userCart",
    "/aboutme",
    "/contactme",
  ];

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getUser());
      await dispatch(getSeller());

      if (!sellerRoutes.includes(location.pathname)) {
        await dispatch(getCart());
      }
    };

    fetchData();
  }, [dispatch, location]);

  useEffect(() => {
    const userWelcome = sessionStorage.getItem("userWelcome");
    const sellerWelcome = sessionStorage.getItem("sellerWelcome");

    if (user?.name && !userWelcome && userRoutes.includes(location.pathname)) {
      toast.info(`Welcome, ${user.name}!`, {
        position: "top-right",
        theme: "colored",
        style: {marginTop: "70px"},
      });
      sessionStorage.setItem("userWelcome", "true");
    }

    if (
      seller?.fullName &&
      !sellerWelcome &&
      sellerRoutes.includes(location.pathname)
    ) {
      toast.info(`Welcome, ${seller.fullName}!`, {
        position: "top-right",
        theme: "colored",
        style: {marginTop: "70px"},
      });
      sessionStorage.setItem("sellerWelcome", "true");
    }
  }, [user, seller, location.pathname]);

  useEffect(() => {
    if (!cart || !Array.isArray(cart)) return;

    const productLength = cart.reduce(
      (total, cartItem) => total + (cartItem?.products?.length || 0),
      0
    );

    setCartProductLength(productLength);
  }, [cart]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logOut = () => {
    if (userRoutes.includes(location.pathname)) {
      dispatch(logoutUser());

      window.location.reload();
    } else if (sellerRoutes.includes(location.pathname)) {
      dispatch(logoutSeller())
        .unwrap()
        .then(() => {
          dispatch(reset());
          window.location.href = "/";
        });
    }
  };

  return (
    <React.Fragment>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={WebsiteLogo}
              className="lg:h-12 md:h-12 h-11 sm:h-12"
              alt="ClickNShop logo"
            />
          </Link>
          <div className="flex items-center md:order-2 ">
            {/* Profile Dropdown */}
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 mr-2"
              onClick={toggleDropdown}
            >
              <span className="sr-only ">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://media.istockphoto.com/id/1327592389/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=kl9_IgA2ixssEdoXGJW7vuBh6lzL_RvYWgWB20TdzCA="
                alt="user photo"
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700 z-20 mt-72">
                <div className="text-base list-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul>
                    {/* Put  user.name instead of user*/}
                    {user.name ? (
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        <span className="block text-sm text-gray-900 dark:text-white text-center">
                          User - {user.name ? user.name : "Guest"}
                        </span>
                        <span className="block text-sm text-gray-500 truncate dark:text-gray-400 text-center">
                          {user.email}
                        </span>
                      </Link>
                    ) : (
                      <ul>
                        <Link to="/loginUser">
                          <span className="block text-gray-900 dark:text-white text-center  px-4 py-3 text-sm list-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600    hover:bg-gray-100 dark:hover:bg-gray-600  dark:hover:text-white">
                            Login as A User
                          </span>
                        </Link>
                      </ul>
                    )}
                  </ul>
                  <ul>
                    {seller ? (
                      <Link
                        to="/sellerDashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-whit"
                      >
                        <span className="block text-sm text-gray-900 dark:text-white text-center">
                          Seller - {seller.fullName}
                        </span>
                        <span className="block text-sm text-gray-500 truncate dark:text-gray-400 text-center">
                          {seller.businessEmail}
                        </span>
                      </Link>
                    ) : (
                      <ul>
                        <Link to="/loginSeller">
                          <span className="block text-gray-900 dark:text-white text-center px-4 py-3 text-sm list-none divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Login as A Seller
                          </span>
                        </Link>
                      </ul>
                    )}
                  </ul>

                  <ul className="py-2">
                    {/* Put  user.name instead of user*/}
                    {user.name && (
                      <li>
                        <Link
                          to="/usercart"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Cart {cartProductLength}
                        </Link>
                      </li>
                    )}

                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/"
                        onClick={logOut}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 17 14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="relative block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-teal-300 md:text-lg md:dark:hover:text-teal-500 after:content-[''] after:block after:h-1 after:bg-teal-400  after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutme"
                  className="relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-teal-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:dark:text-teal-300 md:text-lg after:content-[''] after:block after:h-1 after:bg-teal-400 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contactme"
                  className="relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-teal-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:dark:text-teal-300 md:text-lg after:content-[''] after:block after:h-1 after:bg-teal-400 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-teal-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:dark:text-teal-300 md:text-lg after:content-[''] after:block after:h-1 after:bg-teal-400 after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <HeaderTitle />
    </React.Fragment>
  );
}

export default Navbar;
