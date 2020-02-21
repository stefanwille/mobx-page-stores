import { observable, runInAction } from "mobx";

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

export const loadUserById = async (id: number): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const data = await response.json();
  return runInAction(() => {
    return new User(data);
  });
};
