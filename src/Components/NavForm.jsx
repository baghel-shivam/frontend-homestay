import React, { useEffect } from 'react'
import { useState } from 'react'
// import { useHistory } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SearchRoomDeskTop } from '../Redux/Search_Room/Search_roomAction';
import Loading from './Loading';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function NavForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({ "checkin_date": null, "checkout_date": null })
    const state1 = useSelector((state) => state?.SearchRoom)
    const [formError, setFormError] = useState()
    const [value, onChange] = useState([new Date(), new Date()]);


    const handleChange = (e) => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })
    }

    
    useEffect(() => {
        const date_check_in = new Date(value[0]);
        const date_check_out = new Date(value[1]);
        const formattedDate_check_in = `${(date_check_in.getMonth() + 1).toString().padStart(2, '0')}/${date_check_in.getDate().toString().padStart(2, '0')}/${date_check_in.getFullYear()}`;
        const formattedDate_check_out = `${(date_check_out.getMonth() + 1).toString().padStart(2, '0')}/${date_check_out.getDate().toString().padStart(2, '0')}/${date_check_out.getFullYear()}`;
        console.log(formattedDate_check_in)
        console.log(formattedDate_check_out)
        setData({ ...data, "checkin_date": formattedDate_check_in, "checkout_date": formattedDate_check_out })
    }, [onChange, value])
    function DateRange() {
        return (
            React.createElement('div', null,
                React.createElement(DateRangePicker, { onChange: onChange, value: value })
            )
        );
    }
    function compareDates(checkIn, checkOut) {
        const [inY, inM, inD] = checkIn.split('-').map(Number);
        const [outY, outM, outD] = checkOut.split('-').map(Number);
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        const currentDay = now.getDate();
        const currentDate = new Date(currentYear, currentMonth, currentDay);
        const checkInDateOnly = new Date(inY, inM - 1, inD);
        const checkOutDateOnly = new Date(outY, outM - 1, outD);

        if (checkInDateOnly >= currentDate && checkOutDateOnly > checkInDateOnly) {
            return true;
        } else if (checkInDateOnly < currentDate) {
            return "Check-in date should be equal to or greater than the current date";
        } else {
            return "Check-out date should be greater than the check-in date";
        }
    }



    const handleSubmit = (e) => {
        console.log(data)
        const compareDate = compareDates(data.checkin_date, data.checkout_date)
        console.log(compareDate)
        e.preventDefault()
        if (compareDate === true) {

            if (data) {
                dispatch(SearchRoomDeskTop(data));
                setTimeout(() => {
                    navigate('/search-rooms');
                }, 1000);
            }

        } else {
            setFormError({ 'error': compareDate })
        }

    }

    return (
        <div className='nav-form'>
            <h4 className='text-start px-3'>Search Rooms</h4>
            <hr className='mt-4'/>
            {state1?.status === 'loading' && <><Loading /></>}
            <div className='mt-5 pt-1'>
                <form className='' onSubmit={handleSubmit}>
                    <div className="container check-form">
                        <div className=" my-1">
                            <label for="Location" id='color' className="col-sm-2  ">Location</label>
                            <input type="location" required onChange={handleChange} value={data?.location} name='location' className="form-control" id="exampleFormControlInput1" placeholder="Enter Location or pin" />
                        </div>
                        <div className="my-3">
                            <label for="staticEmail" id='color' className="col-sm-2 text-center w-100">{formError?.error ? <span style={{ fontSize: "10px", color: 'red' }}> {formError?.error}</span> : 'Check in / Check out Date'}</label>
                            {DateRange()}
                        </div>

                        <div className=" align-self-center text-center my-1  px-0 px-sm-5">
                            <button className='m-auto mt-4' type='submit' id='Main-button' style={{ background: "black", color: 'white', borderRadius: '50%' }}>
                                <i className="bi bi-search" type='submit' ></i>
                            </button>
                        </div>
                    </div>
                </form>


            </div>

        </div >
    )
}
