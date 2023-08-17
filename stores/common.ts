import { defineStore } from 'pinia'

export const useCommonStore = defineStore('commonStore', {
  state: () => ({
    scrolled: false
  }),

  getters: {
    scrolledGetter: (state) => state.scrolled,
  },
    
  actions: {
    togglePageScrolled(value) {
      this.scrolled = value
    }
  }
})