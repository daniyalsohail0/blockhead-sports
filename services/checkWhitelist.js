import apis from "./apis";

export const checkWhitelistStatus = async ({ cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.checkWhitelist();
    cbSuccess(data);
  } catch (e) {
    cbFailure(e.message);
  }
};
