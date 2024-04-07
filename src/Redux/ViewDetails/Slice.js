import { ViewDetails } from './Action';
import { createSlice } from '@reduxjs/toolkit';

const ViewDetails_slice = createSlice({
    name: 'booking',
    initialState: {
        data: [],
        status: '',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ViewDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(ViewDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.error = null; // Reset error on success
            })
            .addCase(ViewDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default ViewDetails_slice.reducer;
