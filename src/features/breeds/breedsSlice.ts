// src/features/breeds/breedsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Breed {
  attributes: any;
  id: number;
  name: string;
  // Các thuộc tính khác của giống chó
}

interface BreedsState {
  breeds: Breed[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BreedsState = {
  breeds: [],
  status: 'idle',
  error: null,
};

export const fetchBreeds = createAsyncThunk('breeds/fetchBreeds', async () => {
  const response = await axios.get('https://dogapi.dog/api/v2/breeds');
  return response.data.data;
});

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.breeds = action.payload;
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Error fetching breeds';
      });
  },
});

export default breedsSlice.reducer;
