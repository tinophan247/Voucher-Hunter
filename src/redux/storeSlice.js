import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  ApiStore  from "../services/api.store";

export const getListStore = createAsyncThunk("getListStore", async () => {
  const response = await ApiStore.getListStore();
  return response;
});

export const createStore = createAsyncThunk("createStore", async (payload) => {
  const response = await ApiStore.createStore(payload);
  return response;
});

export const updateStore = createAsyncThunk("updateStore", async (payload) => {
  const response = await ApiStore.updateStore(payload);
  return response;
});

export const deleteStore = createAsyncThunk("deleteStore", async (payload) => {
  const response = await ApiStore.deleteStore(payload);
  return response;
});

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: false,
  message: "",
  StoreList: [],
};

const storeSlice = createSlice({
  name: "store",
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
    builder.addCase(getListStore.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(getListStore.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.StoreList = action.payload;
    });
    //reject
    builder.addCase(getListStore.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(createStore.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(createStore.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Tạo thành công";
    });
    //reject
    builder.addCase(createStore.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(updateStore.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(updateStore.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Cập nhật thành công";
    });
    //reject
    builder.addCase(updateStore.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(deleteStore.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(deleteStore.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Xóa thành công";
    });
    //reject
    builder.addCase(deleteStore.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });
  },
});

export const StoreActions = storeSlice.actions;
export default storeSlice.reducer;
