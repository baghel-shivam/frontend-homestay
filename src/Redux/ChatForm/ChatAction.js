import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../BaseURL";

export const ChatMessages = createAsyncThunk('booking/ChatMessages', async (data) => {
    try {
        const config = {
            method: 'post',
            url: `${url}/chat_mssg`,
            data: data,
            header: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios(config)
        return response.data
    } catch (error) {
        throw error;
    }
})