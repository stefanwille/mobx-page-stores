import { observer } from "mobx-react-lite";
import "mobx-react-lite/optimizeForReactDom";
import React, { useEffect } from "react";
import { OrderPageStore } from "./store/OrderPageStore";
import { OrderPageCounter } from "./OrderPageCounter";
import { OrderPageButton } from "./OrderPageButton";
import { UserView } from "./UserView";
import { useRootStore } from "../../store/RootStoreContext";
import { action } from "mobx";

const useInitPageStore = () => {
  const rootStore = useRootStore();
  // Initialize and clear up orderPageStore
  useEffect(
    action(() => {
      rootStore._orderPageStore = new OrderPageStore(rootStore);
      rootStore.orderPageStore.loadUserById(1);
      return () => {
        rootStore._orderPageStore = null;
      };
    }),
    []
  );
};

export const OrderPage: React.FC<{}> = observer(() => {
  useInitPageStore();

  const rootStore = useRootStore();

  if (!rootStore._orderPageStore) {
    return null;
  }

  return (
    <div>
      <h1>OrderPage</h1>

      <div>In OrderPage: {rootStore.orderPageStore.counter}</div>
      <OrderPageCounter />
      <OrderPageButton />
      <UserView />
    </div>
  );
});
