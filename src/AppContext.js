import { createContext } from "react";

export const defaultObject = {
  data: [],
};
export const AppContext = createContext(defaultObject);
