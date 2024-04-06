import React, { useEffect, useState } from 'react'
import { blobUrl } from '../Redux/BaseURL'
import '../Components/Styles/rooms.css'
import { Link } from 'react-router-dom'
import housekeeping from '../Images/housekeeper.png'
import wifi from '../Images/wifi.png'
import parkedCar from '../Images/parked-car.png'
import AC from '../Images/air-conditioner.png'
import TV from '../Images/television.png'
import tag from '../Images/tag.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

export default function Rooms() {
    const navigate = useNavigate()
    const [filter_data, setFilter_data] = useState([])
    const { state } = useLocation()
    const data = useSelector((state) => state.SearchRoom)


    const handleFilter = (e) => {
        const { name, checked } = e.target;
        const updatedFilterData = [...filter_data];
        const existingItemIndex = updatedFilterData.findIndex(item => item.name === name);
        if (existingItemIndex !== -1) {
            updatedFilterData[existingItemIndex] = { name, checked };
        } else {
            updatedFilterData.push({ name, checked });
        }
        setFilter_data(updatedFilterData);
    };


    useEffect(() => {
        if (filter_data && data.data) {
            data.data.filter(item => {
                return filter_data.every(element => {
                    if (element.name === 'is_wifi_available' && item.is_wifi_available === element.checked) {
                        return true;
                    } else if (element.name === 'is_ac_available' && item.is_ac_available === element.checked) {
                        return true;
                    } else if (element.name === 'is_tv_available' && item.is_tv_available === element.checked) {
                        return true;
                    } else if (element.name === 'is_parking_available' && item.is_parking_available === element.checked) {
                        return true;
                    }
                    return false;
                });
            });
        }
    }, [filter_data, data]);
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
                                <input className="form-check-input" name='is_ac_available' type="checkbox" onChange={handleFilter} value="" id="acCheckbox" />
                                <label className="form-check-label" htmlFor="acCheckbox">
                                    AC
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" name='is_tv_available' type="checkbox" onChange={handleFilter} value="" id="tvCheckbox" />
                                <label className="form-check-label" htmlFor="tvCheckbox">
                                    TV
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" name='is_wifi_available' type="checkbox" onChange={handleFilter} value="" id="wifiCheckbox" />
                                <label className="form-check-label" htmlFor="wifiCheckbox">
                                    Wifi
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" name='is_parking_available' type="checkbox" onChange={handleFilter} value="" id="parkingCheckbox" />
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
                                    For Group Travelers
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
                    <span className='fs-4 fw-bold  mt-5 result-text'>{data.data?.length} HomeStay in "{state?.searchData?.location.charAt(0).toUpperCase() + state?.searchData?.location.slice(1)}" </span>
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
                                                        {item?.img_array?.map((itemImg, index) => (
                                                            <div key={index} className={"carousel-item  overflow-hidden" + (index === 0 ? " active" : "")}>
                                                                <img src={`${blobUrl}/${itemImg?.image_field}`} className="d-block w-100 h-100" alt="..." />
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
                                            <div className="card-body border-none" onClick={() => navigate('/view-details', { state: item.id })}>
                                                <h4 className="card-title">{item.site_name} </h4>
                                                <p >{item.full_addres} </p>

                                                <div className="">
                                                    <span className='btn btn-success btn-sm'>{item.rate} &#9733;</span>
                                                    <span className='mx-3'>(5 Ratings)</span>
                                                    <div className='d-flex justify-content-start w-100 mt-2  '>
                                                        <div className=" w-75 d-flex">
                                                            {item.is_wifi_available && <img src={wifi} className='mx-3' height={25} alt='Wi-Fi' />}
                                                            {item.is_tv_available && <img src={TV} className='mx-3' height={25} alt='TV' />}
                                                            {item.is_parking_available && <img src={parkedCar} className='mx-3' height={25} alt='Parking' />}
                                                            {item.is_ac_available && <img src={AC} className='mx-3' height={25} alt='AC' />}
                                                            {item.is_housekeeping_available && <img src={housekeeping} className='mx-3' height={25} alt='Housekeeping' />}
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
