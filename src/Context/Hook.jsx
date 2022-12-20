import { useContext } from "react";
import { AppContext } from "./Index";

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
