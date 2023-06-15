import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  KBBArray: [
    { id: "keo", img: "./img/gameOanTuXi/keo.png", beting: false },
    { id: "bua", img: "./img/gameOanTuXi/bua.png", beting: false },
    { id: "bao", img: "./img/gameOanTuXi/bao.png", beting: true },
  ],
  computer: { id: "bao", img: "./img/gameOanTuXi/bao.png" },
  result: undefined,
  status: undefined,
};

const KBBSlice = createSlice({
  name: "KBB",
  initialState: initialState,
  reducers: {
    StopResultKBB: (state) => {
      state.result = undefined
    },
    KBBBeting: (state, action) => {
      //Reset mảng cược
      let KBBArrayUpdate = [...state.KBBArray];
      //Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên
      KBBArrayUpdate = KBBArrayUpdate.map((item) => {
        if (item.id === action.payload) {
          return { ...item, beting: true };
        }
        return { ...item, beting: false };
      });
      //setState của mangCuoc => render lại giao diện
      state.KBBArray = KBBArrayUpdate;
    },
    Random: (state) => {
      let rdNumber = Math.floor(Math.random() * 3);
      let betItem = state.KBBArray[rdNumber];
      state.computer = { ...betItem };
    },
    EndGame: (state) => {
      let player = state.KBBArray.find((item) => item.beting === true);
      let computer = state.computer;
      switch (player.id) {
        case "keo":
          if (computer.id === "keo") {
            state.result = "Hòa";
          } else if (computer.id === "bua") {
            state.result = "Thua";
          } else {
            state.result = "Thắng";
          }
          break;
        case "bua":
          if (computer.id === "keo") {
            state.result = "Thắng";
          } else if (computer.id === "bua") {
            state.result = "Hòa";
          } else {
            state.result = "Thua";
          }
          break;
        case "bao":
          if (computer.id === "keo") {
            state.result = "Thua";
          } else if (computer.id === "bua") {
            state.result = "Thắng";
          } else {
            state.result = "Hòa";
          }
          break;
        default:
          state.result = undefined;
      }
    },
  },
});

export const { KBBBeting, Random, EndGame ,StopResultKBB} = KBBSlice.actions;
export default KBBSlice.reducer;
