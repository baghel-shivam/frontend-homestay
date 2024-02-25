import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../BaseURL";

export const BookingDetails = createAsyncThunk('booking_details/BookingDetails', async (data) => {
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
        console.log(response, 'this is response')
        return response.data
    } catch (error) {
        console.error('Error fetching room search:', error);
        throw error;
    }
})