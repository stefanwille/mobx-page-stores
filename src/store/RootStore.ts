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
  orderPageStore: OrderPageStore | null = null;
}
