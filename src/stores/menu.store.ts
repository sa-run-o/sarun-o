import { create } from "zustand";
import { MENU_TYPE } from "../interfaces/menu.interface";

interface MenuStore {
  currentPage: MENU_TYPE;
  setCurrentPage: (page: MENU_TYPE) => void;
}

const useMenuStore = create<MenuStore>()((set) => ({
  currentPage: "HOME",
  setCurrentPage: (page) => set(() => ({ currentPage: page })),
}));
export default useMenuStore;
