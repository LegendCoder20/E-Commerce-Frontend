import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import sellerService from "./sellerService";

const seller = localStorage.getItem("Seller");

const initialState = {
  seller: seller ? seller : null,
  products: [],
  product: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

// 🟨REGISTER SELLER FEATURE🟨//
export const register = createAsyncThunk(
  "/seller/register",
  async (sellerData, thunkAPI) => {
    try {
      return await sellerService.register(sellerData);
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An error occured in Seller Register";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// 🟨LOGIN SELLER FEATURE🟨//
export const login = createAsyncThunk(
  "/seller/login",
  async (sellerData, thunkAPI) => {
    try {
      return await sellerService.login(sellerData);
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An error occurred in Seller Login";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// 🟨LOGOUT SELLER FEATURE🟨//
export const logoutSeller = createAsyncThunk("/seller/logout", async () => {
  await sellerService.logoutSeller();
});

// 🟨GET SELLER 🟨//
export const getSeller = createAsyncThunk("/getSeller", async (_, thunkAPI) => {
  try {
    return await sellerService.getSeller();
  } catch (err) {
    const message =
      err.response && err.response.data && err.response.data.message
        ? err.response.data.message
        : err.message || "An Error Occured while Getting Seller";

    return thunkAPI.rejectWithValue(message);
  }
});

// 🟨GET SELLER PRODUCTS🟨//
export const getAllSellerProducts = createAsyncThunk(
  "/seller/products",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("Seller");

      return await sellerService.getAllSellerProducts(token);
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An error occurred in Getting Sellers Products";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// 🟨CREATE PRODUCT🟨//
export const createProduct = createAsyncThunk(
  "/seller/createProduct",
  async (productData, thunkAPI) => {
    try {
      const token = localStorage.getItem("Seller");

      return await sellerService.createProduct(productData, token);
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An error occurred while Creating Products";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// 🟨UPDATE PRODUCT🟨//
export const updateProduct = createAsyncThunk(
  "/seller/updateProduct",
  async ({productData, id}, thunkAPI) => {
    try {
      const token = localStorage.getItem("Seller");

      return await sellerService.updateProduct(productData, id, token);
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An error occurred while Updating Products";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// 🟨DELETE PRODUCT🟨//
export const deleteProduct = createAsyncThunk(
  "/delete",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("Seller");

      return await sellerService.deleteProduct(id, token);
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An error occurred while Deleting Products";

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
  if (field) {
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

// 🟩SELLER SLICE🟩//
export const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    const asyncActions = [
      {action: register, field: "seller"},
      {action: login, field: "seller"},
      {action: logoutSeller, field: "seller"},
      {action: getSeller, field: "seller"},
      {action: getAllSellerProducts, field: "products"},
      {action: createProduct, field: "product"},
      {action: updateProduct, field: "product"},
      {action: deleteProduct, field: "products"},
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

export const {reset} = sellerSlice.actions;
export default sellerSlice.reducer;
