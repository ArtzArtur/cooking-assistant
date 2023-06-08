import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


export const handleNutritionReceipts = createAsyncThunk(' utrition/nutrition-fetch',async(nutrition)=>{
  console.log(nutrition)
  const apiKey = import.meta.env.VITE_APIKEY;
  const resp = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?maxCarbs=${nutrition.carbs}&maxFat=${nutrition.fat}&maxProtein=${nutrition.protein}&maxCalories=${nutrition.calories}&number=5&apiKey=${apiKey}`)
  const json = await resp.json()
  console.log(json)
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
    })
    .addCase(handleNutritionReceipts.rejected,(state,action)=>{
      state.data = null
      state.loading = false
    })
  }
})


export default nutritionSlice.reducer