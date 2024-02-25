import { SearchRoomDeskTop } from './Search_roomAction';
import { createSlice } from '@reduxjs/toolkit';

const Search_Room = createSlice({
    name: 'main_api',
    initialState: {
        data: [],
        status: 'idle',
        error: null // Change error to null initially
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(SearchRoomDeskTop.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(SearchRoomDeskTop.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.error = null; // Reset error on success
            })
            .addCase(SearchRoomDeskTop.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default Search_Room.reducer;
