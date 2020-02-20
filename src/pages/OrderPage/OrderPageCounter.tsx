import { observer } from "mobx-react-lite";
import "mobx-react-lite/optimizeForReactDom";
import React from "react";
import { useRootStore } from "../../store/RootStoreContext";

export const OrderPageCounter: React.FC<{}> = observer(() => {
  const rootStore = useRootStore();
  if (!rootStore.orderPageStore) {
    throw new Error("Bad");
  }
  return <div>In OrderPageCounter: {rootStore.orderPageStore.counter}</div>;
});
