import axios from "axios";

const API_URL = "http://localhost:5000/api/seller";

//🟨REGISTER SELLER FEATURE🟨//
const register = async (sellerData) => {
  const response = await axios.post(`${API_URL}/register`, sellerData);
  if (response.data) {
    localStorage.setItem("Seller", JSON.stringify(response.data.token));
  }
  return response.data;
};

//🟨LOGIN USER FEATURE🟨//
const login = async (sellerData) => {
  const response = await axios.post(`${API_URL}/login`, sellerData);
  if (response.data) {
    localStorage.setItem("Seller", JSON.stringify(response.data.token));
  }
  return response.data;
};

const sellerService = {register, login};
export default sellerService;
