import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  isLogin: boolean;
  username: string;
  login: (username: string) => Promise<{
    username: string;
  }>;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isLogin: false,
      username: "",
      login: async (username) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        set({ username: data.name || "mhasnanr" });
        set({ isLogin: true });
        return data;
      },
    }),
    {
      name: "user-info",
    }
  )
);

export default useUserStore;
