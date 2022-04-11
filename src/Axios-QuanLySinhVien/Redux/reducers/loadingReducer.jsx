import { OFF_LOADING, ON_LOADING } from "../constant/loadingConstant";

const initialState = {
  isLoading: false,
};

export const loadingReducer = (state = initialState, { type }) => {
  switch (type) {
    case ON_LOADING: {
      state.isLoading = true;
      return { ...state };
    }
    case OFF_LOADING: {
      state.isLoading = false;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
