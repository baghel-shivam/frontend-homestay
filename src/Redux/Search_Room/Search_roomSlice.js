import { SearchRoomDeskTop } from './Search_roomAction';
import { createSlice } from '@reduxjs/toolkit';

const Search_Room = createSlice({
    name: 'main_api',
    initialState: {
        formData: null,
        data: [],
        status: 'idle',
        error: null
    },

    reducers: {
        updateFormData(state, action) {
            state.formData = action.payload;
        },
        restoreState(state, action){
            state.data = action.payload;
        }
    },
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

export const { updateFormData, restoreState } = Search_Room.actions;
export default Search_Room.reducer;
