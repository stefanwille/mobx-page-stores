import React, { useContext, useState } from "react";
import "./App.css";
import { observer } from "mobx-react-lite";
import { observable } from "mobx";

class OrderPageStore {
  @observable
  counter = 0;
}

const OrderPageStoreContext = React.createContext(new OrderPageStore());
const OrderPageStoreProvider = OrderPageStoreContext.Provider;
const useOrderPageStore = () => useContext(OrderPageStoreContext);

const OrderPage: React.FC<{}> = () => {
  const [orderPageStore] = useState<OrderPageStore>(() => new OrderPageStore());
  return (
    <OrderPageStoreProvider value={orderPageStore}>
      <div>
        <h1>OrderPage</h1>

        <OrderPageCounter />
        <OrderPageButton />
      </div>
    </OrderPageStoreProvider>
  );
};

const OrderPageCounter: React.FC<{}> = observer(() => {
  const store = useOrderPageStore();
  return <div>Counter: {store.counter}</div>;
});

const OrderPageButton: React.FC<{}> = () => {
  const store = useOrderPageStore();
  return (
    <button
      onClick={() => {
        store.counter += 1;
      }}
    >
      Add
    </button>
  );
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
