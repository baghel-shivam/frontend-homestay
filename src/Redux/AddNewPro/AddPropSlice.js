// import {  } from './BookignAction';
import { AddNewProperty } from './AddPropAction';
import { createSlice } from '@reduxjs/toolkit';

const AddPropSlice = createSlice({
    name: 'AddProp',
    initialState: {
        data: [],
        status: '',
        error: null // Change error to null initially
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(AddNewProperty.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(AddNewProperty.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.error = null; // Reset error on success
            })
            .addCase(AddNewProperty.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default AddPropSlice.reducer;
