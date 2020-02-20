import { observer, useLocalStore } from "mobx-react-lite";
import "mobx-react-lite/optimizeForReactDom";
import React from "react";
import { RootStore } from "../../RootStore";
import { OrderPageStore } from "./OrderPageStore";
import { OrderPageStoreProvider } from "./OrderPageContext";
import { OrderPageCounter } from "./OrderPageCounter";
import { OrderPageButton } from "./OrderPageButton";

export const OrderPage: React.FC<{}> = observer(() => {
  const rootStore = new RootStore();
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
