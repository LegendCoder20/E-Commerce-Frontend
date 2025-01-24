import React, {useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

//////////////////////////////////////////
import {login, reset} from "../../features/Users/userSlice";
import websiteLogo from "../../../public/Website Main Logo Transparent.png";
import WebsiteMainLogo from "../../../public/Website Main Logo.png";

function LoginUser() {
  const emailRef = useRef();

  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  const {email, password} = userFormData;
  const dispatch = useDispatch();
  const {user, isError, isSuccess, message} = useSelector(
    (state) => state.user
  );

  const onChange = (e) => {
    setUserFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    // emailRef.current.focus();

    if (isError && message) {
      toast.error(message);
    }
    if (isSuccess || user) {
      toast.success("Token Checked Automatically Loggin In  ");
    }

    dispatch(reset());
  }, [user, isError, message, isSuccess, dispatch]);

  const loginUser = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
    console.log("User Logged In Successfully");
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
        <div className="shadow-2xl hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)] rounded-xl sm:w-4/5 sm:max-w-4xl sm:flex  items-stretch transform transition-transform duration-300 ease-in-out hover:scale-105 sm:ml-0 sm:mr-0 ml-6 mr-6 sm:gap-0  ">
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
                className="h-20 w-96  sm:mb-0  sm:h-14 sm:w-72    sm:mt-2 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-x-12 hover:rotate-y-12 hover:shadow-2xl "
              />
            </Link>
          </div>

          {/* Form Section */}
          <div className="sm:w-1/2 sm:p-8 p-8 flex flex-col justify-center bg-white sm:rounded-l-sm rounded-xl">
            <h2 className="text-center text-2xl font-bold text-black mb-6 rounded-lg pt-1 pb-2">
              Log In into Existing Account
            </h2>
            <form method="POST" className="space-y-4" onSubmit={loginUser}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  // ref={emailRef}
                  className="rounded-lg bg-gray-50 border text-gray-900 text-sm w-full p-2.5"
                  autoComplete="email"
                  style={{textTransform: "lowercase"}}
                  onChange={onChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="rounded-lg bg-gray-50 border text-gray-900 text-sm w-full p-2.5"
                  onChange={onChange}
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold py-2"
                >
                  Login
                </button>
              </div>
            </form>
            <Link to="/registerUser">
              <p className="mt-10 text-center text-sm text-gray-500">
                New? Please Register here
              </p>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginUser;
