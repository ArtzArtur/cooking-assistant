import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const handleRandomReceipts = createAsyncThunk('randomReceipts',async()=>{
  const apiKey = import.meta.env.VITE_APIKEY
  const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?random?number=5&apiKey=${apiKey}`)
  return resp.json()
})

export const randomSlice = createSlice({
  name:"randomReceipts",
  initialState:{
    data:[],
    loading:null,
    error:null
  },
  extraReducers:builder=>{
    builder
    .addCase(handleRandomReceipts.pending,(state)=>{
      state.data = []
      state.loading = true
    })
    .addCase(handleRandomReceipts.fulfilled,(state,action)=>{
      state.loading = false
      state.data = action.payload
    })
    .addCase(handleRandomReceipts.rejected,(state,action)=>{
      state.loading = false
      state.error = action.error
    })
  }
})

export default randomSlice.reducer