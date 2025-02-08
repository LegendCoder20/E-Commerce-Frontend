import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/Users/userSlice";
import sellerReducer from "../features/Sellers/sellerSlice";
import productReducer from "../features/Products/productSlice";
import adminReducer from "../features/Admin/adminSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    products: productReducer,
    admin: adminReducer,
  },
});
