import React, { useEffect } from 'react'
import { useState } from 'react'
// import { useHistory } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SearchRoomDeskTop } from '../Redux/Search_Room/Search_roomAction';
import Loading from './Loading';

export default function Form() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({ "checkin_date": null, "checkout_date": null, "location":'' })
    const state1 = useSelector((state) => state?.SearchRoom)
    const [formError, setFormError] = useState()


    const handleChange = (e) => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })
    }

    const compareDates = () => {
        const inputDate2 = new Date(data.checkout_date);
        const inputDate1 = new Date(data.checkin_date);

        if (!isNaN(inputDate1.getTime()) && !isNaN(inputDate2.getTime())) {
            if (inputDate1 < inputDate2) {
                return 1;
            } else {
                return -1;
            }
        } else {
            return 0;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const date = compareDates()
        if (date == -1) {
            setFormError({ error: 'Check in date should be smaller then Check out ' })
        }
        else if (date == 0) {
            setFormError({ error: 'Invalid Date!' })
        } else {
            setFormError({ error: false })
            if (data) {
                dispatch(SearchRoomDeskTop(data));
                setTimeout(() => {
                    navigate('/search-rooms');
                }, 1000);
            }
        }

    }

    return (
        <div className='sub_child px-3 px-lg-5 '>

            {state1?.status === 'loading' && <><Loading /></>}

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 align-self-center my-1">
                        <label for="Location" id='color' className="col-sm-2  ">Location</label>
                        <input type="location" required onChange={handleChange} value={data?.location} name='location' className="form-control" id="exampleFormControlInput1" placeholder="Enter Location" />
                    </div>
                    <div className="col-sm-12 col-lg-3 col-md-6 align-self-center my-1">
                        <label for="staticEmail" id='color' className="col-sm-2 text-center w-100">{formError?.error ? <span style={{ fontSize: "10px", color: 'red' }}> {formError?.error}</span> : 'Check in Date'}</label>
                        <input type="date" required value={data?.checkin_date} onChange={handleChange} name='checkin_date' className="form-control" id="exampleFormControlInput1" placeholder="Select Arrival" />
                    </div>
                    <div className="col-8 col-lg-3 col-md-6 align-self-center my-1">
                        <label for="staticEmail" id='color' className="col-sm-2 text-center w-100">Check out Date</label>
                        <input type="date" required value={data?.checkout_date} onChange={handleChange} name='checkout_date' className="form-control" id="exampleFormControlInput1" placeholder="Select Departure" />

                    </div>
                    <div className="col-4 col-lg-2 col-md-6  align-self-center text-center my-1  px-0 px-sm-5">
                        <button className='m-auto mt-4' type='submit' id='Main-button' style={{ background: "black", color: 'white', borderRadius: '50%' }}>
                            <i class="bi bi-search" type='submit' ></i>

                        </button>
                    </div>
                </div>
            </form>



        </div >
    )
}
