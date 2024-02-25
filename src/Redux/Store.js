// store.js
import { configureStore } from '@reduxjs/toolkit';
import SearchRoomReducer from './Search_Room/Search_roomSlice'
import BookingSlice from './Booking/BookingSlice';
import BookingDetailsSlice from './BookingDetails/BookingDetailsSlice';
const store = configureStore({
  reducer: {
    SearchRoom: SearchRoomReducer,
    Booking: BookingSlice,
    Booking_Details: BookingDetailsSlice,
  },
});

export default store;
