import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../BaseURL";

export const ViewDetails = createAsyncThunk('booking/ViewDetails', async (data) => {
    try {
        const config = {
            method: 'get',
            url: `${url}/room_details/${data.id}?checkin_date=${data.checkin_date}&checkout_date=${data.checkout_date}`,
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