import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiPartnerGateWay from "../services/apt.partnerGateWay";

export const getListPartner = createAsyncThunk("getAllPartner", async () => {
  const response = await ApiPartnerGateWay.getListPartner();
  return response;
});

export const createPartner = createAsyncThunk(
  "createPartner",
  async (payload) => {
    const response = await ApiPartnerGateWay.createPartner(payload);
    return response;
  }
);

export const updatePartner = createAsyncThunk(
  "updatePartner",
  async (payload) => {
    const response = await ApiPartnerGateWay.updatePartner(payload);
    return response;
  }
);

export const deletePartner = createAsyncThunk(
  "deletePartner",
  async (payload) => {
    const response = await ApiPartnerGateWay.deletePartner(payload);
    return response;
  }
);

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: false,
  message: "",
  partnerList: [],
};

const partnerSlice = createSlice({
  name: "partner",
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
    builder.addCase(getListPartner.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(getListPartner.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.partnerList = action.payload;
    });
    //reject
    builder.addCase(getListPartner.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(createPartner.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(createPartner.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Tạo thành công";
    });
    //reject
    builder.addCase(createPartner.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(updatePartner.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(updatePartner.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Cập nhật thành công";
    });
    //reject
    builder.addCase(updatePartner.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(deletePartner.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(deletePartner.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Xóa thành công";
    });
    //reject
    builder.addCase(deletePartner.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });
  },
});

export const PartnerActions = partnerSlice.actions;
export default partnerSlice.reducer;
