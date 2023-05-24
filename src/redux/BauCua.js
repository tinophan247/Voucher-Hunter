import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BauCuaArray: [
    { id: "ga", img: "./img/gameBauCua/ga.png", betingScore: 0 },
    { id: "bau", img: "./img/gameBauCua/bau.png", betingScore: 0 },
    { id: "ca", img: "./img/gameBauCua/ca.png", betingScore: 0 },
    { id: "nai", img: "./img/gameBauCua/nai.png", betingScore: 0 },
    { id: "cua", img: "./img/gameBauCua/cua.png", betingScore: 0 },
    { id: "tom", img: "./img/gameBauCua/tom.png", betingScore: 0 },
  ],
  totalScore: 3,
  DiceArray: [{ id: "bau", img: "./img/gameBauCua/bau.png" }],
  result: undefined,
};

const BauCuaSlice = createSlice({
  name: "BauCua",
  initialState: initialState,
  reducers: {
    BauCuaBetingUp: (state, action) => {
      const BauCuaArrayUpdate = [...state.BauCuaArray];
      const index = BauCuaArrayUpdate.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        if (state.totalScore > 0) {
          BauCuaArrayUpdate[index].betingScore += 1;
          state.totalScore -= 1;
        }
      }

      state.BauCuaArray = BauCuaArrayUpdate;
    },
    BauCuaBetingDown: (state, action) => {
      const BauCuaArrayUpdate = [...state.BauCuaArray];
      const index = BauCuaArrayUpdate.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        if (BauCuaArrayUpdate[index].betingScore > 0) {
          BauCuaArrayUpdate[index].betingScore -= 1;
          state.totalScore += 1;
        }
      }

      state.BauCuaArray = BauCuaArrayUpdate;
    },
    PlayAgain: (state) => {
      state.totalScore = 3;
      state.BauCuaArray = state.BauCuaArray.map((item) => {
        return { ...item, betingScore: 0 };
      });
      state.result = undefined;
    },
    PlayGame: (state) => {
      const rdDiceArray = [];

      for (let i = 0; i < 1; i++) {
        //Tạo ra 1 số ngẫu nhiên từ 0 -> 5
        let rdNumber = Math.floor(Math.random() * 6);
        const rdDice = state.BauCuaArray[rdNumber];
        rdDiceArray.push(rdDice);
      }
      //Cập lại mảng xúc xắc state.mangXucXac = mangXucXacNgauNhien
      state.DiceArray = rdDiceArray;

      //Xử lý tăng điểm thưởng
      rdDiceArray.forEach((xucXacNN, index) => {
        let indexBauCuaArr = state.BauCuaArray.findIndex(
          (item) => item.id === xucXacNN.id
        );
        if (index !== -1) {
          state.totalScore += state.BauCuaArray[indexBauCuaArr].betingScore;
        }
      });

      //Xử lý làm mới game
      state.BauCuaArray = state.BauCuaArray.map((item) => {
        return { ...item, betingScore: 0 };
      });
      if (state.totalScore === 0) {
        state.result = false;
      } else {
        state.result = true;
      }
    },
  },
});

export const { BauCuaBetingUp, BauCuaBetingDown, PlayAgain, PlayGame } =
  BauCuaSlice.actions;
export default BauCuaSlice.reducer;
