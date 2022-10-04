import apis from "./apis";

export const updateCollectionMints = async ({ data: values, cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.updateCollectionMints(values);
    cbSuccess(data.message);
  } catch (e) {
    cbFailure(e.message);
  }
};
