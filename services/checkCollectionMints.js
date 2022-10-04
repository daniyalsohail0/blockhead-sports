import apis from "./apis";

export const checkCollectionMints = async ({ cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.checkCollectionMints();
    cbSuccess(data);
  } catch (e) {
    cbFailure(e.message);
  }
};
