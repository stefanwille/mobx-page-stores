import "mobx-react-lite/optimizeForReactDom";
import React from "react";
import { useRootStore } from "../../store/RootStoreContext";

export const OrderPageButton: React.FC<{}> = () => {
  const rootStore = useRootStore();
  if (!rootStore.orderPageStore) {
    throw new Error("Bad");
  }
  return <button onClick={rootStore.orderPageStore.increment}>Add</button>;
};
