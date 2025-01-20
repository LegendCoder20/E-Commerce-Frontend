import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

//////////////////////////////////////////
import {login, reset} from "../../features/Users/userSlice";
import websiteLogo from "../../../public/Website Main Logo Transparent.png";

function LoginUser() {
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
        className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-200 via-cyan-200 to-cyan-200"
        style={{
          backgroundImage: `url('https://thumbs.dreamstime.com/b/smooth-sky-blue-color-paper-background-ai-generative-design-instagram-facebook-wall-painting-327195843.jpg')`,

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Centralized Box */}
        <div className="shadow-2xl hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)] rounded-xl w-4/5 max-w-4xl flex items-stretch transform transition-transform duration-300 ease-in-out hover:scale-105">
          {/* Logo Section */}
          <div className="w-1/2 flex justify-center items-center flex-col bg-white bg-opacity-40 backdrop-blur-md rounded-tl-xl rounded-bl-xl">
            <img src={websiteLogo} alt="Website Logo" className="h-60 w-auto" />
            <h1 className="text-4xl">
              <b>E-Commerce Store</b>
            </h1>
          </div>

          {/* Form Section */}
          <div className="w-1/2 p-8 flex flex-col justify-center bg-white rounded-tr-xl rounded-br-xl ">
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
                  className="rounded-lg bg-gray-50 border text-gray-900 text-sm w-full p-2.5"
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
