import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const handleSearch = createAsyncThunk('fetch/data-fetch',async(endpoint)=>{
  try{
  const apiKey = import.meta.env.VITE_APIKEY;
  const resp = await fetch(`https://api.spoonacular.com/recipes/${endpoint}apiKey=${apiKey}`)
  const json = await resp.json()
  return json
  }
  catch(err){
    console.log(err)
  }
})


export const fetchSlice = createSlice({
  name: 'fetch',
  initialState: {
    data: [],
    loading:null,
    error:null
  },
  extraReducers:(builder)=>{
    builder
    .addCase(handleSearch.pending, (state)=>{
      state.data =[],
      state.loading=true
    })
    .addCase(handleSearch.fulfilled,(state,action)=>{
      state.data = action.payload,
      state.loading=false
    })
    .addCase(handleSearch.rejected, (state,action)=>{
      state.data =[],
      state.loading=false,
      state.error=action.payload
    })
  }
})

export default fetchSlice.reducer