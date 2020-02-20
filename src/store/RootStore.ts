import { configure, observable } from "mobx";

configure({ enforceActions: "always" });

export class RootStore {
  @observable
  masterData: string = "Hello";

  @observable
  stepSize = 1;
}
