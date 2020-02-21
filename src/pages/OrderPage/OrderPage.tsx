import { observer } from "mobx-react-lite";
import "mobx-react-lite/optimizeForReactDom";
import React, { useEffect } from "react";
import { OrderPageStore } from "./store/OrderPageStore";
import { OrderPageCounter } from "./OrderPageCounter";
import { OrderPageButton } from "./OrderPageButton";
import { useRootStore } from "../../store/RootStoreContext";
import { action } from "mobx";

export const OrderPage: React.FC<{}> = observer(() => {
  const rootStore = useRootStore();
  // Initialize and clear up orderPageStore
  useEffect(
    action(() => {
      rootStore._orderPageStore = new OrderPageStore(rootStore);
      return () => {
        rootStore._orderPageStore = null;
      };
    }),
    []
  );

  if (!rootStore._orderPageStore) {
    return null;
  }

  return (
    <div>
      <h1>OrderPage</h1>

      <div>In OrderPage: {rootStore.orderPageStore.counter}</div>
      <OrderPageCounter />
      <OrderPageButton />
    </div>
  );
});
