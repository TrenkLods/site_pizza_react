import { configureStore } from '@reduxjs/toolkit'
import filter from '../redux/slises/filterSlise'

export const store= configureStore({
  reducer: {
    filter,
  }
})