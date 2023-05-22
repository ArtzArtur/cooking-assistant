import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


export const handleDetails = createAsyncThunk('details/details-fetch',async(id)=>{
  const apiKey = import.meta.env.VITE_APIKEY;
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}
  `)
  const json = await response.json()
  console.log(json)
  return json
})



export const detailsSlice = createSlice({
  name:'details',
  initialState:{
    details:null,
    loading:null,
    error:null
  },
})

export default detailsSlice.reducer