import "mobx-react-lite/optimizeForReactDom";
import React from "react";
import { useRootStore } from "../../store/RootStoreContext";

export const OrderPageButton: React.FC<{}> = () => {
  const rootStore = useRootStore();
  return <button onClick={rootStore.orderPageStore.increment}>Add</button>;
};
