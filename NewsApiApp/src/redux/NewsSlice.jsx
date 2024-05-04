import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit'
import axios from 'axios'

export const setCountry = createAction('news/setCountry')
export const setSearch = createAction('news/setSearch')

const initialState = {
  news: [],
  loading: false,
  country: 'tr',
  search: '',
}

export const selectNews = (state) => state.news.news

export const fetchNewsByCategory = createAsyncThunk(
  'news/byCategory',
  async (category, thunkAPI) => {
    const country = thunkAPI.getState().news.country
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=fb44ce1bd88740d4990d843834598291`,
    )

    return response.data
  },
)

export const selectedSearch = createAsyncThunk('search/all', async (_, thunkAPI) => {
  const search = thunkAPI.getState().news.search
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=fb44ce1bd88740d4990d843834598291`,
  )

  return response.data
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
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setNews: (state, action) => {
      state.news = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsByCategory.fulfilled, (state, action) => {
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
