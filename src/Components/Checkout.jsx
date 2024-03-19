import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BookingRequest } from '../Redux/Booking/BookignAction'
import Loading from './Loading'


export default function Checkout({ view_data }) {
    const [data, setData] = useState()
    const formData = useSelector((state) => state.SearchRoom?.formData)
    const booking = useSelector((state) => state.Booking)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (e) => {
        const event = e.target
        setData({ ...data, [event.name]: event.value })
    }

    console.log(booking)
    useEffect(() => {
        if (booking?.status === "succeeded") {
            const closeButton = document.querySelector(".btn-close-checkout");
            if (closeButton) {
              closeButton.click();
            }
        //    navigate('/success')
        }
        console.log(booking)
      }, [booking]);
    const options = {
        weekday: 'short', // Short weekday name (e.g., "Sat")
        day: 'numeric', // Numeric day of the month (e.g., "9")
        month: 'short', // Short month name (e.g., "Mar")
    };



    useEffect(() => {
        setData({
            ...data,
            "user_id": 1,
            "check_in_date": formData?.checkin_date,
            "check_out_date": formData?.checkout_date,
            "request_location": formData?.location,
            "booking_price": view_data?.base_price,
            "parent_room": view_data?.parent_address
        })
    }, [view_data])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(BookingRequest(data))
    }

    return (
        <div className='checkout-container'>
            {booking.status==='loading'&& <Loading/>}
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content overflow-hidden">

                        <button type="button" className="btn-close btn-close-checkout" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                                    {parseInt(view_data?.base_price).toLocaleString('en-IN')}
                                                </b></h5><small className='text-secondary mx-2 mt-1 '> + Tax & Fee</small></div>
                                        </div>
                                        <div className="col">
                                            <div className="fs-6">
                                                <small className='fw-bolder'>Room Type :</small> <small> {view_data?.category ? view_data?.category : "Classic"}</small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row py-2 check-in-check-out-date">
                                        <div className="col">
                                            <small className='fw-bolder'>

                                                {formData?.checkin_date ? (
                                                    <span>
                                                        {new Date(formData?.checkin_date).toLocaleDateString('en-US', options)}
                                                    </span>
                                                ) : (
                                                    'Invalid Date'
                                                )}
                                            </small>
                                        </div>
                                        <div className="col">
                                            <small className='fw-bolder'>
                                                {formData?.checkout_date ? (
                                                    <span>
                                                        {new Date(formData?.checkout_date).toLocaleDateString('en-US', options)}
                                                    </span>
                                                ) : (
                                                    'Invalid Date'
                                                )}
                                            </small>
                                        </div>
                                        <div className="col-5 d-flex text-center">
                                            <small><b>1</b> Room <b>, 1</b> Guest </small>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-body p-0">
                                    <div className=' rounded-3'>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-2  mx-3">
                                                <input type="text" id='text_color' onChange={handleChange} name='customer_name' className=" form-control mt-3" placeholder="Enter name" required />
                                                <input type="number" id='text_color' onChange={handleChange} name='customer_phn' className=" form-control mt-3" placeholder="Enter number" required />
                                                <input type="email" id='text_color' onChange={handleChange} name='customer_email' className=" form-control mt-3" placeholder="Enter Email" />
                                                <button type='submit' id='button' className='btn btn-success mt-5 px-5'>Request</button>
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
