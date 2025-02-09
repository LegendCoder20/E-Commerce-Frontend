import axios from "axios";

const API_URL = "https://e-commerce-clicknshop-backend.onrender.com/api";

const getAllUsers = async () => {
  try {
    const response = await axios.post(`${API_URL}/users`, {password: "wizard"});

    return response.data.allUsers;
  } catch (err) {
    console.log("Some Error Occured while Fetching All Users", err);
  }
};

const getAllSellers = async () => {
  try {
    const response = await axios.post(`${API_URL}/sellers`, {
      password: "wizard",
    });

    return response.data.allSellers;
  } catch (err) {
    console.log("Some Error Occured while Fetching All Sellers", err);
  }
};

const getAllProducts = async () => {
  try {
    const response = await axios.post(`${API_URL}/products`, {
      password: "wizard",
    });

    return response.data.allProducts;
  } catch (err) {
    console.log("Some Error Occured while Fetching All Products", err);
  }
};

const adminService = {
  getAllUsers,
  getAllSellers,
  getAllProducts,
};

export default adminService;
