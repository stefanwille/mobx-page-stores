import React, { useContext } from "react";
import { OrderPageStore } from "./OrderPageStore";

export const OrderPageStoreContext = React.createContext<OrderPageStore | null>(
  null
);
export const OrderPageStoreProvider = OrderPageStoreContext.Provider;
export const useOrderPageStore = (): OrderPageStore => {
  const localStore = useContext(OrderPageStoreContext);
  if (!localStore) {
    throw new Error("Missing local store");
  }
  return localStore;
};
