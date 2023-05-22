import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './store/searchSlice'
export default configureStore({
  reducer: {
    search: searchReducer
  },
})