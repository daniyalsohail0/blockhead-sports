import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  qty: 0,
};

export const mintSlice = createSlice({
  name: "mint",
  initialState,
  reducers: {
    addQty: (state, action) => {
      state.qty = action.payload.qty;
    },
  },
});

export const { addQty } = mintSlice.actions;
export default mintSlice.reducer;
