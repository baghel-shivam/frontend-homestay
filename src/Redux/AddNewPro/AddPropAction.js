import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../BaseURL";

export const AddNewProperty = createAsyncThunk('AddProp/AddNewProperty', async (data) => {
    try {
        const config = {
            method: 'post',
            url: `${url}/add_new_property`,
            data: data,
            header: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios(config)
        return response.data
    } catch (error) {
        alert('Something went wrong!')
        // throw error;
    }
})