import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  provider: null,
  contract: null,
  web3: null,
  web3Modal: null,
};

export const web3Slice = createSlice({
  name: "web3",
  initialState,
  reducers: {
    addProvider: (state, action) => {
      state.provider = action.payload.provider;
    },
    addContract: (state, action) => {
      state.contract = action.payload.contract;
    },
    addErc20Contract: (state, action) => {
      state.erc20Contract = action.payload.erc20Contract;
    },
    addWeb3: (state, action) => {
      state.web3 = action.payload.web3;
    },
    addWeb3Modal: (state, action) => {
      state.web3Modal = action.payload.web3Modal;
    },
  },
});

export const {
  addProvider,
  addContract,
  addWeb3,
  addWeb3Modal,
  addErc20Contract,
} = web3Slice.actions;
export default web3Slice.reducer;
