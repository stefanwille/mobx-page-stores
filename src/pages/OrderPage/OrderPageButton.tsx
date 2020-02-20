import "mobx-react-lite/optimizeForReactDom";
import React from "react";
import { useOrderPageStore } from "./store/OrderPageStoreContext";

export const OrderPageButton: React.FC<{}> = () => {
  const orderPageStore = useOrderPageStore();
  return <button onClick={orderPageStore.increment}>Add</button>;
};
