import { create } from 'zustand';

interface MenuQueryStore {
    isCategoryMenuOpen: boolean
    setCategoryMenuOpen: (val: boolean) => void
}

const useMenuStore = create<MenuQueryStore>(set => ({
    isCategoryMenuOpen: false,
    setCategoryMenuOpen: (val) => set({isCategoryMenuOpen: val})
}))
export default useMenuStore