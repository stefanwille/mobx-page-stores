import { observer, useLocalStore } from "mobx-react-lite";
import "mobx-react-lite/optimizeForReactDom";
import React from "react";
import { OrderPageStore } from "./store/OrderPageStore";
import { OrderPageStoreProvider } from "./store/OrderPageStoreContext";
import { OrderPageCounter } from "./OrderPageCounter";
import { OrderPageButton } from "./OrderPageButton";
import { useRootStore } from "../../store/RootStoreContext";

export const OrderPage: React.FC<{}> = observer(() => {
  const rootStore = useRootStore();
  const orderPageStore = useLocalStore(() => new OrderPageStore(rootStore));
  return (
    <OrderPageStoreProvider value={orderPageStore}>
      <div>
        <h1>OrderPage</h1>

        <div>In OrderPage: {orderPageStore.counter}</div>
        <OrderPageCounter />
        <OrderPageButton />
      </div>
    </OrderPageStoreProvider>
  );
});
