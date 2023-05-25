import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const handleSearch = createAsyncThunk('fetch/data-fetch', async (query) => {
    const apiKey = import.meta.env.VITE_APIKEY;
    const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=30&apiKey=${apiKey}`)
    const json = await resp.json()
    if(!resp.ok){
      throw new Error(json.message)
    }
    else if(resp.ok && json.results.length<1){
      throw new Error("Nothing found")
    }
    return json
})


export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: [],
    loading: null,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleSearch.pending, (state) => {
          state.data = [],
          state.loading = true,
          state.error = null
      })
      .addCase(handleSearch.fulfilled, (state, action) => {
        state.data = action.payload,
        state.error = null,
        state.loading = false
      })
      .addCase(handleSearch.rejected, (state, err) => {
        console.log(err)
        state.data = [],
        state.loading = false
        state.error = err.error.message
      })
  }
})

export default searchSlice.reducer