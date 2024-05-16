import React from 'react'
import img from '../Images/about_us.jpg'

export default function AboutUs(props) {
  return (
    <div className='container my-5' id='about' ref={props.Ref}>
      <div className='mb-5'>
        <span className='headings mb-5'>About us</span>
        <div className="custom-hr">
          <hr />
        </div>
      </div>
      <div className="row rounded-3" style={{ border: '1px solid #f2f2f2', background: '#f2f2f2' }}>
        <div className="col-12 col-lg-6">
          <div className='bg-about-image pt-1 h-100 d-flex align-item-center'>
            <img src={img} className="bg-image" alt="bg img" />
          </div>
        </div>
        <div className="col-12 col-lg-6 p-3 px-4 text-start">
          <span className='sub-heading text-start'> What we're about
            <hr />
          </span>
          <p>
          We're big fans of home sharing and dedicated to offering quality rooms at wallet-friendly prices, and to giving hosts an opportunity to rent out their spare rooms on our global marketplace.
          </p>

          <span className='sub-heading'>Our story:
            <hr /></span>
          <p>
          Established with the goal of revolutionizing the online tourism sector and popularizing homestays and private room rentals as preferred lodging options.

          </p>
        </div>
      </div>
    </div>
  )
}
