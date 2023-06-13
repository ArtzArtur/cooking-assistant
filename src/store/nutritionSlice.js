import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


export const handleNutritionReceipts = createAsyncThunk(' utrition/nutrition-fetch',async(nutrition)=>{
  const apiKey = import.meta.env.VITE_APIKEY;
  const resp = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?maxCarbs=${nutrition.carbs}&maxFat=${nutrition.fat}&maxProtein=${nutrition.protein}&maxCalories=${nutrition.calories}&number=20&apiKey=${apiKey}`)
  const json = await resp.json()
  if(!resp.ok){
    throw new Error(json.message)
  }
  else if(resp.ok && json.length<1){
    throw new Error("Nothing found")
  }
  return json
})

export const nutritionSlice = createSlice({
  name:"nutrition",
  initialState:{
    data:null,
    loading:null,
    error:null
  },
  extraReducers:builder=>{
    builder
    .addCase(handleNutritionReceipts.pending,(state)=>{
      state.data = null
      state.loading = true
    })
    .addCase(handleNutritionReceipts.fulfilled,(state,action)=>{
      state.data = action.payload
      state.loading = false
      state.error=null
    })
    .addCase(handleNutritionReceipts.rejected,(state,err)=>{
      state.data = null
      state.loading = false
      state.error=err.error.message
    })
  }
})


export default nutritionSlice.reducer