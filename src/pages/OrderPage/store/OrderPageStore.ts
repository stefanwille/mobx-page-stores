import { action, observable, runInAction } from "mobx";
import { RootStore } from "../../../store/RootStore";
import { User, loadUserById } from "./User";

export class OrderPageStore {
  // As described here: https://mobx.js.org/best/store.html#combining-multiple-stores
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  rootStore: RootStore;

  @observable
  counter = 0;

  @observable
  user: User | null = null;

  @action.bound
  increment() {
    this.counter += this.rootStore.stepSize;
  }

  @action
  async loadUserById(id: number): Promise<void> {
    const user = await loadUserById(id);

    runInAction(() => {
      this.user = user;
    });
  }
}
