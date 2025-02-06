import axios from "axios";

const API_URL = "http://localhost:5000/api/users/products";

//🟨GET ALL PRODUCTS🟨//
const getProducts = async (page, limit = 4) => {
  const response = await axios.get(`${API_URL}/`, {
    params: {
      page: page,
      limit: limit,
    },
  });

  return response.data;
};

//🟨GET ALL PRODUCT DETAILS🟨//
const getProductDetails = async (id) => {
  const response = await axios.get(`${API_URL}/product/${id}`);
  return response.data.product;
};

const productService = {getProducts, getProductDetails};

export default productService;
