/**
 * IIInigence Example Template for service functions 
 * version: 0.0.1
 * created: 8/21/2021 
 * author: @judescripts
 * lastEdited: 8/21/2021 
 * editor: @judescripts
 * 
 * ::: Modify code below to satisfy your requirement :::
 * 


import apis from "./apis";

export const getInitialStore = async ({ cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.getStore();
    cbSuccess(data);
  } catch (e) {
    cbFailure(e.message);
  }
};
export const addStore = async ({ data: values, cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.addStore(values);
    cbSuccess(data.message);
  } catch (e) {
    cbFailure(e.message);
  }
};

export const editStore = async ({ data: values, cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.editStore(values);
    cbSuccess(data.message);
  } catch (e) {
    cbFailure(e.message);
  }
};

*/
