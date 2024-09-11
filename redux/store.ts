import { configureStore } from '@reduxjs/toolkit'
import userActionsReducer from './userActionsSlice'


export default configureStore({
  reducer: {
    userActions: userActionsReducer
  },
})