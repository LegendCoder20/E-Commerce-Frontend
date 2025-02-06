import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  products: [],
  product: {},
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
  totalPages: 1,
};

// 🟨GET PRODUCTS🟨//
export const getAllProducts = createAsyncThunk(
  "/products/all",
  async (page, thunkAPI) => {
    try {
      const data = await productService.getProducts(page);
      return data;
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An Error Occured in Getting All Products";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// 🟨GET PRODUCT DETAILS🟨//
export const getProductDetails = createAsyncThunk(
  "/productDetails",
  async (id, thunkAPI) => {
    try {
      return await productService.getProductDetails(id);
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An Error Occured in Getting Product Details";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//// REDUX ////
const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action, field) => {
  state.isLoading = false;
  state.isSuccess = true;
  if (field === "products") {
    state[field] = action.payload.products;
    state.totalPages = action.payload.totalPages;
  } else {
    state[field] = action.payload;
  }
};

const handleRejected = (state, action, field) => {
  state.isLoading = false;
  state.isError = true;
  if (field) {
    state[field] = Array.isArray(state[field]) ? [] : null;
  }
  state.message = action.payload;
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    const asyncActions = [
      {action: getAllProducts, field: "products"},
      {action: getProductDetails, field: "product"},
    ];

    asyncActions.forEach(({action, field}) => {
      builder
        .addCase(action.pending, handlePending)
        .addCase(action.fulfilled, (state, action) => {
          handleFulfilled(state, action, field);
        })
        .addCase(action.rejected, (state, action) => {
          handleRejected(state, action, field);
        });
    });
  },
});

export const {reset} = productsSlice.actions;
export default productsSlice.reducer;
