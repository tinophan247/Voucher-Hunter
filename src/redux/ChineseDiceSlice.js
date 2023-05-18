import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chineseDice: true, //True là tài, false là xỉu
  diceArray: [
    { id: 6, img: "./img/gameXucXac/6.png" },
    { id: 6, img: "./img/gameXucXac/6.png" },
    { id: 6, img: "./img/gameXucXac/6.png" },
  ],
  result : undefined,
  status : undefined
};

const chineseDiceSlice = createSlice({
  name: "chineseDice",
  initialState: initialState,
  reducers: {
    DiceBeting: (state, action) => {
      state.chineseDice = action.payload;
    },
    PlayGame: (state) => {
      let RandomDiceArray = [];
      for (let i = 0; i < 3; i++) {
        //Mỗi lần lặp random ra số ngẫu nhiên từ 1 -> 6
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        //Tạo ra 1 đối tượng xúc xắc từ số ngẫu nhiên
        let randomDice = {
          id: randomNumber,
          img: `./img/gameXucXac/${randomNumber}.png`,
        };
        //Push vào mảng xúc xắc ngẫu nhiên
        RandomDiceArray.push(randomDice);
      }
      //Gán state mangXucXac = mangXucXacNgauNhien
      state.diceArray = RandomDiceArray;
      //Xử lý số bàn thắng
      let totalScore = RandomDiceArray.reduce((total, dice) => {
        return (total += dice.id);
      }, 0);

      if(totalScore > 11) {
        state.result = true;
      }

      if(totalScore <= 11) {
        state.result = false;
      }

      //Xét điều kiện để người dùng thắng game
      if (
        (totalScore > 11 && state.chineseDice === true) ||
        (totalScore <= 11 && state.chineseDice === false)
      ) {
        state.status = true;
      }
      else{
        state.status = false;
      }
    },
  },
});

export const { DiceBeting, PlayGame } = chineseDiceSlice.actions;
export default chineseDiceSlice.reducer;
