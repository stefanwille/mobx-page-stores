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
  useEffect(
    action(() => {
      rootStore.orderPageStore = new OrderPageStore(rootStore);
      return () => {
        rootStore.orderPageStore = null;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }),
    []
  );
  const orderPageStore = rootStore.orderPageStore;
  if (!orderPageStore) {
    console.log("No store yet");
    return null;
  }

  return (
    <div>
      <h1>OrderPage</h1>

      <div>In OrderPage: {orderPageStore.counter}</div>
      <OrderPageCounter />
      <OrderPageButton />
    </div>
  );
});
