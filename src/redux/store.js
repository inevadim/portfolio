import { configureStore } from '@reduxjs/toolkit';

import toDoListReducer from './toDoListSlice';
import shopReducer from './shopSlice';
export const store = configureStore({
  reducer: {
    toDoList: toDoListReducer,
    shop: shopReducer,
  },
});
