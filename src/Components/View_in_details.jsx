import React, { useEffect, useState } from 'react'
import housekeeping from '../Images/housekeeper.png'
import wifi from '../Images/wifi.png'
import parkedCar from '../Images/parked-car.png'
import AC from '../Images/air-conditioner.png'
import TV from '../Images/television.png'
import Gallery from './Gallery'
import Checkout from './Checkout'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Success from './Success'
import { ViewDetails } from '../Redux/ViewDetails/Action'
import { blobUrl } from '../Redux/BaseURL'
import Loading from './Loading'
import SwiperComponent from './Swiper'
export default function View_in_details() {
    const feedbackData = [
        {
            id: 1,
            username: 'JohnDoe123',
            feedback: 'Great product! Very user-friendly interface.',
            rating: 5,
            date: '2024-03-20',
        },
        {
            id: 2,
            username: 'JaneSmith456',
            feedback: 'The service was excellent. I would highly recommend it.',
            rating: 4,
            date: '2024-03-18',
        },
        {
            id: 3,
            username: 'SamWilson789',
            feedback: 'Could use some improvements in the mobile app version.',
            rating: 3,
            date: '2024-03-15',
        },
        // Add more feedback objects as needed
    ];
    const formData = useSelector((state) => state.SearchRoom?.formData)
    const booking = useSelector((state) => state.Booking.status)
    const room_details = useSelector((state) => state.RoomDetails)
    const [totalPrice, setTotalPrice] = useState()
    const [error, setError] = useState({ available_rooms: '', })
    const [view_data, setView_data] = useState()
    const [guest_room, setGuest_Room] = useState({ RoomIds: null, available_rooms: '' });
    const [selectedRooms_v, setSelectedRooms] = useState()
    const { state } = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        setView_data(room_details.data);
    }, [state, room_details]);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setGuest_Room({ ...guest_room, [name]: value })
    };

    useEffect(() => {
        const roomCount = parseInt(guest_room?.available_rooms);
        if (!isNaN(roomCount) && roomCount >= 0) {
            const selectedRooms = view_data?.availabel_rooms?.slice(0, roomCount);
            setSelectedRooms(selectedRooms)
            const All_price = selectedRooms?.map(item => item.base_price);
            const roomIds = selectedRooms?.map(item => item.id);
            const totalPrice = All_price.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            setGuest_Room(prevState => ({
                ...prevState,
                RoomIds: roomIds
            }));

            setTotalPrice(totalPrice);
        } else {
            console.log('Invalid room count');
        }
    }, [guest_room?.available_rooms, view_data?.availabel_rooms]);



    useEffect(() => {
        const data = {
            "id": state,
            "checkin_date": formData.checkin_date,
            "checkout_date": formData.checkout_date
        }
        dispatch(ViewDetails(data))

    }, [])

    const validation = () => {
        if (!guest_room?.available_rooms) {
            setError({ available_rooms: 'Please select a available_rooms' })
            return false
        }
        else {
            return true
        }
    }

    // console.log(view_data?.availabel_rooms)



    const handleNav = () => {
        if (validation()) {
            document.getElementById("toggle").click();
        }
    }

    return (
        <div className='my-5 pt-5 container'>
            {room_details.status === 'loading' && <Loading />}
            {booking === 'succeeded' && <Success />}
            <span className='mt-3 fs-2' style={{ color: '#00000', fontWeight: '700' }}>Homestay Detail</span>
            <hr />
            <div className="row my-5">
                <div className="col-12 col-lg-6 col-md-6">
                    <div id={`carouselExampleCaptions`} className="carousel slide rounded-3 overflow-hidden">
                        <div className="carousel-inner">
                            {view_data?.img_array?.map((itemImg, index) => (
                                <div key={index} className={"carousel-item" + (index === 0 ? " active" : "")}>
                                    <img src={`${blobUrl}/${itemImg?.image_field}`} className="d-block w-100" alt="..." />
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

                            </div>
                            <hr />
                        </div>
                        <div className="col text-start d-flex justify-content-between">
                            <div>
                                <small className='text-start pb-2' style={{ color: 'green' }}>Base price start at</small>
                                <h3> &#8377;
                                    {parseInt(view_data?.base_price).toLocaleString('en-IN')}
                                </h3>
                            </div>

                        </div>
                        <div className="col">
                            <strong>{view_data?.availabel_rooms && view_data?.availabel_rooms.length > 0 ? <span className='text-success'>{view_data?.availabel_rooms.length} Room Available</span> : <span className='text-danger'>Not available</span>} </strong><br />
                            {view_data?.availabel_rooms?.reduce((acc, item) => {
                                const existingItem = acc.find((accItem) => accItem.room_type === item.room_type);
                                if (existingItem) {
                                    existingItem.count++;
                                } else {
                                    acc.push({ ...item, count: 1 });
                                }
                                return acc;
                            }, []).map((item, index) => (
                                <span key={index} className='text-warning'>
                                    {/* {item.count > 1 ? `${item.count} ${item.room_type}` : item.room_type} */}
                                    <br />
                                </span>
                            ))}

                        </div>
                        <hr />
                        <div className="row mb-4">
                            <div className="col-lg-6 col-sm-12 my-1 ">
                                {/* <label>Room Type</label> */}
                                <select
                                    name='available_rooms'
                                    onChange={handleChange}
                                    id="validationCustom03"
                                    className={`form-control border-1 ${error?.available_rooms ? 'border-danger' : ''}`}
                                    required
                                >
                                    <option value="" disabled selected>Room Type</option>
                                    {view_data?.availabel_rooms?.map((item, index) => (
                                        <option value={index + 1} key={index}>{item.room_type}</option>
                                    ))}
                                </select>

                            </div>
                            <div className="col-lg-6 col-sm-12 my-1">

                                <div className={`form-group ${error?.available_rooms ? 'has-error' : ''}`}>
                                    {/* <span className='fs-6 m-1 py-2'>Available Rooms</span> */}
                                    <select
                                        name='available_rooms'
                                        onChange={handleChange}
                                        id="validationCustom03"
                                        className={`form-control border-1 ${error?.available_rooms ? 'border-danger' : ''}`}
                                        required
                                    >
                                        <option value="" disabled selected>Select Room</option>
                                        {view_data?.availabel_rooms?.map((item, index) => (
                                            <option value={index + 1} key={index}>{index + 1} Room </option>
                                        ))}
                                    </select>
                                    {error?.available_rooms && (
                                        <small className='text-danger'>
                                            Please choose a available rooms.
                                        </small>

                                    )}
                                </div>


                            </div>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-evenly py-3'>
                            {view_data?.nearest_airport &&
                                <small className='text-secondary px-2' style={{borderRight:"1px solid"}}><i class="bi bi-geo-fill mx-1"></i> Nearest Airport :<b> <br />{view_data?.nearest_airport}  - {view_data?.distance_from_ap} KM</b></small>
                            }

                            {view_data?.nearest_metro_station &&
                                <small className='text-secondary px-2' style={{borderRight:"1px solid"}}><i class="bi bi-geo-fill mx-1"></i> Nearest Metro :<b> <br />{view_data?.nearest_metro_station}   - {view_data?.distance_from_ms} KM</b></small>}
                            {view_data?.nearest_railway_station &&
                                <small className='text-secondary'><i class="bi bi-geo-fill mx-1"></i>  Nearest Railway station :<b> <br /> {view_data?.nearest_railway_station} - {view_data?.distance_from_rs} KM</b></small>}
                        </div>
                        <hr />
                        <div className="text-start">
                            {view_data && (
                                <div className="row">
                                    {view_data.is_wifi_available && (
                                        <div className="col-12 col-sm-6 col-lg-2 text-center my-2">
                                            <img src={wifi} className="mx-3" height={25} width={25} alt="Wi-Fi" />
                                            <span className="mt-1 mx-2">Wifi</span>
                                        </div>
                                    )}
                                    {view_data.is_parking_available && (
                                        <div className="col-12 col-sm-6 col-lg-2 text-center my-2">
                                            <img src={parkedCar} className="mx-3" width={25} height={25} alt="Parking" />
                                            <span className="mt-1 mx-2">Parking</span>
                                        </div>
                                    )}
                                    {view_data.is_tv_available && (
                                        <div className="col-12 col-sm-6 col-lg-2 text-center my-2">
                                            <img src={TV} className="mx-3" height={25} width={25} alt="TV" />
                                            <span className="mt-1 mx-2">TV</span>
                                        </div>
                                    )}
                                    {view_data.is_ac_available && (
                                        <div className="col-12 col-sm-6 col-lg-2 text-center my-2">
                                            <img src={AC} className="mx-3" height={25} width={25} alt="AC" />
                                            <span className="mt-1 mx-2">AC</span>
                                        </div>
                                    )}
                                    {view_data.is_housekeeping_available && (
                                        <div className="col-12 col-sm-6 col-lg-2 text-center my-2">
                                            <img src={housekeeping} className="mx-5" width={25} height={25} alt="Housekeeping" />
                                            <span className="mt-1 mx-2">Housekeeping</span>
                                        </div>
                                    )}
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
                            <button id='toggle' data-bs-target="#exampleModalToggle" data-bs-toggle="modal" className='d-none'></button>
                            <button onClick={handleNav} className="btn btn-success m-auto py-3 px-5">Book</button>
                            <Checkout view_data={view_data} guest_room={guest_room} totalPrice={totalPrice} />
                        </div>
                    </div>
                </div>
            </div>
            <h4 id='text_color' className='my-4'>Guest Reviews & Rating for {view_data?.site_name}</h4>

            <div className="">
                <div className='row border border-1 m-0 p-0' style={{ margin: '0px', padding: '0px' }}>
                    <div className="col-7 text-start px-3">
                        <span className='mt-3 p-2 fs-1 text-start' style={{ color: '#00000', fontWeight: '700', fontFamily: 'Trebuchet MS, sans-seri' }}>About</span>
                        <p className='p-2'>
                           {view_data?.about_this_homestay }</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 p-3">
                        <div className="container mb-3">
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
                        <div className="bg-success p-2  w-100 rounded-3 text-light">
                            <span className='mt-3  fs-3' style={{ color: '#00000', fontWeight: '200' }}>Ratings</span>
                            {/* <h2>Ratings</h2> */}
                            <h1>4/3.5</h1>
                            <span>786 Ratings</span><br />
                            <span>786 Reviews</span>
                        </div>

                    </div>
                    <hr />
                    <div className="row m-auto">
                        <div className="col-12 col-lg-7 col-sm-12 col-md-6 pt-4">
                            <div className="feedback text-start py-2">
                                <h5 className='pb-4'> Gallery</h5>
                                <div className='mt-4'>
                                    <SwiperComponent view_data={view_data?.img_array} />
                                </div>
                                {/* <Gallery view_data={view_data} /> */}
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 col-sm-12 col-md-6 pt-4">
                            <div className="feedback text-start py-2" >
                                <h5 className='mx-3'> Feedbacks</h5>
                                <div className="container mt-5">
                                    {feedbackData.map((item) => <>
                                        <div class="card mb-3 " style={{ zIndex: "-9999" }}>
                                            <div class="card-body">
                                                <div className="d-flex m-0 p-0">

                                                    <h5 class="card-title m-0">{item.username} &#x2022; </h5> <span className='mx-2'>&#9733; {item.rating}</span>
                                                </div>
                                                <p class="card-text">{item?.feedback}</p>
                                            </div>
                                        </div>
                                    </>)}

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>


        // </iv >
    )
}
