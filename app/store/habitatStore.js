import { create } from 'zustand'

const defaultModules = [
  { id: 1, type: 'chair', position: [0, 0.5, 0], rotation: [0, 0, 0], label: 'Habitat Chair' },
  { id: 2, type: 'table', position: [2, 0.5, 1], rotation: [0, 0, 0], label: 'Habitat Table' },
  { id: 3, type: 'bed', position: [-2, 0.5, 1], rotation: [0, 0, 0], label: 'Habitat Bed' },
]

const getLabel = (type) => {
  switch (type) {
    case 'chair':
      return 'Habitat Chair'
    case 'table':
      return 'Habitat Table'
    case 'bed':
      return 'Habitat Bed'
    default:
      return 'Unknown Module'
  }
}

const useHabitatStore = create((set) => ({
  modules: defaultModules,

  addModule: (type) =>
    set((state) => ({
      modules: [
        ...state.modules,
        {
          id: Date.now(),
          type,
          label: getLabel(type),
          position: [Math.random() * 4 - 2, 0.5, Math.random() * 4 - 2],
          rotation: [0, 0, 0],
        },
      ],
    })),

  removeModule: (id) =>
    set((state) => ({
      modules: state.modules.filter((m) => m.id !== id),
    })),

  setModules: (modules) => set({ modules }),
}))

export default useHabitatStore
