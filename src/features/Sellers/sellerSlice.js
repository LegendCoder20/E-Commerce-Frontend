import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import sellerService from "./sellerService";

// Check if the seller data exists in localStorage and parse it
const seller = JSON.parse(localStorage.getItem("Seller"));

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
      return await sellerService.register(sellerData); // Assuming sellerService handles the API call
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : err.message || "An error occurred in Seller Register";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Common handler for pending, fulfilled, and rejected states
const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action, field) => {
  state.isLoading = false;
  state.isSuccess = true;
  if (field) {
    state[field] = action.payload; // Set the seller data in state
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
    const asyncActions = [{action: registerSeller, field: "seller"}];

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
