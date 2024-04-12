import React, { useEffect, useState } from 'react'
import housekeeping from '../Images/housekeeper.png'
import wifi from '../Images/wifi.png'
import parkedCar from '../Images/parked-car.png'
import AC from '../Images/air-conditioner.png'
import TV from '../Images/television.png'
import Checkout from './Checkout'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Success from './Success'
import { ViewDetails } from '../Redux/ViewDetails/Action'
import { blobUrl } from '../Redux/BaseURL'
import Loading from './Loading'
import SwiperComponent from './Swiper'
import AddCountReturnUniqueObj_AvailableR from './AddCountReturnUniqueObj_AvailableR'
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
    const [manipulateRoom, setManipulateRoom] = useState()
    const [collectRoom, setCollectRooms] = useState([])
    const { state } = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        setView_data(room_details.data);
    }, [state, room_details]);


    useEffect(() => {
        const roomCount = parseInt(guest_room?.available_rooms);
        if (!isNaN(roomCount) && roomCount >= 0) {
            const selectedRooms = view_data?.availabel_rooms?.slice(0, roomCount);

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
        if (!collectRoom || !Array.isArray(collectRoom)) {
            return false;
        }
        return collectRoom.some(item => item.bookCount > 0);
    };
    useEffect(() => {
        const Economy = []
        const Premium = []
        const others = []
        view_data?.availabel_rooms?.map((item) => {
            if (item.category === 'Economy') {
                Economy.push(item)
            } else if (item.category === 'Premium') {
                Premium.push(item)
            } else {
                others.push(item)
            }
        })
        setManipulateRoom({ "economy": Economy, "premium": Premium, "others": others })
    }, [room_details.data, state, view_data])


    const handleNav = () => {
        if (validation()) {
            document.getElementById("toggle").click();
        } else {
            alert('add room first!')
        }
    }

    return (
        <div className='my-5 pt-5 container' style={{ maxWidth: '1200px' }}>
            {room_details.status === 'loading' && <Loading />}
            {booking === 'succeeded' && <Success />}
            <span className='mt-3 fs-2' style={{ color: '#00000', fontWeight: '700' }}>Homestay Detail</span>
            <hr />
            <div className="row my-5">
                <div className="col-12 col-lg-6 col-md-6">
                    <div id={`carouselExampleCaptions`} className=" details-box carousel slide rounded-3 overflow-hidden">
                        <div className="carousel-inner">
                            {view_data?.img_array?.map((itemImg, index) => (
                                <div key={index} className={"carousel-item view-in-detail-item" + (index === 0 ? " active" : "")}>
                                    <img src={`${blobUrl}/${itemImg?.image_field}`} className="d-block w-100 h-100" alt="..." />
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
                <div className="col-12 col-lg-6 col-md-6 text-center details-box rounded-3 ">
                    <div className=" row bg-opacity-25 mt-4 mt-lg-0 p-3 rounded-3 price-container">
                        <div className="container">
                            <div className=" text-start">
                                <h4>{view_data?.site_name}</h4>
                                <p className='text-secondary'><i class="bi bi-geo-fill mx-1"></i> {view_data?.full_addres}</p>

                            </div>
                        </div>
                        <hr />
                        <div className="col text-start d-flex justify-content-between">
                            <div>
                                <small className='text-start pb-2' style={{ color: 'green' }}>Price starting at</small>
                                <h3 className=''> &#8377;
                                    {parseInt(view_data?.base_price).toLocaleString('en-IN')}
                                </h3>
                            </div>

                        </div>
                        <div className="col p-0 d-flex justify-content-center align-items-center">
                            <strong>{view_data?.availabel_rooms && view_data?.availabel_rooms.length > 0 ? <span className='text-success'>{view_data?.availabel_rooms.length} Room <br />Available</span> : <span className='text-danger'>Not available</span>} </strong><br />
                        </div>
                        <hr />

                        <div className='d-flex text-center justify-content-evenly py-3'>
                            <div >
                                {view_data?.nearest_airport &&
                                    <small className='text-secondary ' ><i class="bi bi-geo-fill mx-1"></i> Nearest Airport :<b className='text-warning'> <br />{view_data?.nearest_airport}  - {view_data?.distance_from_ap} KM</b></small>
                                }
                            </div>
                            <div >
                                {view_data?.nearest_metro_station &&
                                    <small className='text-secondary ' ><i class="bi bi-geo-fill mx-1"></i> Nearest Metro station:<b className='text-warning'> <br />{view_data?.nearest_metro_station}   - {view_data?.distance_from_ms} KM</b></small>}
                            </div>

                            <div >
                                {view_data?.nearest_railway_station &&
                                    <small className='text-secondary'><i class="bi bi-geo-fill mx-1"></i>  Nearest Railway station :<b className='text-warning'> <br /> {view_data?.nearest_railway_station} - {view_data?.distance_from_rs} KM</b></small>}
                            </div>
                        </div>
                        <hr />
                        <div className="text-start">
                            <strong className=''>Amenities</strong>
                            <div className='mt-3'>


                                {view_data && (
                                    <div className="container d-flex justify-content-evenly">
                                        {view_data.is_wifi_available && (
                                            <div >
                                                <img src={wifi} className="" height={25} width={25} alt="Wi-Fi" />
                                                {/* <span className="mt-1 mx-2">Wifi</span> */}
                                            </div>
                                        )}
                                        {view_data.is_parking_available && (
                                            <div >
                                                <img src={parkedCar} className="" width={25} height={25} alt="Parking" />
                                                {/* <span className="mt-1 mx-2">Parking</span> */}
                                            </div>
                                        )}
                                        {view_data.is_tv_available && (
                                            <div >
                                                <img src={TV} className="" height={25} width={25} alt="TV" />
                                                {/* <span className="mt-1 mx/-2">TV</span> */}
                                            </div>
                                        )}
                                        {view_data.is_ac_available && (
                                            <div >
                                                <img src={AC} className="" height={25} width={25} alt="AC" />
                                                {/* <span className="mt-1 mx-2">AC</span> */}
                                            </div>
                                        )}
                                        {view_data.is_housekeeping_available && (
                                            <div >
                                                <img src={housekeeping} className="" width={25} height={25} alt="Housekeeping" />
                                                {/* <span className="mt-1 mx-2">Housekeeping</span> */}
                                            </div>
                                        )}
                                    </div>

                                )}
                            </div>
                        </div>

                    </div>

                    <div className="row py-3  rounded-3">
                        <div className="col">
                            <strong>Nearest Attraction 1</strong> <br />
                            ({view_data?.nearest_attraction_1})
                        </div>
                        <div className="col">
                            <strong>Nearest Attraction 2</strong><br />
                            ( {view_data?.nearest_attraction_2})
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-4 m-auto">
                <strong className='my-lg-4 my-1 fs-4'>Book here!</strong>
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Base price</th>
                        <th>Quantity</th>
                        <th>Book </th>
                    </tr>
                    <AddCountReturnUniqueObj_AvailableR data={manipulateRoom?.economy} collectRoom={collectRoom} setCollectRooms={setCollectRooms} />
                    <AddCountReturnUniqueObj_AvailableR data={manipulateRoom?.premium} collectRoom={collectRoom} setCollectRooms={setCollectRooms} />
                </table>
                <div className="container w-100">
                    <div className=" w-sm-100 m-auto d-flex justify-content-evenly my-4 flex-wrap" style={{ maxWidth: '700px' }}>
                        <div className="my-2">
                            <div className='bg-opacity-25 px-5 bg-success rounded-2'>
                                <span className='text-success'>Check-in </span><br />
                                <span className=' text-secondary'>12:00</span>
                            </div>
                        </div>
                        <div className=" my-2">
                            <div className='px-5 bg-opacity-25 bg-success rounded-2 py-0 '>
                                <span className='text-success'>Check-out </span><br />
                                <span className=' text-secondary'>11:00</span>
                            </div>
                        </div>
                        <div className=" my-2">
                            <button id='toggle' data-bs-target="#exampleModalToggle" data-bs-toggle="modal" className='d-none'></button>
                            <button onClick={handleNav} className="btn btn-success m-auto h-100 px-5">Book</button>
                            <Checkout view_data={view_data} guest_room={guest_room} totalPrice={totalPrice} collectRoom={collectRoom} />
                        </div>
                    </div>
                </div>
            </div>
            <h4 id='text_color' className='my-4'>Guest Reviews & Rating for {view_data?.site_name}</h4>
            <div className="">
                <div className='row rounded-3 border border-1 m-0 p-0' style={{ margin: '0px', padding: '0px' }}>
                    <div className="col-12 col-md-6 col-lg-6 text-start px-3">
                        <span className='mt-3 p-2 fs-1 text-start' style={{ color: '#00000', fontWeight: '700', fontFamily: 'Trebuchet MS, sans-seri' }}>About</span>
                        <p className='p-2'>
                            {view_data?.about_this_homestay}</p>
                        <span className='mt-3 p-2 fs-3 text-start'
                            style={{ color: '#00000', fontWeight: '700', fontFamily: 'Trebuchet MS, sans-seri' }}>How to reach</span>
                        <p className='p-2'>
                            {view_data?.how_to_reach}</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 p-3 d-flex flex-wrap">
                        <div className="container w-50 mb-3">
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
                        <div className="bg-success rounded-3 text-light m-auto" style={{ minWidth: '19vh', width: "20vh", maxHeight: '20vh' }}>
                            <span className='mt-3  fs-3' style={{ color: '#00000', fontWeight: '200' }}>Ratings</span>
                            {/* <h2>Ratings</h2> */}
                            <h1>4/3.5</h1>
                            <span>786 Ratings</span><br />
                            <span>786 Reviews</span>
                        </div>
                    </div>


                </div>
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
                            <h5 className='mx-3'> Feedback's</h5>
                            <div className="container mt-5">
                                {feedbackData?.map((item) => <>
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
    )
}
