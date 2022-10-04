import apis from "./apis";

export const getMarketplaceItems = async ({ cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.getMarketplaceItems();
    cbSuccess(data);
  } catch (e) {
    cbFailure(e.message);
  }
};