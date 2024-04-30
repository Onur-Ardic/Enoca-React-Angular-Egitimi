import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'

export const setCountry = createAction('news/setCountry')

const initialState = {
  news: [],
  loading: false,
  country: '',
}

export const getTechnologyNews = createAsyncThunk('news/technology', async (_, thunkAPI) => {
  const country = thunkAPI.getState().news.country
  console.log(country)

  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=technology&country=${country}&apiKey=fb44ce1bd88740d4990d843834598291`,
  )
  console.log(response)
  return response.data
})

export const getHealthNews = createAsyncThunk('news/health', async (_, thunkAPI) => {
  const country = thunkAPI.getState().news.country
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=health&country=${country}&apiKey=fb44ce1bd88740d4990d843834598291`,
  )
  console.log(response)
  return response.data
})

export const getSporNews = createAsyncThunk('news/spor', async (_, thunkAPI) => {
  const country = thunkAPI.getState().news.country
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=health&country=${country}&apiKey=fb44ce1bd88740d4990d843834598291`,
  )
  console.log(response)
  return response.data
})

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload
    },
  },
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
