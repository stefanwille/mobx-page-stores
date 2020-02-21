import { RootStore } from "../../../store/RootStore";
import { OrderPageStore } from "./OrderPageStore";

describe("OrderPageStore", () => {
  describe("loadUserById", () => {
    it("loads the given user", async () => {
      const rootStore = new RootStore();
      const orderPageStore = new OrderPageStore(rootStore);
      await orderPageStore.loadUserById(1);
      expect(orderPageStore.user).not.toBeNull();
    });
  });
});
