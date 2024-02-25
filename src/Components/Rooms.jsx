import React from 'react'
import '../Components/Styles/rooms.css'
import Form from './Form'
import img from '../Images/pic1.jpg'
import img2 from '../Images/bg.jpg'
import img3 from '../Images/pic2.jpg'
import img4 from '../Images/pic3.jpg'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



export default function Rooms() {
    const navigate = useNavigate()
    const data = useSelector((state) => state.SearchRoom)   
    console.log(data, 'this is data')
    const rooms = [
        {
            address: 'Delhi, Delhi, New Ashok Nagar , 909090',
            rate: 4,
            total_review_count: '1k',
            this_property_offers: [
                {
                    wifi: true,
                    tv: true,
                    ac: false,
                    parking: true,
                    daily_housekeeping: false,
                }
            ],

            price: '999',
            location: 'Helle , Its just for fun!',
            image: [img, img2, img3, img4]
        },


        {
            title: 'Tow room set',
            rate: 4,
            address: 'Delhi, Delhi, New Ashok Nagar , 909090',
            total_review_count: '1k',
            left_room: "4 Room left",
            this_property_offers: [
                {
                    wifi: false,
                    tv: true,
                    ac: false,
                    parking: true,
                    daily_housekeeping: false,
                }
            ],
            price: '9999',
            available: 'false',
            location: 'Helle , Its just for fun!',
            image: [img, img2, img3, img4]
        },
        {
            title: 'Tow room set',
            rate: 3,
            address: 'Delhi, Delhi, New Ashok Nagar , 909090',
            total_review_count: '1k',
            left_room: "4 Room left",
            this_property_offers: [
                {
                    wifi: true,
                    tv: true,
                    ac: true,
                    parking: true,
                    daily_housekeeping: false,
                }
            ],
            price: '9999',
            available: 'false',
            location: 'Helle , Its just for fun!',
            image: [img, img2, img3, img4]

        },
        {
            title: 'Tow room set',
            rate: 4,
            address: 'Delhi, Delhi, New Ashok Nagar , 909090',
            total_review_count: '1k',
            left_room: "4 Room left",
            this_property_offers: [
                {
                    wifi: false,
                    tv: false,
                    ac: false,
                    parking: false,
                    daily_housekeeping: false,
                }
            ],
            price: '9999',
            available: 'false',
            location: 'Helle , Its just for fun!',
            image: [img, img2, img3, img4]

        },
    ]

    return (

        <div className='Room_div'>
            <div className='mx-lg-5 mx-5 mx-md-5 py-4 px-lg-5  px-sm-2'>
                <Form />
            </div>
            <hr />
            <div className='' style={{ marginTop: '5px', marginBottom: "-70px" }}>

                <span className='mt-3 fs-1' style={{ color: '#00000', fontWeight: '700' }}>Rooms</span>
            </div>
            <div className='d-flex flex-wrap m-lg-5 m-md-5 py-5 mt-5  px-lg-4 px-sm-0'>
                {data?.data?.map((item, roomIndex) => (
                    <div class="card m-auto my-2" id={`Room_card`} key={roomIndex}>
                        <div>
                            <div id={`carouselExampleCaptions_${roomIndex}`} class="carousel slide">
                                <div class="carousel-inner">
                                    {/* {item?.image.map((image, index) => (
                                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                            <img src={image} class="d-block w-100" alt="..." />
                                        </div>
                                    ))} */}
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


                        <div className="card-body pointer-event" onClick={() => navigate('/view-details')}>
                            <h6 className="card-title">{item.full_addres} </h6>

                            <div className="row pt-3" style={{ borderTop: '1px solid gray' }}>
                                <div className="col">
                                    <h5 className="card-title"><span className='fs-5'> &#8377; {parseInt(item.base_price).toLocaleString('en-IN')}</span></h5>
                                </div>
                                <div className="col text-end">
                                    <span className='btn btn-success btn-sm'>{item.rate} &#9733;</span>
                                </div>
                            </div>

                            {/* <div className="row">
                                <div className="col">
                                    <div className='d-flex' style={{ fontSize: '13px' }}>  <span >Ratings :</span>  <span > <Rating number={item.rate} /></span></div>
                                </div>
                                <div className="col">
                                    <div className='d-flex' style={{ fontSize: '13px' }}>Reviews : <span> {item?.total_review_count}+</span></div>
                                </div>
                            </div> */}

                        </div>


                        <div className="card-body">
                            {/* <hr/> */}
                            <div className='d-flex justify-content-center'>
                                <Link to="/view-details" style={{ color: '#000000' }} className="card-link mt-1">View Details</Link>

                                {/* <button className='btn px-4' id='button'>Book </button> */}
                            </div>
                        </div>

                    </div>
                ))}

            </div>


        </div>

    )
}
