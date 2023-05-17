import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const handleFetch = createAsyncThunk('data-fetch',async(endpoint)=>{
  const resp = await fetch(`https://api.spoonacular.com/recipes/${endpoint}`)
  const json = await resp.json()
  console.log(json)
  return json
})


export const fetchSlice = createSlice({
  name: 'fetch',
  initialState: {
    data: [],
    loading:null,
    error:null
  },
  extraReducers:{
    [handleFetch.pending]: (state,action)=>{
      state.loading=true
    },
    [handleFetch.fulfilled]:(state,action)=>{
      state.data = action.payload,
      state.loading=false
    },
    [handleFetch.rejected]: (state,action)=>{
      state.error=action.payload,
      state.loading=false
    }
  }
})

export default fetchSlice.reducer