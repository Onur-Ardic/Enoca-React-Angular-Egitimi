import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'

export const setCountry = createAction('news/setCountry')

const initialState = {
  news: {
    technology: [],
    health: [],
    spor: [],
    all: [],
  },
  loading: false,
  country: '',
}

export const selectNews = (state) => state.news.news

export const newsAllİtem = createAsyncThunk('news/all', async (_, thunkAPI) => {
  const country = thunkAPI.getState().news.country
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=fb44ce1bd88740d4990d843834598291`,
  )

  return response.data
})

export const getTechnologyNews = createAsyncThunk('news/technology', async (_, thunkAPI) => {
  const country = thunkAPI.getState().news.country

  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=technology&country=${country}&apiKey=fb44ce1bd88740d4990d843834598291`,
  )

  const responseData = await response.data

  return responseData
})

export const getHealthNews = createAsyncThunk('news/health', async (_, thunkAPI) => {
  const country = thunkAPI.getState().news.country
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=health&country=${country}&apiKey=fb44ce1bd88740d4990d843834598291`,
  )

  const responseData = await response.data

  return responseData
})

export const getSporNews = createAsyncThunk('news/spor', async (_, thunkAPI) => {
  const country = thunkAPI.getState().news.country
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=health&country=${country}&apiKey=fb44ce1bd88740d4990d843834598291`,
  )

  console.log(responseData)
  const responseData = await response.data

  return responseData
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
        state.news.technology = action.payload
        state.loading = false
      })
      .addCase(getHealthNews.fulfilled, (state, action) => {
        state.news.health = action.payload
        state.loading = false
      })
      .addCase(getSporNews.fulfilled, (state, action) => {
        state.news.spor = action.payload
        state.loading = false
      })
      .addCase(newsAllİtem.fulfilled, (state, action) => {
        state.news.all = action.payload
        state.loading = false
      })
  },
})

export const {} = newsSlice.actions

export default newsSlice.reducer
