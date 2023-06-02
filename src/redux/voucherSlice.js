import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiVoucher  from "../services/api.voucher";

export const getListVoucher = createAsyncThunk("getListVoucher", async () => {
  const response = await ApiVoucher.getListVoucher();
  return response;
});

export const createVoucher = createAsyncThunk("createVoucher", async (payload) => {
  const response = await ApiVoucher.createVoucher(payload);
  return response;
});

export const updateVoucher = createAsyncThunk("updateVoucher", async (payload) => {
  const response = await ApiVoucher.updateVoucher(payload);
  return response;
});

export const deleteVoucher = createAsyncThunk("deleteVoucher", async (payload) => {
  const response = await ApiVoucher.deleteVoucher(payload);
  return response;
});

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: false,
  message: "",
  VoucherList: [],
};

const voucherSlice = createSlice({
  name: "voucher",
  initialState: initialState,
  reducers: {
    destroyerror: (state) => {
      state.error = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    //request pending
    builder.addCase(getListVoucher.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(getListVoucher.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.VoucherList = action.payload;
    });
    //reject
    builder.addCase(getListVoucher.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(createVoucher.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(createVoucher.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Tạo thành công";
    });
    //reject
    builder.addCase(createVoucher.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(updateVoucher.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(updateVoucher.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Updated successfully";
    });
    //reject
    builder.addCase(updateVoucher.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(deleteVoucher.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(deleteVoucher.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Deleted successfully";
    });
    //reject
    builder.addCase(deleteVoucher.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });
  },
});

export const VoucherActions = voucherSlice.actions;
export default voucherSlice.reducer;
