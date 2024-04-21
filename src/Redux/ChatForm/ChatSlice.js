import { ChatMessages } from './ChatAction';
import { createSlice } from '@reduxjs/toolkit';

const ChatSlice = createSlice({
    name: 'booking',
    initialState: {
        data: [],
        status: '',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ChatMessages.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(ChatMessages.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.error = null; // Reset error on success
            })
            .addCase(ChatMessages.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default ChatSlice.reducer;
