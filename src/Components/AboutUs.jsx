import React from 'react'
import img from '../Images/about_us/about_us.jpg'
import services from '../Images/about_us/24-hours-service.png'
import coin from '../Images/about_us/coin.png'
import guest from '../Images/about_us/guests.png'
import rating from '../Images/about_us/rating.png'
import star from '../Images/about_us/star.png'

export default function AboutUs(props) {
  const data = [
    {
      name: "24 X7 SUPPORT",
      icon: services,
    }, {
      name: "15K GUEST REVIEWS",
      icon: rating,
    }
    , {
      name: "4/5 RATINGS",
      icon: star,
    }
    , {
      name: "$1800 PER YEAR APPROXIMATELY",
      icon: coin,
    }
    , {
      name: "100K + GUESTS",
      icon: guest,
    }
  ]
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
          <span className='sub-heading text-start'> What we're about:
            <hr />
          </span>
          <p>
            LazyMonal is dedicated to empowering authentic rural families, especially those managing homestays. We're committed to offering a distinctive, culturally immersive experience that allows you to embrace nature and connect with local traditions, all while providing these families with an alternative income source that safeguards their traditions, culture, and heritage. Our overarching goal is to strengthen the rural economy, promote sustainable tourism, and stem the tide of migration from villages.
          </p>

          <span className='sub-heading'>Our story:
            <hr /></span>
          <p>
            Established with the goal of revolutionizing the online tourism sector and popularizing homestays and private room rentals as preferred lodging options.

          </p>
          <span className='sub-heading text-start'> At a glance:
            <hr />
          </span>

          <div className="about-items">
            {data?.map((item) =>
              <div className="about-item">
                <div className='about-icon-div'>
                  <img src={item?.icon} height={30} />
                </div>
                <div className='about-content'>
                  <span>{item.name}</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
