import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  ApiEvent  from "../services/api.event";

export const getListEvent= createAsyncThunk("getListEvent", async () => {
  const response = await ApiEvent.getListEvent();
  return response;
});

export const createEvent = createAsyncThunk("createEvent", async (payload) => {
  const response = await ApiEvent.createEvent(payload);
  return response;
});

export const updateEvent = createAsyncThunk("updateEvent", async (payload) => {
  const response = await ApiEvent.updateEvent(payload);
  return response;
});

export const deleteEvent = createAsyncThunk("deleteEvent", async (payload) => {
  const response = await ApiEvent.deleteEvent(payload);
  return response;
});

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: false,
  message: "",
  eventList: [],
};

const eventSlice = createSlice({
  name: "event",
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
    builder.addCase(getListEvent.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(getListEvent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.eventList = action.payload;
    });
    //reject
    builder.addCase(getListEvent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(createEvent.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(createEvent.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Tạo thành công";
    });
    //reject
    builder.addCase(createEvent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(updateEvent.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(updateEvent.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Cập nhật thành công";
    });
    //reject
    builder.addCase(updateEvent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(deleteEvent.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(deleteEvent.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Xóa thành công";
    });
    //reject
    builder.addCase(deleteEvent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });
  },
});

export const EventActions = eventSlice.actions;
export default eventSlice.reducer;
