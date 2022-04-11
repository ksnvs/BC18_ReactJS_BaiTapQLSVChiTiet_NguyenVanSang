import { combineReducers } from "redux";
import { loadingReducer } from "./loadingReducer";
import { quanLySvReducer } from "./quanLySvReducer";

export const rootReducerQLSV = combineReducers({
  quanLySvReducer,
  loadingReducer,
});
