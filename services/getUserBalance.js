import axios from "axios";

export const getUserBalance = async ({flag, cbSuccess, cbFailure }) => {
  try {
    const { data } = await axios.get(`/api/getUserBalance/${flag}`);
    cbSuccess(data);
  } catch (e) {
    cbFailure(e.message);
  }
};
