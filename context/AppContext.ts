import React from "react";
import { initialState } from "../supporting_files/constants";
import { GlobalState } from "../supporting_files/types";
import { Action } from "./actionTypes";


export const AppContext = React.createContext<{
  rootState: GlobalState;
  globalDispatch: React.Dispatch<Action>;
}>({
  rootState: initialState,
  globalDispatch: () => null
});