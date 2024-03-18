import React, { useState } from 'react'
import '../Components/Styles/rooms.css'
import Form from './Form'
import img from '../Images/pic1.jpg'
import img2 from '../Images/bg.jpg'
import img3 from '../Images/pic2.jpg'
import img4 from '../Images/pic3.jpg'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import tag from '../Images/tag.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import <BaseURL></BaseURL>
import { useLocation } from 'react-router-dom'

export default function Rooms() {
    const navigate = useNavigate()
    const [filter_data, setFilter_data] = useState()

    const { state } = useLocation()

    const data = useSelector((state) => state.SearchRoom)

    const handleFilter = (e) => {
        const data = e.target
        setFilter_data({ ...filter_data, [data.name]: data.checked })
    }
    console.log(filter_data, 'this is filter data')
    return (

        <div className='container Room_div '>
            <div className='row nav-form-parent'>
                <div className="col-lg-3 nav--bar col-sm-12 col-md-3 py-4 ">
                    <div className="container text-start d-none d-lg-block d-md-block">
                        <h4>Filters</h4>
                        <hr />
                        <div className="container my-4">
                            <h6>Hotel Facility</h6>
                            <div className="form-check my-3">
                                <input className="form-check-input" name='ac' type="checkbox" onChange={handleFilter} value="" id="acCheckbox" />
                                <label className="form-check-label" htmlFor="acCheckbox">
                                    AC
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" name='tv' type="checkbox" onChange={handleFilter} value="" id="tvCheckbox" />
                                <label className="form-check-label" htmlFor="tvCheckbox">
                                    TV
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" name='wifi' type="checkbox" onChange={handleFilter} value="" id="wifiCheckbox" />
                                <label className="form-check-label" htmlFor="wifiCheckbox">
                                    Wifi
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" name='parking' type="checkbox" onChange={handleFilter} value="" id="parkingCheckbox" />
                                <label className="form-check-label" htmlFor="parkingCheckbox">
                                    Parking
                                </label>
                            </div>
                        </div>
                        <hr />
                        <div className="container my-4">
                            <h6>Collections</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="familyCheckbox" disabled />
                                <label className="form-check-label" htmlFor="familyCheckbox">
                                    Family
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="" id="groupCheckbox" disabled />
                                <label className="form-check-label" htmlFor="groupCheckbox">
                                    For Group Travellers
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="" id="airportCheckbox" disabled />
                                <label className="form-check-label" htmlFor="airportCheckbox">
                                    Near Airport
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="" id="couplesCheckbox" disabled />
                                <label className="form-check-label" htmlFor="couplesCheckbox">
                                    Couples
                                </label>
                            </div>
                        </div>
                        <div className="container my-4">
                            <h6>Check in feature</h6>
                            <div class="form-check my-3">
                                <input class="form-check-input" type="checkbox" value="" id="p-i-o_flexCheckDefault" disabled />
                                <label class="form-check-label" for="p-i-o_flexCheckDefault">
                                    Pay-in-hotel
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9 scroll-to-show-all-rooms text-start pt-3 ">
                    <span className='fs-4 fw-bold  mt-5 result-text'>{data.data?.length}  "{state?.searchData?.location.charAt(0).toUpperCase() + state?.searchData?.location.slice(1)}" Room's in Search Results</span>
                    <hr />
                    <div className='room-collections mt-5  px-lg-1 px-sm-0'>
                        {data?.data?.map((item, roomIndex) => (
                            <>
                                <div class="card border-none mb-3" key={roomIndex} >
                                    {item.suggested &&
                                        <div className='tag'>
                                            <img src={tag} className='img-class' alt='recommended tag' />
                                        </div>

                                    }
                                    <div class="row g-0 card-hover-effect">
                                        <div class="col-md-4 h100">
                                            <div>
                                                <div id={`carouselExampleCaptions_${roomIndex}`} class="carousel slide">
                                                    <div class="carousel-inner">
                                                        {
                                                            item?.img_array?.map((itemImg, index) => (
                                                                // console.log(`https://webapp-backend.azurewebsites.net/media/${itemImg?.image_field}`)
                                                                <div key={index} class={"carousel-item" + (index === 0 ? " active" : "")}>
                                                                    <img src={`https://webapp-backend.azurewebsites.net/media/${itemImg?.image_field}`} class="d-block w-100" alt="..." />
                                                                </div>
                                                            ))}
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target={`#carouselExampleCaptions_${roomIndex}`} data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target={`#carouselExampleCaptions_${roomIndex}`} data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-8 ">
                                            <div className="card-body border-none" onClick={() => navigate('/view-details')}>
                                                <h4 className="card-title">{item.site_name} </h4>
                                                <p >{item.full_addres} </p>
                                                {/* <p>Opposite Fire Station, Noida</p> */}
                                                <div className="">
                                                    <span className='btn btn-success btn-sm'>{item.rate} &#9733;</span>
                                                    <span className='mx-3'>(5 Ratings)</span>
                                                    <div class='text-start w-100 mt-2'>
                                                        <div class="container w-100 d-flex justify-content-start">
                                                            <i class="bi bi-wifi fs-5 mx-2"></i>
                                                            <i class="bi bi-p-circle fs-5 mx-4"></i>
                                                            <i class="bi bi-tv fs-5 mx-4"></i>
                                                            <i class="bi bi-power fs-5 mx-4"></i>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row mt-1">
                                                    <div className="col pt-2">
                                                        <span className='fs-5 fw-bold'>
                                                            &#8377;
                                                            {parseInt(item.base_price).toLocaleString('en-IN')}
                                                        </span>
                                                    </div>
                                                    <div className="col">

                                                        <Link to="/view-details" style={{ color: '#000000' }} className="card-link btn btn-link mt-1">View Details</Link>


                                                    </div>
                                                    <div className="col">
                                                        <button className="card-link mt-1 btn btn-success w-100">Book Now</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='my-4' />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}
