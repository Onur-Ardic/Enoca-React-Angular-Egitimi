import { configureStore } from '@reduxjs/toolkit'
import { newsSlice } from '../redux/NewsSlice'

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
})
