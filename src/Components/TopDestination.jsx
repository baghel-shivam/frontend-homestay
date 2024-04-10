import React from 'react'
import img1 from '../Images/city-img (1).jpg'
import img2 from '../Images/city-img (2).jpg'
import img3 from '../Images/city-img (3).jpg'
import img4 from '../Images/city-img (4).jpg'
import img5 from '../Images/city-img (5).jpg'

export default function TopDestination(props) {
    const Data =
    {
        "title": "Top destination",
        "city": [
            {
                "name": "New Delhi",
                "img": img1

            },
            {
                "name": "Lucknow",
                "img": img2

            },
            {
                "name": "Dubai",
                "img": img3

            },
            {
                "name": "Gurugram",
                "img": img4

            },
            {
                "name": "Noida",
                "img": img5

            }

        ]
    }
    return (
        <div className='top-destination py-5 m-auto' style={{ maxWidth: '1200px' }} >
            <span className='pb-4 headings'>Top Destinations</span>
            <div className="custom-hr">
                <hr />
            </div>
            <div className="container-city">
                {Data.city.map((item, index) => (
                    <div className="city-img my-3" key={index}>
                        <b className='image-content'>  {item.name}</b>
                        <img src={item.img} alt='dest' className='city-img-background' />
                    </div>
                ))}
            </div>
        </div>
    )
}
