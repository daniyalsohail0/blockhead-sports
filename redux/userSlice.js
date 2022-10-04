import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAddress: "",
  userBalance: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userAddress = action.payload.address;
    },
    addUserBalance: (state, action) => {
      state.userBalance = action.payload.balance;
    },
  },
});

export const { addUser, addUserBalance } = userSlice.actions;
export default userSlice.reducer;
