import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const handleFetch = createAsyncThunk('fetch/data-fetch',async(endpoint)=>{
  try{
  const resp = await fetch(`https://api.spoonacular.com/recipes/${endpoint}`)
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
    .addCase(handleFetch.pending, (state)=>{
      state.data =[],
      state.loading=true
    })
    .addCase(handleFetch.fulfilled,(state,action)=>{
      state.data = action.payload,
      state.loading=false
    })
    .addCase(handleFetch.rejected, (state,action)=>{
      state.data =[],
      state.loading=false,
      state.error=action.payload
    })
  }
})

export default fetchSlice.reducer