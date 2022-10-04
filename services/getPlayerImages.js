import apis from "./apis";

export const getPlayerImages = async ({
  data: values,
  cbSuccess,
  cbFailure,
}) => {
  try {
    const { data } = await apis.getPlayerImages(values);
    cbSuccess(data);
  } catch (e) {
    cbFailure(e.message);
  }
};
