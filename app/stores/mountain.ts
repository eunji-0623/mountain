import type { Mountain } from '~/types/mountains';

export const useMountainStore = defineStore('mountain', {
  state: () => {
    return {
      mountainInfo: [] as Mountain[],
    };
  },
  getters: {
    getMountainInfo: (state): Mountain[] => state.mountainInfo,
    completedCount: (state): number => {
      return state.mountainInfo.filter((item) => item.completed !== 0).length;
    },
  },
  actions: {
    setMountainInfo(data: Mountain[]) {
      this.mountainInfo = data;
    },
  },
});
