import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import userService from "./userService";

const user = localStorage.getItem("User");

const initialState = {
  user: user ? user : null,
  cart: [],
  checkoutCart: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

//🟨REGISTER USER FEATURE🟨//
export const register = createAsyncThunk(
  "/user/register",
  async (userData, thunkAPI) => {
    try {
      return await userService.register(userData);
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An error occurred in User Register";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//🟩LOGIN USER FEATURE🟩//
export const login = createAsyncThunk(
  "/user/login",
  async (userData, thunkAPI) => {
    try {
      return await userService.login(userData);
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An Error Occured in User Login";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//🟨GET USER FEATURE🟨//
export const getUser = createAsyncThunk("/getUser", async (_, thunkAPI) => {
  try {
    return await userService.getUser();
  } catch (err) {
    const message =
      err.response && err.response.data && err.response.data.message
        ? err.response.data.message
        : err.message || "An Error Occured while Getting User";

    return thunkAPI.rejectWithValue(message);
  }
});

//🟨GET USER CART FEATURE🟨//
export const getCart = createAsyncThunk("/getCart", async (_, thunkAPI) => {
  try {
    return await userService.getCart();
  } catch (err) {
    const message =
      err.response && err.response.data && err.response.data.message
        ? err.response.data.message
        : err.message || "An Error Occured while Getting User";

    return thunkAPI.rejectWithValue(message);
  }
});

//🟨ADD TO CART FEATURE🟨//
export const addToCart = createAsyncThunk(
  "/user/addToCart",
  async (cartData, thunkAPI) => {
    try {
      return await userService.addToCart(cartData);
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An Error Occured while Adding Data to Cart";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//🟨DELETE PRODUCT FROM THE CART FEATURE🟨//
export const deleteProduct = createAsyncThunk(
  "/delete",
  async (product_id, thunkAPI) => {
    try {
      return await userService.deleteProduct(product_id);
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An Error Occured while Adding Data to Cart";

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

//// USER SLICE ////

export const userSlice = createSlice({
  name: "user",
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
      {action: register, field: "user"},
      {action: login, field: "user"},
      {action: getUser, field: "user"},
      {action: getCart, field: "cart"},
      {action: addToCart, field: "cart"},
      {action: deleteProduct, field: "cart"},
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

export const {reset} = userSlice.actions;
export default userSlice.reducer;
