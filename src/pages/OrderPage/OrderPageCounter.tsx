import { observer } from "mobx-react-lite";
import "mobx-react-lite/optimizeForReactDom";
import React from "react";
import { useRootStore } from "../../store/RootStoreContext";

export const OrderPageCounter: React.FC<{}> = observer(() => {
  const store = useRootStore();
  return <div>In OrderPageCounter: {store.orderPageStore.counter}</div>;
});
