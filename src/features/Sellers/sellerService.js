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

const sellerService = {register, login, getSeller, getAllSellerProducts};
export default sellerService;
