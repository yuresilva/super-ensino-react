import React from "react";
import { AppContext, INITIAL_STATE } from "./Index";

export const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ state: INITIAL_STATE }}>
      {children}
    </AppContext.Provider>
  );
};
