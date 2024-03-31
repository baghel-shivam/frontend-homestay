import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SearchRoomDeskTop } from '../Redux/Search_Room/Search_roomAction';
import Loading from './Loading';
import { updateFormData } from '../Redux/Search_Room/Search_roomSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Form() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({ "checkin_date": null, "checkout_date": null, "location": '' })
    const state1 = useSelector((state) => state?.SearchRoom)
    const [value, onChange] = useState([new Date(), new Date()]);
    const ref = useRef()
    const handleChange = (e) => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })
    }
    const [isHighlighted, setIsHighlighted] = useState(false);

    const handleHighlight = () => {
        setIsHighlighted(!isHighlighted);
    };
    const notify = (msg) => toast.error(msg,
        {
            position: 'top-right',
            toastContainerClassName: 'custom-toast-container',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        }
    );


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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const compareDate = compareDates(data.checkin_date, data.checkout_date);
        if (compareDate === true) {
            if (data) {
                try {
                    await dispatch(SearchRoomDeskTop(data));
                    await dispatch(updateFormData(data));
                    navigate('/search-rooms', { state: { searchData: data } });
                } catch (error) {
                    notify('API call failed');
                }
            }
        } else {
            return notify(compareDate);
        }
    }


    return (
        <div className='sub_child'>
            {state1?.status === 'loading' && <><Loading /></>}
            <form onSubmit={handleSubmit}>
                <div className="container px-0 check-form">
                    <div className="flex-item my-1 " style={{ position: 'relative', zIndex: '9999' }}>
                        <label className='location-label'>Where to ?</label>
                        <input type="location" required onChange={handleChange} value={data?.location} name='location' className="form-control" id="exampleFormControlInput1" placeholder="Enter Location, pin or property" style={{ width: '100%' }} />
                    </div>
                    <div className={'my-1 highlighted flex-item '} ref={ref} onClick={handleHighlight} style={{ position: 'relative' }}>
                        {DateRange()}
                        <label className='date-label'>When to ?</label>
                    </div>
                    <div className='flex-item'>
                        <button className='m-auto btn text-dark add-new-property' type='submit' id='Main-button' style={{ background: "white", color: 'white', borderRadius: '100px', padding: '29px' }}>
                            <span className="text px-2">Search</span><span className='mt-2'><i class="bi bi-search fs-5"></i></span>
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div >
    )
}
