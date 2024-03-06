import React from 'react'
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
import NavForm from './NavForm'


export default function Rooms() {
    const navigate = useNavigate()
    const data = useSelector((state) => state.SearchRoom)
    const rooms = [
        {
            address: 'Delhi, Delhi, New Ashok Nagar , 909090',
            rate: 4,
            total_review_count: '1k',
            suggested: true,
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
            suggested: false,
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
            suggested: false,
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
            suggested: false,
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

        <div className='container Room_div '>
            <div className='row nav-form-parent'>
                <div className="col-lg-3 px-1 col-sm-12 col-md-3">
                    <div className='d-none d-lg-block d-xl-block d-md-block'>
                        <NavForm />
                    </div>
                    <div className='col-12 d-block d-sm-block d-md-none d-lg-none'>
                        <Form />
                    </div>
                </div>
                <div className="col-9 scroll-to-show-all-rooms text-start pt-3">
                    <span className='fs-4 fw-bold  mt-5 result-text'>312 HomeStay in Noida, Uttar Pradesh, India</span>
                    <hr />
                    <div className='room-collections mt-5  px-lg-1 px-sm-0'>
                        {rooms?.map((item, roomIndex) => (
                            <>
                                <div class="card border-none mb-3" >
                                    {item.suggested &&
                                        <div className='tag'>
                                            <img src={tag} className='img-class' alt='recommended tag' />
                                        </div>

                                    }
                                    <div class="row g-0">
                                        <div class="col-md-4 h100">
                                            <div>
                                                <div id={`carouselExampleCaptions_${roomIndex}`} class="carousel slide">
                                                    <div class="carousel-inner">
                                                        {item.image.map((itemImg, index) => (
                                                            <div class={"carousel-item" + (index === 0 ? " active" : "")}>
                                                                <img src={itemImg} class="d-block w-100" alt="..." />
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
                                        <div class="col-md-8">
                                            <div className="card-body" onClick={() => navigate('/view-details')}>
                                                <h6 className="card-title">{item.full_addres} Super OYO Collection O Hotel Noida Stays </h6>
                                                <p>Opposite Fire Station, Noida</p>
                                                <div className="">
                                                    <span className='btn btn-success btn-sm'>{item.rate} &#9733;</span>
                                                    <span className='mx-3'>(5 Ratings)</span>
                                                    <div class='text-start w-100'>
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
                                                        <span className='fs-5'>
                                                            &#8377; 1200
                                                            {/* {parseInt(item.base_price).toLocaleString('en-IN')} */}
                                                        </span>
                                                    </div>
                                                    <div className="col"> <div className='d-flex justify-content-end'>
                                                        <Link to="/view-details" style={{ color: '#000000' }} className="card-link btn btn-link mt-1">View Details</Link>
                                                        <button className="card-link mt-1 btn btn-dark">Book Now</button>
                                                    </div></div>
                                                </div>

                                            </div>
                                            {/* <div className="card-body">
                                                <div className='d-flex justify-content-end'>
                                                    <Link to="/view-details" style={{ color: '#000000' }} className="card-link mt-1">View Details</Link>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

// {
//     data?.data?.map((item, roomIndex) => (
//         <div class="card m-auto my-2" id={`Room_card`} key={roomIndex}>
//             <div>
//                 <div id={`carouselExampleCaptions_${roomIndex}`} class="carousel slide">
//                     <div class="carousel-inner">
//                     </div>
//                     <button class="carousel-control-prev" type="button" data-bs-target={`#carouselExampleCaptions_${roomIndex}`} data-bs-slide="prev">
//                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Previous</span>
//                     </button>
//                     <button class="carousel-control-next" type="button" data-bs-target={`#carouselExampleCaptions_${roomIndex}`} data-bs-slide="next">
//                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Next</span>
//                     </button>
//                 </div>
//             </div>


//             <div className="card-body pointer-event" onClick={() => navigate('/view-details')}>
//                 <h6 className="card-title">{item.full_addres} </h6>

//                 <div className="row pt-3" style={{ borderTop: '1px solid gray' }}>
//                     <div className="col">
//                         <h5 className="card-title"><span className='fs-5'> &#8377; {parseInt(item.base_price).toLocaleString('en-IN')}</span></h5>
//                     </div>
//                     <div className="col text-end">
//                         <span className='btn btn-success btn-sm'>{item.rate} &#9733;</span>
//                     </div>
//                 </div>


//             </div>


//             <div className="card-body">

//                 <div className='d-flex justify-content-center'>
//                     <Link to="/view-details" style={{ color: '#000000' }} className="card-link mt-1">View Details</Link>


//                 </div>
//             </div>

//         </div>
//     ))
// }