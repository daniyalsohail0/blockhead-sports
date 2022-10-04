import apis from "./apis";

export const getPlayers = async ({ data: values, cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.getPlayers(values);
    cbSuccess(data);
  } catch (e) {
    cbFailure(e.message);
  }
};
