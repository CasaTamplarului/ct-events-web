import { defineStore } from 'pinia'

export const useCommonStore = defineStore('commonStore', {
  state: () => ({
    scrolled: false,
    isScrollingDown: false
  }),

  getters: {
    scrolledGetter: (state) => state.scrolled,
    isScrollingDownGetter: (state) => state.isScrollingDown
  },
    
  actions: {
    togglePageScrolled(value) {
      this.scrolled = value
    },

    scrollingDown(value) {
      this.isScrollingDown = value
    }
  }
})