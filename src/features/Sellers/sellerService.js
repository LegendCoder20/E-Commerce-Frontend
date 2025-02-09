import axios from "axios";

const API_URL = "https://e-commerce-clicknshop-backend.onrender.com/api/seller";
const sellerAPI_URL =
  "https://e-commerce-clicknshop-backend.onrender.com/api/sellers/products";

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

//🟨LOGOUT SELLER🟨//
const logoutSeller = async () => {
  localStorage.removeItem("Seller");
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

//🟨CREATE SELLER PRODUCT🟨//
const createProduct = async (productData, token) => {
  const response = await axios.post(`${sellerAPI_URL}/create`, productData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.products || response.data.product;
};

//🟨UPDATE SELLER PRODUCT🟨//
const updateProduct = async (productData, id, token) => {
  const response = await axios.put(
    `${sellerAPI_URL}/update/${id}`,
    productData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.product;
};

//🟨DELETE SELLER PRODUCT🟨//
const deleteProduct = async (id, token) => {
  const response = await axios.delete(`${sellerAPI_URL}/${id}`, {
    headers: {Authorization: `Bearer ${token}`},
  });

  return response.data.products;
};

const sellerService = {
  register,
  login,
  logoutSeller,
  getSeller,
  getAllSellerProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
export default sellerService;
