import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  ApiGame  from "../services/api.game";

export const getGameList = createAsyncThunk("getGameList", async () => {
  const response = await ApiGame.getGameList();
  return response;
});

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: false,
  message: "",
  gameListData: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    //request pending
    builder.addCase(getGameList.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(getGameList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.gameListData = action.payload;
    });
    //reject
    builder.addCase(getGameList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.message = action.error.message;
    });
  },
});

export default gameSlice.reducer;
