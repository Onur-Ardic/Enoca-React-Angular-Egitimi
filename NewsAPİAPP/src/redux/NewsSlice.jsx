import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  news: [],
  loading: false,
}

export const getTechnologyNews = createAsyncThunk('news/technology', async (country) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=technology&country=${country}&apiKey=fb44ce1bd88740d4990d843834598291`,
  )
  console.log(response.data)
  return response.data
})

export const getHealthNews = createAsyncThunk('news/health', async (country) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=health&country=${country}&apiKey=fb44ce1bd88740d4990d843834598291`,
  )

  return response.data
})

export const getSporNews = createAsyncThunk('news/spor', async (country) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=health&country=${country}&apiKey=fb44ce1bd88740d4990d843834598291`,
  )

  return response.data
})

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTechnologyNews.fulfilled, (state, action) => {
        state.news = action.payload
        state.loading = false
      })

      .addCase(getHealthNews.fulfilled, (state, action) => {
        state.news = action.payload
        state.loading = false
      })

      .addCase(getSporNews.fulfilled, (state, action) => {
        state.news = action.payload
        state.loading = false
      })
  },
})

export const {} = newsSlice.actions

export default newsSlice.reducer
