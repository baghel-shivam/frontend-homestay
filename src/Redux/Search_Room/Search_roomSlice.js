import { SearchRoomDeskTop } from './Search_roomAction';
import { createSlice } from '@reduxjs/toolkit';

// Create a slice for the main API data
const Search_Room = createSlice({
  name: 'main_api',
  initialState: {
    formData: JSON.parse(localStorage.getItem('formData')) || null, // Restore form data from localStorage
    data: JSON.parse(localStorage.getItem('apiData')) || [], // Restore API data from localStorage
    status: 'idle',
    error: null,
  },
  reducers: {
    updateFormData(state, action) {
      state.formData = action.payload;
      localStorage.setItem('formData', JSON.stringify(action.payload)); // Save form data to localStorage
    },
    restoreState(state, action) {
      state.data = action.payload;
      localStorage.setItem('apiData', JSON.stringify(action.payload)); // Save API data to localStorage
    },
  },
  extraReducers: (builder) => {
    // Add extra reducers for handling API responses
    builder
      .addCase(SearchRoomDeskTop.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(SearchRoomDeskTop.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null; // Reset error on success
        localStorage.setItem('apiData', JSON.stringify(action.payload)); // Save API data to localStorage on success
      })
      .addCase(SearchRoomDeskTop.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export action creators
export const { updateFormData, restoreState } = Search_Room.actions;

// Export the reducer
export default Search_Room.reducer;
