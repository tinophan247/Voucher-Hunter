import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  ApiPartnerGateWay  from "../services/apt.partnerGateWay";

export const getListPartner = createAsyncThunk('getAllPartner', async () => {
  const response = await ApiPartnerGateWay.getListPartner();
  return response;
});

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: false,
  message: "",
  partnerList : []
};

const partnerSlice = createSlice({
  name: "partner",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //request pending
    builder.addCase(getListPartner.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(getListPartner.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = false;
      state.partnerList = action.payload
    });
    //reject
    builder.addCase(getListPartner.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.message = action.error.message;
    });
  },
});

export default partnerSlice.reducer;