import axios from "axios";

const API_URL = "http://localhost:5000/api/seller";
const sellerAPI_URL = "http://localhost:5000/api/sellers/products";

//🟨REGISTER SELLER FEATURE🟨//
const register = async (sellerData) => {
  const response = await axios.post(`${API_URL}/register`, sellerData);
  if (response.data) {
    localStorage.setItem("Seller", response.data.token);
  }
  return response.data;
};

//🟨LOGIN USER FEATURE🟨//
const login = async (sellerData) => {
  const response = await axios.post(`${API_URL}/login`, sellerData);
  if (response.data) {
    localStorage.setItem("Seller", response.data.token);
  }
  return response.data;
};

//🟨GET SELLER PRODUCTS🟨//
const getSeller = async () => {
  const token = localStorage.getItem("Seller");
  if (token) {
    const response = await axios.get(`${API_URL}/getseller`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.seller;
  }
};

//🟨GET SELLER PRODUCTS🟨//
const getAllSellerProducts = async (token) => {
  const response = await axios.get(`${sellerAPI_URL}/auth/products`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.products;
};

const createProduct = async (productData, token) => {
  try {
    const response = await axios.post(`${sellerAPI_URL}/create`, productData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data); // Log the response to check what you're getting

    return response.data.product || response.data.products; // Adjust depending on the API response structure
  } catch (error) {
    console.error("Error creating product:", error.response || error.message);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};

const sellerService = {
  register,
  login,
  getSeller,
  getAllSellerProducts,
  createProduct,
};
export default sellerService;
