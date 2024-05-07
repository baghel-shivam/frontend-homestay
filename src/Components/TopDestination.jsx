import React from 'react'

import assam from '../Images/assam.png'
import goa from '../Images/goa.png'
import sikkim from "../Images/sikkim.png"
import laddakh from "../Images/laddakh.png"
import uttrakhand from "../Images/uttrakhand.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


export default function TopDestination(props) {
    const Data =
    {
        "title": "Top destination",
        "city": [
            {
                "name": "Himachal Pradesh",
                "img": "https://img.freepik.com/free-photo/landscape-with-mountain-meadow_1398-5059.jpg?t=st=1714359786~exp=1714363386~hmac=49cef6ac5e1f3a4936285786bb6b9627550aa92310245e5c1b137de2cd2bcd01&w=996"

            },
            {
                "name": "Uttra Khand",
                "img": uttrakhand

            },
            {
                "name": "Kerala",
                "img": "https://img.freepik.com/free-photo/aerial-shot-beautiful-green-landscape-with-high-mountains-sagada-philippines_181624-30936.jpg?t=st=1714359712~exp=1714363312~hmac=bc914007832cce0f3e1b815ff6ca7c913099bb52079875e7667e97d847eb66eb&w=1060"

            },
            {
                "name": "Assam",
                "img": assam

            },
            {
                "name": "Goa",
                "img": goa

            },
            {
                "name": "Sikkim",
                "img": sikkim

            },
            {
                "name": "Laddakh",
                "img": laddakh

            }

        ]
    }
    return (
        <div className='top-destination py-5 m-auto overflow-hidden' style={{ maxWidth: '1200px' }} >
            <span className='pb-4 headings'>Top Destinations</span>
            <div className="custom-hr">
                <hr />
            </div>
            <div className="container-city">
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {  // Adjusted breakpoint for small screens
                            slidesPerView: 1.5,  // Show only 1 slide on small screens
                            spaceBetween: 10,  // Adjust spacing as needed
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4.5,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination]}
                    className="myNewSwiper"
                >
                    {Data.city.map((item, index) => (
                        <SwiperSlide>
                            <div className="city-img " key={index}>
                                <b className='image-content'>  {item.name}</b>
                                <img src={item.img} alt='dest' className='city-img-background' />
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>

            </div>
        </div>
    )
}
