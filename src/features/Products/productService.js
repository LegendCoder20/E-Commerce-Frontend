import axios from "axios";

const API_URL = "http://localhost:5000/api/users/products/";

const getProducts = async () => {
  const response = await axios.get(API_URL);
  console.log(response.data.products);

  return response.data.products;
};

const getProductDetails = async (id) => {
  //   const response = await axios.get(`${API_URL}/product/${id}`);
  //   return response.data.product;
};

const productService = {getProducts, getProductDetails};

export default productService;
