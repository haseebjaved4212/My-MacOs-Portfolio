import { locations } from "#constants";
import { create} from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(immer((set) => ({
    activeLocations: DEFAULT_LOCATION,
    setActiveLocation: (location = null) => set((state) => {
        state.activeLocations = location;
    }),
    resetActiveLocation: () => set((state) => {
    state.activeLocations = DEFAULT_LOCATION;
}),
})));



export default useLocationStore;