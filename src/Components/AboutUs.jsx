import React from 'react'
import img from '../Images/about_us.jpg'

export default function AboutUs(props) {
  return (
    <div className='container-about' id='about' ref={props.Ref}>
      <div className='mb-5'>
        <span className='headings mb-5'>About us</span>
        <hr style={{ width: '90%', margin: 'auto' }} />
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className='bg-about-image pt-5'>
            <img src={img} className="bg-image" />
          </div>
        </div>
        <div className="col-12 col-lg-6 p-3 px-4 text-start">
          <span className='sub-heading text-start'> Welcome to HOMESTAY
            <hr />
          </span>
          <p>
            Your ultimate destination for finding the perfect accommodation for your stay! Whether you're a traveler in search of a cozy retreat or a property owner looking to showcase your space, HOMESTAY is here to connect you with comfort and convenience.
          </p>
          <span className='sub-heading'>For Travelers:
            <hr /></span>
          <p>
            Discover a diverse range of properties, from charming cottages to luxurious apartments, and everything in between. With our user-friendly search filters, finding your ideal stay is just a few clicks away. Explore unique features, amenities, and locations to make your trip unforgettable.
          </p>
          <span className='sub-heading'>For Property Owners:
            <hr /></span>
          <p>
            Join our community and showcase your property to travelers worldwide. With HOMESTAY, you can easily list your space, highlight its best features, and attract guests looking for a home away from home. Our platform provides tools to manage bookings, communicate with guests, and maximize your rental potential.
          </p>
        </div>
      </div>
    </div>
  )
}
