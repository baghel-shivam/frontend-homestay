import { BookingRequest } from './BookignAction';
import { createSlice } from '@reduxjs/toolkit';

const BookingSlice = createSlice({
    name: 'booking',
    initialState: {
        data: [],
        status: '',
        error: null // Change error to null initially
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(BookingRequest.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(BookingRequest.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.error = null; // Reset error on success
            })
            .addCase(BookingRequest.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default BookingSlice.reducer;
