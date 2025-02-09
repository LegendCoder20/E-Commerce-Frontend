import axios from "axios";

const API_URL = "https://e-commerce-clicknshop-backend.onrender.com/api/user";
const CART_API_URL =
  "https://e-commerce-clicknshop-backend.onrender.com/api/users/cart";

//🟨REGISTER USER FEATURE🟨//

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data) {
    localStorage.setItem("User", response.data.token);
  }
  return response.data;
};

//🟨LOGIN USER FEATURE🟨//
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data) {
    localStorage.setItem("User", response.data.token);
  }
  return response.data;
};

//🟨GET USER FEATURE🟨//
const getUser = async () => {
  const token = localStorage.getItem("User");

  if (!token) return "Guest User";

  try {
    const response = await axios.get(`${API_URL}/getuser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return "Guest User";
  }
};

//🟨LOGOUT USER FEATURE🟨//
const logoutUser = async () => {
  localStorage.removeItem("User");
};

//// 🟩🟩 CART FEATURES 🟩🟩 ////

//🟨GET CART FEATURE🟨//
const getCart = async () => {
  const token = localStorage.getItem("User");

  if (token) {
    const response = await axios.get(`${CART_API_URL}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.cartProducts;
  }
};

//🟨ADD TO CART FEATURE🟨//
const addToCart = async (cartData) => {
  const token = localStorage.getItem("User");

  if (token) {
    const response = await axios.post(`${CART_API_URL}/add`, cartData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
};

//🟨DELETE PRODUCT FROM THE CART FEATURE🟨//
const deleteProduct = async (product_id) => {
  const token = localStorage.getItem("User");

  if (token) {
    const response = await axios.delete(
      `${CART_API_URL}/remove/${product_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.message;
  }
};

const userService = {
  register,
  login,
  logoutUser,
  getUser,
  getCart,
  addToCart,
  deleteProduct,
};

export default userService;
