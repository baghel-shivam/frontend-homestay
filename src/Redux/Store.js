// store.js
import { configureStore } from '@reduxjs/toolkit';
import SearchRoomReducer from './Search_Room/Search_roomSlice'
import BookingSlice from './Booking/BookingSlice';
import BookingDetailsSlice from './BookingDetails/BookingDetailsSlice';
import Reference_Slice from './RefShare/Reference_Slice';
import AddPropSlice from './AddNewPro/AddPropSlice';

const Store = configureStore({
  reducer: {
    SearchRoom: SearchRoomReducer,
    Booking: BookingSlice,
    Ref: Reference_Slice,
    Booking_Details: BookingDetailsSlice,
    AddProp:AddPropSlice,
  },
});

export default Store;
