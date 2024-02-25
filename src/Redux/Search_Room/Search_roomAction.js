import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../BaseURL";

export const SearchRoomDeskTop = createAsyncThunk('main_api/SearchRoomDeskTop', async (data) => {
    try {
        const config = {
            method: 'post',
            url: `${url}/room_search`,
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