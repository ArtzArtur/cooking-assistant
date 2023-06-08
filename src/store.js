import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './store/searchSlice'
import detailsReducer from './store/detailsSlice'
import randomReceiptsSlice from './store/randomReceiptsSlice'
import nutritionSlice from './nutritionSlice'
export default configureStore({
  reducer: {
    search: searchReducer,
    details: detailsReducer,
    random: randomReceiptsSlice,
    nutrition: nutritionSlice
  },
})