import React, { useContext } from "react";
import "./App.css";
import { observer, useLocalStore } from "mobx-react-lite";
import { observable, configure, action } from "mobx";
import "mobx-react-lite/optimizeForReactDom";

configure({ enforceActions: "always" });

class RootStore {
  @observable
  masterData: string = "Hello";
}

class OrderPageStore {
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  rootStore: RootStore;

  @observable
  counter = 0;

  @action.bound
  increment() {
    this.counter++;
  }
}

const OrderPageStoreContext = React.createContext<OrderPageStore | null>(null);
const OrderPageStoreProvider = OrderPageStoreContext.Provider;
const useOrderPageStore = (): OrderPageStore => {
  const localStore = useContext(OrderPageStoreContext);
  if (!localStore) {
    throw new Error("Missing local store");
  }
  return localStore;
};

const OrderPage: React.FC<{}> = observer(() => {
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

const OrderPageCounter: React.FC<{}> = observer(() => {
  const orderPageStore = useOrderPageStore();
  return <div>In OrderPageCounter: {orderPageStore.counter}</div>;
});

const OrderPageButton: React.FC<{}> = () => {
  const orderPageStore = useOrderPageStore();
  return <button onClick={orderPageStore.increment}>Add</button>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OrderPage />
      </header>
    </div>
  );
}

export default App;
