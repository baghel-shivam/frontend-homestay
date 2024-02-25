import { BookingDetails } from '../BookingDetails/BookingDetailsAction';
import { createSlice } from '@reduxjs/toolkit';

const BookingDetailsSlice = createSlice({
    name: 'booking_details',
    initialState: {
        data: [],
        status: '',
        error: null // Change error to null initially
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(BookingDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(BookingDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.error = null; // Reset error on success
            })
            .addCase(BookingDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});
export default BookingDetailsSlice.reducer;
