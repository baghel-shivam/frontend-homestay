import React from 'react'
// import Form from './Form'
import img from '../Images/pic1.jpg'
import img2 from '../Images/bg.jpg'
import { Link } from 'react-router-dom'
import Checkout from './Checkout'
// import <Notify></Notify>

export default function View_in_details() {
    return (
        <div className='my-5 pt-5 px-5'>
            {/* <Notify /> */}
            <span className='mt-3 fs-2' style={{ color: '#00000', fontWeight: '700' }}>Room Detail</span>
            <hr />
            <div className="row my-5">
                <div className="col-12 col-lg-6 col-md-6">
                    <div id={`carouselExampleCaptions`} className="carousel slide rounded-3 overflow-hidden">
                        <div className="carousel-inner">
                            <div className={`carousel-item active`}>
                                <img src={img} className="d-block w-100" alt="..." />
                            </div>
                            <div className={`carousel-item`}>
                                <img src={img2} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleCaptions`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleCaptions`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6 text-left">
                    <div className="row bg-opacity-25 mx-lg-5 mx-0 mt-4 mt-lg-0 p-2 rounded-3 price-container">
                        <div className="col text-start">
                            <span className='text-start pb-2' style={{ color: 'green' }}>Price start at</span>
                            <h3> &#8377; 999 </h3>
                            {/* <span>+ 758 taxes & fees 1 room per night</span> */}
                        </div>
                        <div className="col">
                            <div className="row text-start mt-2">
                                <div className="col-2"><i className="bi bi-person-fill"></i></div>
                                <div className="col-8">2 Guest</div>
                            </div>
                            <div className="row text-start">
                                <div className="col-2"><i className="bi bi-usb-mini-fill"></i></div>
                                <div className="col-8">1 Room</div>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-opacity-50 bg-light border border-1 text-success mt-4  mx-lg-5 mx-0 p-3 rounded-3">
                        <span className=''>Free Cancellation Till 07-Mar-2024 11:59</span>
                    </div>
                    <div className="row bg-opacity-25 bg-success mt-4  mx-lg-5 mx-0 mx-md-5 px-5 p-3 rounded-3">
                        <div className="col">
                            <span>Check-in </span><br />
                            <b className='fs-5'>12:00</b>
                        </div>
                        <div className="col">
                            <span>Check-out </span><br />
                            <b className='fs-5'>11:00</b>
                        </div>
                        {/* <span className=''>Free Cancellation Till 07-Mar-2024 11:59</span> */}
                    </div>
                    <div className='row mt-2  mx-lg-1 mx-0 mx-md-5 px-5 mx-5 p-3 rounded-3'>
                        {/* <button id='button' className='btn py-3'>Book</button> */}
                        <Link to={'/booking'} id="Main-button" className="btn btn-primary py-3" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Book</Link>
                        <Checkout />
                    </div>
                </div>
            </div>
            <h4 id='text_color' className='my-4'>Guest Reviews & Rating for Green Palms Hotel, Pacific Mall</h4>

            <div className="container">
                <div className='row border border-1 mt-4  mx-lg-1 mx-0 p-3'>
                    <div className="col-7 text-start">
                        <span className='mt-3 fs-1 text-start' style={{ color: '#00000', fontWeight: '700', fontFamily: 'Trebuchet MS, sans-seri' }}>About</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolore ad maxime velit qui beatae in sapiente repudiandae ullam, cumque laudantium rerum molestiae nostrum ipsum nisi, eius ratione? Cumque, minus!</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 px-lg-5 p-3">
                        <div className="container">
                            <span>5 &#9733;</span>
                            <div className="w-100 rate-bar">
                                <div className="w-25 bg-primary rate-bar-child" style={{ background: 'red', height: '10px', }}>
                                </div>
                            </div>
                            <span>4 &#9733;</span>
                            <div className="w-100 rate-bar">
                                <div className="w-25 bg-primary rate-bar-child" style={{ background: 'red', height: '10px', }}>
                                </div>
                            </div>
                            <span>3 &#9733;</span>
                            <div className="w-100 rate-bar">
                                <div className="w-25 bg-primary rate-bar-child" style={{ background: 'red', height: '10px', }}>

                                </div>
                            </div>
                            <span>2 &#9733;</span>
                            <div className="w-100 rate-bar">
                                <div className="w-25 bg-primary rate-bar-child" style={{ background: 'red', height: '10px', }}>

                                </div>
                            </div>
                            <span>1 &#9733;</span>
                            <div className="w-100 rate-bar">
                                <div className="w-25 bg-primary rate-bar-child" style={{ background: 'red', height: '10px', }}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12  col-md-6 col-lg-2 p-3 mt-2">
                        <div className="bg-success p-2 m-2 w-100 rounded-3 text-light">
                            <span className='mt-3 fs-3' style={{ color: '#00000', fontWeight: '200' }}>Ratings</span>
                            {/* <h2>Ratings</h2> */}
                            <h1>4/3.5</h1>
                            <span>786 Ratings</span><br />
                            <span>786 Reviews</span>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="feedback text-start">
                                Rooms Gallery
                            </div>
                        </div>
                        <div className="col">
                            <div className="feedback text-end">

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
        // </iv >
    )
}
