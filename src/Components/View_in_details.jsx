import React, { useEffect, useState } from 'react'
import housekeeping from '../Images/housekeeper.png'
import wifi from '../Images/wifi.png'
import parkedCar from '../Images/parked-car.png'
import AC from '../Images/air-conditioner.png'
import TV from '../Images/television.png'
import { Link } from 'react-router-dom'
import Checkout from './Checkout'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function View_in_details() {
    const { state } = useLocation()
    const data = useSelector((state) => state.SearchRoom)
    const [view_data, setView_data] = useState()

       const saveToLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
    const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
    
    useEffect(() => {
      const storedData = getFromLocalStorage('searchRoomData');
      if (storedData) return setView_data(storedData);
    
      const matched = data.data.find((item) => item.id === state);
      if (matched) {
        setView_data(matched);
        saveToLocalStorage('searchRoomData', matched);
      }
    }, [state, data]);
    return (
        <div className='my-5 pt-5 container'>
            <span className='mt-3 fs-2' style={{ color: '#00000', fontWeight: '700' }}>Room Detail</span>
            <hr />
            <div className="row my-5">
                <div className="col-12 col-lg-6 col-md-6">
                    <div id={`carouselExampleCaptions`} className="carousel slide rounded-3 overflow-hidden">
                        <div className="carousel-inner">
                            {view_data?.img_array?.map((itemImg, index) => (
                                <div key={index} className={"carousel-item" + (index === 0 ? " active" : "")}>
                                    <img src={`https://webapp-backend.azurewebsites.net/media/${itemImg?.image_field}`} className="d-block w-100" alt="..." />
                                </div>
                            ))}
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
                    <div className="row bg-opacity-25 mx-lg-5 mx-0 mt-4 mt-lg-0 p-3 rounded-3 price-container">
                        <div className="container">
                            <div className=" text-start">
                                <h4>{view_data?.site_name}</h4>
                                <p className='text-secondary'>{view_data?.full_addres}</p>
                                {view_data?.nearest_airport && <p className='text-secondary'>Nearest Airport :{view_data?.nearest_airport}</p>}
                                {view_data?.nearest_metro_station && <p className='text-secondary'>Nearest Airport :{view_data?.nearest_metro_station}</p>}
                                {view_data?.nearest_railway_station && <p className='text-secondary'>Nearest Airport :{view_data?.nearest_railway_station}</p>}
                            </div>
                            <hr />
                        </div>
                        <div className="col text-start">
                            <span className='text-start pb-2' style={{ color: 'green' }}>Price start at</span>
                            <h3> &#8377; {view_data?.base_price} </h3>
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
                        <hr />
                        <div className="text-start">
                            {view_data && (
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-lg-2 text-center my-2">
                                        {view_data.is_wifi_available && (
                                            <>
                                                <img src={wifi} className="mx-3" height={25} width={25} alt="Wi-Fi" />
                                                <span className="mt-1 mx-2">Wifi</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-2 text-center my-2">
                                        {view_data.is_parking_available && (
                                            <>
                                                <img src={parkedCar} className="mx-3" width={25} height={25} alt="Parking" />
                                                <span className="mt-1 mx-2">Parking</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-2 text-center my-2">
                                        {view_data.is_tv_available && (
                                            <>
                                                <img src={TV} className="mx-3" height={25} width={25} alt="TV" />
                                                <span className="mt-1 mx-2">TV</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-2 text-center my-2">
                                        {view_data.is_ac_available && (
                                            <>
                                                <img src={AC} className="mx-3" height={25} width={25} alt="AC" />
                                                <span className="mt-1 mx-2">AC</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-2 text-center my-2">
                                        {view_data.is_housekeeping_available && (
                                            <>
                                                <img src={housekeeping} className="mx-5 " width={25} height={25} alt="Housekeeping" />
                                                <span className="mt-1 mx-2">Housekeeping</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="row  my-2  mx-lg-5 mx-0 mx-md-5 px-5 p-3 rounded-3">
                        <div className="col my-2 ">
                            <div className='bg-opacity-25 py-1 bg-success rounded-2'>
                                <span className='text-success'>Check-in </span><br />
                                <span className=' text-secondary'>12:00</span>
                            </div>
                        </div>
                        <div className="col  my-2">
                            <div className='bg-opacity-25 bg-success rounded-2 py-1 '>
                                <span className='text-success'>Check-out </span><br />
                                <span className=' text-secondary'>11:00</span>
                            </div>
                        </div>
                        <div className="col  my-2">
                            <Link to={'/booking'} className="btn btn-success m-auto py-3 px-5" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Book</Link>
                            <Checkout />
                        </div>
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
