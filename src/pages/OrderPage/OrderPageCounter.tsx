import { observer } from "mobx-react-lite";
import "mobx-react-lite/optimizeForReactDom";
import React from "react";
import { useOrderPageStore } from "./store/OrderPageStoreContext";

export const OrderPageCounter: React.FC<{}> = observer(() => {
  const orderPageStore = useOrderPageStore();
  return <div>In OrderPageCounter: {orderPageStore.counter}</div>;
});
