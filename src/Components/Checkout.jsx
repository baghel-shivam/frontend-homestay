import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookingRequest } from '../Redux/Booking/BookignAction'
import Loading from './Loading'
import Success from './Success'
import TermsAndCond from './TermsAndCond'
import Term from '../TermAndCond.json'

export default function Checkout({ view_data, guest_room, collectRoom, selectedOption }) {
    const [data, setData] = useState()
    const [lgShow, setLgShow] = useState(false);
    const [error, setError] = useState('');
    const formData = useSelector((state) => state.SearchRoom?.formData)
    const booking = useSelector((state) => state.Booking)
    const [smShow, setSmShow] = useState(false);
    const [selecteDRooms, setSelectedRooms] = useState()
    const [roomType, setRoomType] = useState()
    const dispatch = useDispatch()
    const [formDataTC, setFormDataTC] = useState({ checked: false });

    const handleChange = (e) => {
        const event = e.target
        setData({ ...data, [event.name]: event.value })
    }

    useEffect(() => {
        const filteredData = collectRoom.filter((item) => item.bookCount > 0)
        setSelectedRooms(filteredData)
    }, [collectRoom])

    useEffect(() => {
        if (booking?.status === "succeeded") {
            const closeButton = document.querySelector(".btn-close-checkout");
            if (closeButton) {
                closeButton.click();
            }
            setSmShow(true)
        }
    }, [booking]);

    const options = {
        weekday: 'short', // Short weekday name (e.g., "Sat")
        day: 'numeric', // Numeric day of the month (e.g., "9")
        month: 'short', // Short month name (e.g., "Mar")
    };

    const HandleCloseModel = () => {
        setSmShow(false)
        window.location.reload(true)
    }
    useEffect(() => {
        setData({
            ...data,
            "check_in_date": `${formData?.checkin_date}`,
            "check_out_date": `${formData?.checkout_date}`,
            "request_location": formData?.location,
            "booking_price": parseInt(selecteDRooms?.reduce((acc, cur) => acc + (cur?.base_price * cur?.bookCount), 0)),
            "parent_room": view_data?.id,
            "selectedRooms": selecteDRooms && selecteDRooms?.map((item) => item.id)
        })
    }, [view_data, guest_room, collectRoom, selecteDRooms])




    useEffect(() => {
        if (!selecteDRooms || !Array.isArray(selecteDRooms)) return;

        const categoryCounts = selecteDRooms.reduce((acc, item) => {
            acc[item.category] = (acc[item.category] || 0) + item.bookCount;
            return acc;
        }, {});
        const formattedData = Object.entries(categoryCounts).map(([category, bookCount]) => `${bookCount} ${category}`);
        setRoomType(formattedData);


    }, [selecteDRooms]);




    const handleSubmit = (e) => {
        e.preventDefault()
        if (formDataTC.checked) {

            dispatch(BookingRequest(data))
        }
        else {
            setError('Accept Terms and Conditions first!');
        }
    }

    const Agree = (accept, closeDialog) => {
        setLgShow(closeDialog)
        if (accept) {
            setFormDataTC({ ...formDataTC, checked: true });
        }
        setError('');
    }

    console.log(guest_room, 'dddddddddd')
    return (
        <div className='checkout-container'>
            {booking?.status === 'loading' && <Loading />}
            <Success smShow={smShow} onHide={HandleCloseModel} />
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content overflow-hidden">

                        <button type="button" style={{ zIndex: '9999' }} className="btn-close btn-close-checkout" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="row overflow-hidden  ">
                            <div className="col img-checkout-div d-none d-lg-block">
                                {/* <img src={checkOut} className='checkout-img' height={250} alt='Check-out-img' /> */}
                            </div>
                            <div className="col">
                                <div className="container mt-2 text-start">
                                    <h4 id='text_color'>Request for Booking</h4>
                                    <hr />
                                </div>
                                <div className=" px-3 text-start ">
                                    <div className="row py-2">
                                        <div className="col d-flex">
                                            <div className='d-flex'>
                                                <h5><b> &#8377;
                                                    {/* {(selecteDRooms?.reduce((acc, cur) => acc + (cur?.base_price * cur?.bookCount), 0)?.toLocaleString('en-IN'))} */}
                                                    {(selecteDRooms?.reduce((acc, cur) => acc + (cur?.base_price * cur?.bookCount), 0) * formData.daysDifference)?.toLocaleString("en-IN")}
                                                </b></h5><small className='text-secondary mx-2 mt-1 '> + Tax & Fee</small></div>
                                        </div>
                                        <div className="col">
                                            <div className="fs-6">
                                                <small>{roomType && roomType?.map((_, ind) => <small className='text-warning' key={ind}> {_} </small>)}</small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row py-2 check-in-check-out-date">
                                        <div className="col-4">
                                            <small className='fw-bolder'>Check-in</small><br/>
                                            <small >
                                                {formData?.checkin_date ? (
                                                    <span>
                                                        {new Date(formData?.checkin_date).toLocaleDateString('en-US', options)}
                                                    </span>
                                                ) : (
                                                    'Invalid Date'
                                                )}
                                            </small>
                                        </div>
                                        <div className="col-4">
                                            <small className='fw-bolder'>Check-out</small><br/>
                                            <small >
                                                {formData?.checkout_date ? (
                                                    <span>
                                                        {new Date(formData?.checkout_date).toLocaleDateString('en-US', options)}
                                                    </span>
                                                ) : (
                                                    'Invalid Date'
                                                )}
                                            </small>
                                        </div>

                                        <div className="col-4 d-flex text-center">
                                            <small><b>{selecteDRooms && (selecteDRooms?.reduce((acc, item) => acc + item?.bookCount, 0)>1?`${selecteDRooms?.reduce((acc, item) => acc + item?.bookCount, 0)} Room's`:`${selecteDRooms?.reduce((acc, item) => acc + item?.bookCount, 0)} Room`)}</b>  </small>
                                        </div>
                                    </div>
                                    <div className="row py-2 check-in-check-out-date">
                                        <div className="col-4">
                                            <small><b>{selectedOption > 1 ? `${selectedOption} Adult's` : `${selectedOption} Adult`} </b> </small>
                                        </div>
                                        <div className="col-4">
                                            <small><b>{formData?.daysDifference > 1 ? `${formData?.daysDifference} Night's` : `${formData?.daysDifference} Night`} </b> </small>
                                        </div>


                                    </div>
                                </div>

                                <div className="modal-body p-0">
                                    <div className=' rounded-3'>
                                        <form onSubmit={handleSubmit} method='POST'>
                                            <div className="mb-2  mx-3">
                                                <input type="text" id='text_color' onChange={handleChange} name='customer_name' className=" form-control mt-3" placeholder="Enter Name" required />
                                                <input type="tel" pattern="[0-9]{10}" minlength="10" maxlength="10" id='text_color' onChange={handleChange} name='customer_phn' className=" form-control mt-3" placeholder="Enter Phone No." required />
                                                <input type="email" id='text_color' onChange={handleChange} name='customer_email' className=" form-control mt-3" placeholder="Enter Email" />
                                                <div className=" text-start form-check my-2">
                                                    <TermsAndCond lgShow={lgShow} setLgShow={setLgShow} Agree={Agree} termsAndConditionsGuest={Term?.termsAndConditionsGuest} />
                                                    <input
                                                        required
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        name="accepted_t_c"
                                                        checked={formDataTC.checked}
                                                        disabled
                                                        id="exampleCheck1"
                                                    />
                                                    <label onClick={() => setLgShow(true)} style={{ color: '', opacity: "1", cursor: 'pointer' }} className="form-check-label text-primary" htmlFor="exampleCheck1"><small>Accept terms & conditions</small></label><br />
                                                    {error && <small className="error-message text-danger">{error}</small>}
                                                </div>
                                                <button type='submit' id='button' className='btn btn-success mt-2 px-5'>Request</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <Toast msg={'Response Submitted!'} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
