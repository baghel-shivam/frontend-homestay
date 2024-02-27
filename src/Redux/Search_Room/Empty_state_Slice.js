import { Empty_state } from './Search_roomAction';
import { createSlice } from '@reduxjs/toolkit';

const Empty_state = createSlice({
    name: 'main_api',
    initialState: {
        data: [],
        status: 'idle',
        error: null // Change error to null initially
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Empty_state.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(Empty_state.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.error = null; // Reset error on success
            })
            .addCase(Empty_state.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default Search_Room.reducer;
