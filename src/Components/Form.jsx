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
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [data, setData] = useState({ "checkin_date": null, "checkout_date": null, "location": '' })
    const [showCheckIn, setShowCheckOut] = useState(true)
    const state1 = useSelector((state) => state?.SearchRoom)

    const [value, onChange] = useState([new Date(), new Date()]);
    const ref = useRef()

    const handleChange = (e) => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })

    }

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

        if (value === null) { setShowCheckOut(true) } else { setShowCheckOut(false) }


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
                    await navigate('/search-rooms', { state: { searchData: data } });
                } catch (error) {
                    notify('API call failed');
                }
            }
        } else {
            return notify(compareDate);
        }
    }

    console.log(showCheckIn, 'checkouut destini')

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
                        {showCheckIn ? <div className='d-flex justify-content-evenly w-75 position-absolute text-secondary' style={{ top: "39%", background: "white", fontSize: "17px" }}>
                            <label>Check in</label>
                            <label>-</label>
                            <label>Check out</label>
                        </div> : ""}

                        <label className='date-label'>When to ?</label>
                    </div>

                    <div className='flex-item'>
                        <button className='m-auto btn text-dark add-new-property bg-success border-none' type='submit' id='Main-button' style={{ color: 'white', borderRadius: '100px', padding: '29px' }}>
                            <span className="text px-2 text-light">Search</span><span className='mt-2'><i class="bi bi-search fs-5"></i></span>
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div >
    )
}


{/* <div className={'my-1 highlighted align-content-center flex-item dropdown'} ref={ref} onClick={handleHighlight} style={{ position: 'relative' }}>
                        <i class="bi bi-people-fill fs-5 mx-1"></i>
                        <select
                            name='guest'
                            className='py-4 dropdown px-1 border-none w-75'
                            style={{ fontSize: '18px', fontWeight: '00' }}
                            value={selectedOption}
                            onChange={handleSelectChange}
                        >
                            <option value='' selected disabled required>
                                Guest
                            </option>
                            <option value='1'>1 Guest</option>
                            <option value='2'>2 Guest</option>
                            <option value='3'>3 Guest</option>
                            <option value='4'>4 Guest</option>
                            <option value='5'>5 Guest</option>
                            <option value='6'>6 Guest</option>
                            <option value='7'>7 Guest</option>
                            <option value='8'>8 Guest</option>
                            <option value='9'>9 Guest</option>
                            <option value='10'>10 Guest</option>
                            <option value='11'>12 Guest</option>
                            <option value='12'>12 Guest</option>
                            <option value='13'>13 Guest</option>
                            <option value='14'>14 Guest</option>
                            <option value='15'>15 Guest</option>

                        </select>
                    </div> */}