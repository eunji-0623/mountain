import type { Mountain } from '~/types/mountains';

export const useMountainStore = defineStore('mountain', {
  state: () => {
    return {
      mountainInfo: [] as Mountain[],
    };
  },
  getters: {
    getMountainInfo: (state): Mountain[] => state.mountainInfo,
  },
  actions: {
    setMountainInfo(data: Mountain[]) {
      this.mountainInfo = data;
    },
  },
});
