import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants'
import { create } from 'zustand'
import {immer} from 'zustand/middleware/immer'

const useWindowStore = create(immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
}
)))
