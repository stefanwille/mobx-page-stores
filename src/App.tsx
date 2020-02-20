import "mobx-react-lite/optimizeForReactDom";
import React from "react";
import "./App.css";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import { RootStoreProvider } from "./store/RootStoreContext";
import { useLocalStore } from "mobx-react-lite";
import { RootStore } from "./store/RootStore";

function App() {
  const rootStore = useLocalStore(() => new RootStore());
  return (
    <RootStoreProvider value={rootStore}>
      <div className="App">
        <header className="App-header">
          <OrderPage />
        </header>
      </div>
    </RootStoreProvider>
  );
}

export default App;
