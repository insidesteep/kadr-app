import { FETCH_BULIMLAR_START, FETCH_BULIMLAR_SUCCESS, FETCH_BULIMLAR_FAILURE } from "../constants";

const initialState = {
  data: [
    {
      key: `771`,
      name: `Axborot texnologiyalari markazi`
    },
    {
      key: `2771`,
      name: `Hisobxona`
    },
    {
      key: `7761`,
      name: `Arxiv`
    },
    {
      key: `77661`,
      name: `Kadrlar bo'limi`
    }
  ],
  loading: false,
  error: null
};

const bulimlarState = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_BULIMLAR_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_BULIMLAR_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false
      };
    case FETCH_BULIMLAR_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default bulimlarState;
