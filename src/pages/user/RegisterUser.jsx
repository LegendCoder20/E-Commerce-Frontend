import React, {useState} from "react";
import websiteLogo from "../../../public/Website Main Logo Transparent.png";
import {useSelector, useDispatch} from "react-redux";
import {register, reset} from "../../features/Users/userSlice";

function RegisterUser() {
  const [userFormData, setUserFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const {name, phone, email, password, cpassword} = userFormData;

  const dispatch = useDispatch();
  const {user, isSuccess, isError, message} = useSelector(
    (state) => state.user
  );

  const onChange = (e) => {
    setUserFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      console.log("Passwords Doesn't Match");
    } else {
      const userData = {
        name,
        phone,
        email,
        password: password,
      };

      dispatch(register(userData));
    }
  };

  return (
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
          <img src={websiteLogo} alt="Website Logo" className="h-96 w-auto" />
          <h1 className="text-4xl">
            <b>E-Commerce Store</b>
          </h1>
        </div>

        {/* Form Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center bg-white rounded-tr-xl rounded-br-xl ">
          <h2 className="text-center text-2xl font-bold text-black mb-6 rounded-lg pt-1 pb-2">
            Create New Account
          </h2>
          <form method="POST" className="space-y-4" onSubmit={registerUser}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-black"
              >
                Username
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                className="rounded-lg bg-gray-50 border text-gray-900 text-sm w-full p-2.5"
                placeholder="eg. Aryan Manjarekar"
                onChange={onChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-black"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="rounded-lg bg-gray-50 border text-gray-900 text-sm w-full p-2.5"
                onChange={onChange}
                required
              />
            </div>

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
              <label
                htmlFor="cpassword"
                className="block text-sm font-medium text-black"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
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
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
