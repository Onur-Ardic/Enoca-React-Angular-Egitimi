import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    value: 0,
  },
})
