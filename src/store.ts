import { create } from 'zustand';

interface ProductQuery {
  categorySlug?: string;
  sortOrder?: string;
  sortType?: string;
  searchText?: string;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setSearchText: (searchText: string) => void;
  setCategorySlug: (categorySlug: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setSortType: (sortType: string) => void;
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
  productQuery: {},
  setSearchText: (searchText) => set(() => ({ productQuery: { searchText } })),
  setCategorySlug: (categorySlug) =>
    set((store) => ({ productQuery: { ...store.productQuery, categorySlug } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ productQuery: { ...store.productQuery, sortOrder } })),
  setSortType: (sortType) =>
    set((store) => ({ productQuery: { ...store.productQuery, sortType } })),
}));

export default useProductQueryStore