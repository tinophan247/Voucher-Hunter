import { configureStore } from "@reduxjs/toolkit";
import ChineseDiceReducer from "./redux/ChineseDiceSlice";
import KBBReducer from "./redux/KBBSlice";
import BauCuaReducer from "./redux/BauCua";
import authReducer from "./redux/authSlice";
import partnerReducer from "./redux/partnerSlice";
import typeOfStoreReducer from "./redux/typeOfStoreSlice";
import voucherReducer from "./redux/voucherSlice";
import storeReducer from "./redux/storeSlice";

const store = configureStore({
  reducer: {
    chineseDice: ChineseDiceReducer,
    KBB: KBBReducer,
    BauCua: BauCuaReducer,
    auth: authReducer,
    partner: partnerReducer,
    typeOfStore: typeOfStoreReducer,
    voucher: voucherReducer,
    store: storeReducer,
  },
});

export default store;
