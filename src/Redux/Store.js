// store.js
import { configureStore } from '@reduxjs/toolkit';
import SearchRoomReducer from './Search_Room/Search_roomSlice'
import BookingSlice from './Booking/BookingSlice';
import BookingDetailsSlice from './BookingDetails/BookingDetailsSlice';
import Reference_Slice from './RefShare/Reference_Slice';

const store = configureStore({
  reducer: {
    SearchRoom: SearchRoomReducer,
    Booking: BookingSlice,
    Ref: Reference_Slice,
    Booking_Details: BookingDetailsSlice,
  },
});

export default store;
