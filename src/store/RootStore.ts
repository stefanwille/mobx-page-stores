import { configure, observable } from "mobx";
import { OrderPageStore } from "../pages/OrderPage/store/OrderPageStore";

configure({ enforceActions: "always" });

export class RootStore {
  @observable
  masterData: string = "Hello";

  @observable
  stepSize = 1;

  // As described here: https://mobx.js.org/best/store.html#combining-multiple-stores
  @observable
  _orderPageStore: OrderPageStore | null = null;

  get orderPageStore(): OrderPageStore {
    if (!this._orderPageStore) {
      throw new Error("Missing _orderPageStore");
    }
    return this._orderPageStore;
  }
}
