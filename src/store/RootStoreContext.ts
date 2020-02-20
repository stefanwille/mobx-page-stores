import React, { useContext } from "react";
import { RootStore } from "./RootStore";

export const RootStoreContext = React.createContext<RootStore | null>(null);
export const RootStoreProvider = RootStoreContext.Provider;
export const useRootStore = (): RootStore => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error("Missing root store");
  }
  return store;
};
