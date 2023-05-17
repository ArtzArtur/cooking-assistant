import { configureStore } from '@reduxjs/toolkit'
import fetchReducer from './store/fetchSlice'
export default configureStore({
  reducer: {
    fetch: fetchReducer
  },
})