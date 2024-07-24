import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AddNewProperty } from './AddPropAction';

const initialState = {
    data: [],
    status: '',
    error: null
};

const addPropSlice = createSlice({
    name: 'addProp',
    initialState,
    reducers: {
        resetAddPropStatus(state) {
            state.status = '';
        },
    },
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

export const { resetAddPropStatus } = addPropSlice.actions;
export default addPropSlice.reducer;
