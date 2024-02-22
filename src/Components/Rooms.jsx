import React from 'react'
import '../Components/Styles/rooms.css'
import Form from './Form'
import img from '../Images/pic1.jpg'
import img2 from '../Images/bg.jpg'
import img3 from '../Images/pic2.jpg'
import img4 from '../Images/pic3.jpg'
import { Link } from 'react-router-dom'
import Rating from './Rating'



export default function Rooms() {

    const rooms = [
        {
            title: 'Tow room set',
            rate: 4,
            address: 'Delhi, Delhi, New Ashok Nagar , 909090',
            total_review_count: '1k',
            left_room: "4 Room left",
            this_property_offers: [
                {
                    wifi: true,
                    tv: true,
                    ac: false,
                    parking: true,
                    daily_housekeeping: false,
                }
            ],

            price: '9999',
            available: '10 rooms',
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
            <div className='d-flex flex-wrap m-lg-5 m-md-5 py-5 pt-5 px-lg-4 px-sm-0 mt-sm-5'>
                {rooms.map((item, roomIndex) => (
                    <div class="card m-auto my-2" id={`Room_card`} key={roomIndex}>
                        <div>
                            <div id={`carouselExampleCaptions_${roomIndex}`} class="carousel slide">
                                <div class="carousel-inner">
                                    {item?.image.map((image, index) => (
                                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                            <img src={image} class="d-block w-100" alt="..." />
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

                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <h5 class="card-title"><b> &#8377; {item.price}</b></h5>
                            <p class="card-text" style={{ fontSize: '12px' }}>
                                <i class="bi bi-geo-alt-fill"> </i> {item.address} </p>
                        </div>

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex w-100">
                                <div className='d-flex justify-content-between w-100'>
                                    <div className='d-flex' style={{ fontSize: '13px' }}>  <span >Ratings :</span>  <span > <Rating number={item.rate} /></span></div>

                                    <div className='d-flex' style={{ fontSize: '13px' }}>Reviews : <span> {item?.total_review_count}+</span></div>
                                </div>

                            </li>
                            <li class="list-group-item">
                                {item.this_property_offers.map((item) =>
                                (
                                    <div className='m-1'>
                                        <span className='mx-3'>{item.wifi ? <i class="bi bi-wifi"></i> : <i class="bi bi-wifi-off"></i>}</span>
                                        <span className='mx-3'>{item.tv ? <i class="bi bi-tv"></i> : ''}</span>
                                        <span className='mx-3'>{item.ac ? <img width="22" height="22" src="https://img.icons8.com/parakeet-line/48/air-conditioner.png" alt="air-conditioner" /> : ''}</span>
                                        <span className='fw-light m-0 p-0'> +2 more</span>
                                        {/* <span className='mx-3'>{item.parking ? <i class="bi bi-p-square"></i> : ''}</span>
                                        <span className='mx-3'>{item.daily_housekeeping ? <i class="bi bi-check-circle"></i> :' '}</span> */}
                                    </div>)
                                )}
                            </li>
                        </ul>
                        <div class="card-body">
                            <div className='d-flex justify-content-between'>
                                <Link to="/view-details" style={{ color: '#000000' }} class="card-link mt-2">View Details</Link>

                                <button className='btn px-4' id='button'>Book </button>
                            </div>
                        </div>

                    </div>
                ))}

            </div>


        </div>

    )
}
