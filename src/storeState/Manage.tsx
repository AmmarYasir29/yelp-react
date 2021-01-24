import create from "zustand";

type State = {
  restaurant: [];
  setRestaurant: (by: any[]) => void; // type array of obj
};

const useStore = create<State>((set) => ({
  restaurant: [],
  setRestaurant: (value: any) => set({ restaurant: value }),
}));

export default useStore;
