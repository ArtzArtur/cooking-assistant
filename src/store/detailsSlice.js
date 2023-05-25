import {createAsyncThunk, createSlice, isRejectedWithValue} from '@reduxjs/toolkit'


export const handleDetails = createAsyncThunk('details/details-fetch',async(id)=>{
  const apiKey = import.meta.env.VITE_APIKEY;
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
  const json = await response.json()
  if(!response.ok){
    throw new Error(json.message)
  }
  return json
})



export const detailsSlice = createSlice({
  name:'details',
  initialState:{
    details:null,
    loading:null,
    error:null
  },
  extraReducers:(builder)=>{
    builder
    .addCase(handleDetails.pending,(state)=>{
      state.details = null,
      state.loading = true
    })
    .addCase(handleDetails.fulfilled,(state,action)=>{
      state.loading = false,
      state.details = action.payload
    })
    .addCase(handleDetails.rejected,(state,err)=>{
      console.log(err)
      state.loading = false,
      state.details = null,
      state.error = err.error.message
    })
  }
})

export default detailsSlice.reducer