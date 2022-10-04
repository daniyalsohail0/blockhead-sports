import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import mintReducer from "./mintSlice";
import web3Reducer from "./web3Slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    mint: mintReducer,
    web3: web3Reducer,
  },
});
