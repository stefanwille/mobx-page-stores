import { observer } from "mobx-react-lite";
import "mobx-react-lite/optimizeForReactDom";
import React from "react";
import { useRootStore } from "../../store/RootStoreContext";

export const UserView: React.FC<{}> = observer(() => {
  const rootStore = useRootStore();

  const { user } = rootStore.orderPageStore;
  if (!user) {
    // Not loaded yet
    return null;
  }

  return (
    <div>
      <h2>User</h2>

      <div>id: {user.id}</div>
      <div>userId: {user.userId}</div>
      <div>title: {user.title}</div>
      <div>completed: {user.completed}</div>
    </div>
  );
});
