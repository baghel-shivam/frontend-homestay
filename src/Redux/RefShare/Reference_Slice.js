import { createSlice } from '@reduxjs/toolkit';

const RefSlice = createSlice({
  name: 'ref',
  initialState: {
    Contact_ref: null,
    About_US_ref: null,
    Landing_ref: null
  },
  reducers: {
    StoreContactRef(state, action) {
      state.Contact_ref = action.payload;
    },
    StoreAbout_us_Ref(state, action) {
      state.About_US_ref = action.payload;
    },
    StoreLanding_Ref(state, action) {
      state.Landing_ref = action.payload;
    },

  },
});

export const { StoreContactRef, StoreAbout_us_Ref, StoreLanding_Ref } = RefSlice.actions;

export default RefSlice.reducer;
