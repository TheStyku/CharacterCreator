import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import attributesReducer from '../features/attributes/attributesSlice';
import skillsReducer from '../features/skills/skillsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    attributes: attributesReducer,
    skills: skillsReducer,
  },
});
