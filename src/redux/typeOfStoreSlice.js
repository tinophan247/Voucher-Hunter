import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiTypeOfStore from "../services/api.typeOfStore";

export const getListToS = createAsyncThunk("getListToS", async () => {
  const response = await ApiTypeOfStore.getListToS();
  return response;
});

export const createtoS = createAsyncThunk("createtoS", async (payload) => {
  const response = await ApiTypeOfStore.createToS(payload);
  return response;
});

export const updateToS = createAsyncThunk("updateToS", async (payload) => {
  const response = await ApiTypeOfStore.updatToS(payload);
  return response;
});

export const deleteToS = createAsyncThunk("deleteToS", async (payload) => {
  const response = await ApiTypeOfStore.deleteToS(payload);
  return response;
});

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: false,
  message: "",
  ToSList: [],
};

const typeOfStoreSlice = createSlice({
  name: "typeOfStore",
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
    builder.addCase(getListToS.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(getListToS.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.ToSList = action.payload;
    });
    //reject
    builder.addCase(getListToS.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(createtoS.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(createtoS.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Created successfully";
    });
    //reject
    builder.addCase(createtoS.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(updateToS.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(updateToS.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Updated successfully";
    });
    //reject
    builder.addCase(updateToS.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(deleteToS.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(deleteToS.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Deleted successfully";
    });
    //reject
    builder.addCase(deleteToS.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });
  },
});

export const typeOfStoreActions = typeOfStoreSlice.actions;
export default typeOfStoreSlice.reducer;
