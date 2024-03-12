import React, { useEffect } from 'react'
import { useState } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SearchRoomDeskTop } from '../Redux/Search_Room/Search_roomAction';
import Loading from './Loading';


export default function Form() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({ "checkin_date": null, "checkout_date": null, "location": '' })
    const state1 = useSelector((state) => state?.SearchRoom)
    const [formError, setFormError] = useState()
    const [value, onChange] = useState([new Date(), new Date()]);

    const handleChange = (e) => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })
    }

    useEffect(() => {
        if (Array.isArray(value) && value.length === 2 && value[0] && value[1]) {
            const date_check_in = new Date(value[0]);
            const date_check_out = new Date(value[1]);
            const year_check_in = date_check_in.getFullYear();
            const month_check_in = String(date_check_in.getMonth() + 1).padStart(2, '0');
            const day_check_in = String(date_check_in.getDate()).padStart(2, '0');
            const formattedDate_check_in = `${year_check_in}-${month_check_in}-${day_check_in}`;
            const year_check_out = date_check_out.getFullYear();
            const month_check_out = String(date_check_out.getMonth() + 1).padStart(2, '0');
            const day_check_out = String(date_check_out.getDate()).padStart(2, '0');
            const formattedDate_check_out = `${year_check_out}-${month_check_out}-${day_check_out}`;
            setData({ ...data, "checkin_date": formattedDate_check_in, "checkout_date": formattedDate_check_out });
        }
    }, [onChange, value]);


    function DateRange() {
        return (
            React.createElement('div', null,
                React.createElement(DateRangePicker, { onChange: onChange, value: value })
            )
        );
    }
    function compareDates(checkIn, checkOut) {
        console.log(checkIn, checkOut);
        if (checkIn !== null && checkOut !== null) {
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
        } else {
            return "Check-in or Check-out date is null";
        }
    }



    const handleSubmit = (e) => {
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
    console.log(state1)
    return (
        <div className='sub_child  px-lg-5 '>

            {state1?.status === 'loading' && <><Loading /></>}

            <form onSubmit={handleSubmit}>
                <div className="container px-0 check-form d-flex flex-wrap align-items-center justify-content-center h-auto w-auto m-auto" style={{ width: '100%' }}>
                    <div className="my-1 mx-1" style={{ flex: '1' }}>
                        <input type="location" required onChange={handleChange} value={data?.location} name='location' className="form-control" id="exampleFormControlInput1" placeholder="Enter Location or pin" style={{ width: '100%' }} />
                    </div>
                    <div className="my-1 mx-1" style={{ flex: '1' }}>
                        {DateRange()}
                    </div>
                    <div className="mx-1 d-flex flex-wrap align-items-center justify-content-center h-auto w-auto m-auto" style={{ flex: '.0.1' }}>
                        <button className='m-auto' type='submit' id='Main-button' style={{ background: "white", color: 'white', borderRadius: '.5rem', padding: '.89rem' }}>
                            <i className="bi bi-search" type='submit' ></i>
                        </button>
                    </div>
                </div>
            </form>


        </div >
    )
}
