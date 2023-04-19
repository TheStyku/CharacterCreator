import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import attributesReducer from '../features/attributes/attributesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    attributes: attributesReducer,
  },
});
