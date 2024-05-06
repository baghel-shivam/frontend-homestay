import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../BaseURL";

export const AddNewProperty = createAsyncThunk('AddProp/AddNewProperty', async (data) => {
    console.log(data, 'this is data')
    try {
        const config = {
            method: 'post',
            url: `${url}/add_new_property`,
            data: data,
            headers: {
                // Set Content-Type header for FormData
                'Content-Type': 'multipart/form-data',
                // Add other headers as needed
              },
        }
        const response = await axios(config)
        return response.data
    } catch (error) {
        alert('Something went wrong!')
        // throw error;
    }
})