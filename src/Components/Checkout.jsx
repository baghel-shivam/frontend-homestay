import React from 'react'
import { useState } from 'react'
// import Notify from './NotificationBox/Notify'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BookingRequest } from '../Redux/Booking/BookignAction'

export default function Checkout() {
    const [data, setData] = useState((state)=>state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const event = e.target
        setData({ ...data, [event.name]: event.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(BookingRequest(data))
    }
    return (
        <div className='checkout-container'>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 id='text_color'>Request for Booking</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='p-3 rounded-3'>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-2 mt-1 mx-3">
                                        <input type="text" id='text_color' onChange={handleChange} name='customer_name' className=" form-control mt-3" placeholder="Enter name" />
                                        <input type="number" id='text_color' onChange={handleChange} name='customer_phn' className=" form-control mt-3" placeholder="Enter number." />
                                        <input type="email" id='text_color' onChange={handleChange} name='customer_email' className=" form-control mt-3" placeholder="Enter Email." />
                                        <button type='submit' id='button' className='btn btn-success mt-5 px-5'>Request</button>
                                    </div>
                                </form>
                            </div>
                            {/* </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
