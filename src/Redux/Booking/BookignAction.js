import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../BaseURL";

export const BookingRequest = createAsyncThunk('booking/BookingRequest', async (data) => {
    try {
        const config = {
            method: 'post',
            url: `${url}/booking_request`,
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