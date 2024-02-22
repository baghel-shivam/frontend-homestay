import React from 'react'
import Form from './Form'
import img from '../Images/pic1.jpg'
import img2 from '../Images/bg.jpg'
import img3 from '../Images/pic2.jpg'
import img4 from '../Images/pic3.jpg'

export default function View_in_details() {
    return (
        <div className='mt-5 pt-5 px-5'>
            {/* <div className='row mt-5 pt-5 px-5'> */}
            <Form />
            <di className="row mt-5">
                <div className="col-12 col-lg-6 col-md-6">
                    <div id={`carouselExampleCaptions`} className="carousel slide rounded-3 overflow-hidden">
                        <div class="carousel-inner">
                            <div className={`carousel-item active`}>
                                <img src={img} class="d-block w-100" alt="..." />
                            </div>
                            <div className={`carousel-item`}>
                                <img src={img2} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target={`#carouselExampleCaptions`} data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target={`#carouselExampleCaptions`} data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6 text-left">

                    <div className="row bg-opacity-25 bg-warning  mx-lg-5 mx-0 mt-4 mt-lg-0 p-3 rounded-3">
                        <span className='text-start'>Price start at</span>
                        <div className="col text-start"><h3> &#8377; 999 </h3>
                            <span>+ 758 taxes & fees 1 room per night</span></div>
                        <div className="col">
                            <div className="row text-start">
                                <div className="col-2"><i class="bi bi-person-fill"></i></div>
                                <div className="col-8">2 Guest</div>
                            </div>
                            <div className="row text-start">
                                <div className="col-2"><i class="bi bi-usb-mini-fill"></i></div>
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
                    <div className='row mt-2  mx-lg-1 mx-0 mx-md-5 px-5 p-3 rounded-3'>
                        <button id='button' className='btn py-3'>Book</button>
                    </div>
                </div>
            </di>
            <div className='row border border-1 mt-4  mx-lg-1 mx-0 p-3'>
                <h4 id='text_color' className='my-4'>Guest Reviews & Rating for Green Palms Hotel, Pacific Mall</h4>
                <div className="col-12  col-md-6 col-lg-2 p-3">
                    <div className="bg-success p-3 m-2 w-100 rounded-3 text-light">
                        <h2>Ratings</h2>
                        <h1>4/3.5</h1>
                        <span>786 Ratings</span><br />
                        <span>786 Reviews</span>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-lg-5 p-3">
                    <span>5 &#9733;</span>
                    <div className="row my-1"> <div class="progress" style={{ height: '6px' }} role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{ width: '80%' }}></div>
                    </div>
                    </div>
                    <span>4 &#9733;</span>
                    <div className="row my-1"> <div class="progress" role="progressbar" style={{ height: '6px' }} aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{ width: '70%' }}></div>
                    </div>
                    </div>
                    <span>3 &#9733;</span>
                    <div className="row my-1"> <div class="progress" role="progressbar" style={{ height: '6px' }} aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{ width: '50%' }}></div>
                    </div>
                    </div>
                    <span>2 &#9733;</span>
                    <div className="row my-1"> <div class="progress" role="progressbar" style={{ height: '6px' }} aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{ width: '30%' }}></div>
                    </div>
                    </div>
                    <span>1 &#9733;</span>
                    <div className="row my-1"> <div class="progress" role="progressbar" style={{ height: '6px' }} aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{ width: '10%' }}></div>
                    </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
