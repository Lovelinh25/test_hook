// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import breedsReducer from '../features/breeds/breedsSlice';

const store = configureStore({
  reducer: {
    breeds: breedsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
