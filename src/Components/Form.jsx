import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SearchRoomDeskTop } from '../Redux/Search_Room/Search_roomAction';
// import { UseSelector } from 'react-redux';

export default function Form() {
    const [data, setData] = useState()
    const state1 = useSelector((state) => state?.SearchRoom)

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (data) {
            dispatch(SearchRoomDeskTop(data));
            navigate('/search-rooms')
        }
    }

    return (
        <div className='sub_child px-3 px-lg-5 '>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 align-self-center my-1">

                        <label for="Location" id='color' className="col-sm-2  ">Location</label>
                        <input type="location" required onChange={handleChange} name='location' className="form-control" id="exampleFormControlInput1" placeholder="Enter Location" />

                    </div>
                    <div className="col-sm-12 col-lg-3 col-md-6 align-self-center my-1">

                        <label for="staticEmail" id='color' className="col-sm-2 text-center">Arrival</label>
                        <input type="date" required onChange={handleChange} name='checkin_date' className="form-control" id="exampleFormControlInput1" placeholder="Select Arrival" />


                    </div>
                    <div className="col-sm-12 col-lg-3 col-md-6 align-self-center my-1">
                        <label for="staticEmail" id='color' className="col-sm-2 text-center ">Departure</label>

                        <input type="date" required onChange={handleChange} name='checkout_date' className="form-control" id="exampleFormControlInput1" placeholder="Select Departure" />

                    </div>
                    <div className="col-sm-12 col-lg-2 col-md-6  align-self-center text-center my-1  px-0 px-sm-5">
                        <button type='submit' id='Main-button' className='btn  px-4  mt-4'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
