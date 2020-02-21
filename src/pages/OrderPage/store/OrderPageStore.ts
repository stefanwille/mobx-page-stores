import { action, observable, runInAction } from "mobx";
import { RootStore } from "../../../store/RootStore";

export class User {
  constructor(data: any) {
    this.userId = data.userId;
    this.id = data.id;
    this.title = data.title;
    this.completed = data.completed;
  }

  @observable
  userId: number;

  @observable
  id: number;

  @observable
  title: string;

  @observable
  completed: boolean;
}

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

  @action setUser(user: User) {
    this.user = user;
  }

  @action makeUser(data: any) {
    const user = new User(data);
    this.setUser(user);
  }

  @action
  async loadUserById(id: number): Promise<void> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const data = await response.json();
    this.makeUser(data);
  }
}
