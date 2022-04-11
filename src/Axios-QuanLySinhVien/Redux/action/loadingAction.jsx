import { OFF_LOADING, ON_LOADING } from "../constant/loadingConstant";

export const on_loading_action = () => {
  return {
    type: ON_LOADING,
  };
};
export const off_loading_action = () => {
  return {
    type: OFF_LOADING,
  };
};
