import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiAuthGateWay from "../services/api.authGateWay";

export const login = createAsyncThunk("auth/login", async (payload) => {
  const response = await ApiAuthGateWay.login(payload);
  localStorage.setItem("access_token", response.token);
  return response;
});

export const register = createAsyncThunk("register", async (payload) => {
  const response = await ApiAuthGateWay.register(payload);
  return response;
});

export const getAllCustomer = createAsyncThunk("getAllCustomer", async () => {
  const response = await ApiAuthGateWay.getAllCustomer();
  return response;
});

export const updateCustomer = createAsyncThunk(
  "updateCustomer",
  async (payload) => {
    const response = await ApiAuthGateWay.updateCustomer(payload);
    return response;
  }
);

export const deleteCustomer = createAsyncThunk(
  "deleteCustomer",
  async (payload) => {
    const response = await ApiAuthGateWay.deleteCustomer(payload);
    return response;
  }
);

const initialAuthState = {
  isLoading: false,
  isSuccess: false,
  isLoggedIn: false,
  credentials: {
    name: "",
    roleName: "",
    avatar: "",
  },
  error: false,
  message: "",
  userList: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout: () => initialAuthState,
    destroyerror: (state) => {
      state.error = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    //request pending
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(register.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Đăng ký thành công";
    });
    //reject
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    // Start login request
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    // Request successful
    builder.addCase(login.fulfilled, (state, action) => {
      state.error = false;
      state.errorMessage = "";
      state.isLoading = false;
      state.isLoggedIn = true;
      state.credentials = {
        name: action.payload.fullName,
        roleName: action.payload.role,
        avatar: action.payload.avatar,
      };
    });
    // Request error
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.error.message;
    });

    //request pending
    builder.addCase(getAllCustomer.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(getAllCustomer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.userList = action.payload;
    });
    //reject
    builder.addCase(getAllCustomer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });

    //request pending
    builder.addCase(updateCustomer.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(updateCustomer.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Sửa thành công";
    });
    //reject
    builder.addCase(updateCustomer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });
    //request pending
    builder.addCase(deleteCustomer.pending, (state) => {
      state.isLoading = true;
    });
    //request successful
    builder.addCase(deleteCustomer.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.isSuccess = true;
      state.message = "Xóa thành công";
    });
    //reject
    builder.addCase(deleteCustomer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
