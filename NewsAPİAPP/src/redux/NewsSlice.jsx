import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAction } from '@reduxjs/toolkit'

export const setCountry = createAction('news/setCountry')
export const setSearch = createAction('news/setSearch')

const initialState = {
  news: [],
  loading: false,
  country: '',
  search: '',
}

export const selectNews = (state) => state.news.news

export const selectedSearch = createAsyncThunk('search/all', async (_, thunkAPI) => {
  const search = thunkAPI.getState().news.search
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=fb44ce1bd88740d4990d843834598291`,
  )

  console.log(response.data)
  return response.data
})

export const newsAllİtem = createAsyncThunk('news/all', async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=tr&apiKey=fb44ce1bd88740d4990d843834598291`,
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

    setSearch: (state, action) => {
      state.search = action.payload
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
      .addCase(newsAllİtem.fulfilled, (state, action) => {
        state.news = action.payload
        state.loading = false
      })

      .addCase(selectedSearch.fulfilled, (state, action) => {
        state.news = action.payload
        state.loading = false
      })
  },
})

export default newsSlice.reducer
