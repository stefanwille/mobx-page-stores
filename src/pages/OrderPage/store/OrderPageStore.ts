import { action, observable } from "mobx";
import { RootStore } from "../../../store/RootStore";

export class OrderPageStore {
  // As described here: https://mobx.js.org/best/store.html#combining-multiple-stores
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  rootStore: RootStore;

  @observable
  counter = 0;

  @action.bound
  increment() {
    this.counter += this.rootStore.stepSize;
  }
}
