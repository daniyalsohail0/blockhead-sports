import axios from "axios";

export const getUpcomingGameDate = async ({ flag, cbSuccess, cbFailure }) => {
  try {
    const { data } = await axios.get(`/api/getUpcomingGameDate/${flag}`);
    cbSuccess(data);
  } catch (e) {
    cbFailure(e.message);
  }
};
