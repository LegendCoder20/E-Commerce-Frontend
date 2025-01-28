import axios from "axios";

const API_URL = "http://localhost:5000/api/users/products";

//🟨GET ALL PRODUCTS🟨//
const getProducts = async () => {
  const response = await axios.get(`${API_URL}/`);
  return response.data.products;
};

//🟨GET ALL PRODUCT DETAILS🟨//
const getProductDetails = async (id) => {
  const response = await axios.get(`${API_URL}/product/${id}`);
  return response.data.product;
};

const productService = {getProducts, getProductDetails};

export default productService;
