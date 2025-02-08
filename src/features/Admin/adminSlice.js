import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import adminService from "./adminService";

const initialState = {
  allUsers: [],
  allSellers: [],
  allProducts: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

//🟨GET ALL USERS🟨//
export const fetchAllUsers = createAsyncThunk(
  "admin/getAllUsers",
  async (_, thunkAPI) => {
    try {
      return await adminService.getAllUsers();
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An error occurred while Fetching All Users";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//🟨GET ALL SELLERS🟨//
export const fetchAllSellers = createAsyncThunk(
  "admin/getAllSellers",
  async (_, thunkAPI) => {
    try {
      return await adminService.getAllSellers();
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An error occurred while Fetching All Sellers";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//🟨GET ALL PRODUCTS🟨//
export const fetchAllProducts = createAsyncThunk(
  "admin/getAllProducts",
  async (_, thunkAPI) => {
    try {
      return await adminService.getAllProducts();
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An error occurred while Fetching All Products";

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

//// ADMIN SLICE ////
export const adminSlice = createSlice({
  name: "admin",
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
      {action: fetchAllUsers, field: "allUsers"},
      {action: fetchAllSellers, field: "allSellers"},
      {action: fetchAllProducts, field: "allProducts"},
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

export const {reset} = adminSlice.actions;
export default adminSlice.reducer;
