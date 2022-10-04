import apis from "./apis";

export const updateScore = async ({ data: values, cbSuccess, cbFailure }) => {
  try {
    const { data } = await apis.updateScore(values);
    cbSuccess(data.message);
  } catch (e) {
    cbFailure(e.message);
  }
};
