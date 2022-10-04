import apis from "./apis";

export const getWhitelist = async ({ cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.getWhitelist();
    cbSuccess(data);
  } catch (e) {
    cbFailure(e.message);
  }
};
