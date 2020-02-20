import "mobx-react-lite/optimizeForReactDom";
import React from "react";
import "./App.css";
import { OrderPage } from "./pages/OrderPage/OrderPage";

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
