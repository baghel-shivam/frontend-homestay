import React from 'react'
import img from '../Images/city-img (5).jpg'
import '../Components/Styles/Help.css'
import ts from '../Images/PremiumIcons/help-desk.png'
import ba from '../Images/PremiumIcons/partner.png'
import cs from '../Images/PremiumIcons/rating.png'
import ta from '../Images/PremiumIcons/travel.png'
import bp from '../Images/PremiumIcons/bill.png'
import hs from '../Images/PremiumIcons/shield.png'
import ss from '../Images/PremiumIcons/support.png'
import { Link } from 'react-router-dom'

export default function Help() {
  const Data = [
    {
      "name": "Booking Assistance",
      "icon": ba,
      "link": "/booking-assistance"
    },
    {
      "name": "Stay Support",
      "icon": ss,
      "link": "/stay-support"
    },
    {
      "name": "Billing Payment",
      "icon": bp,
      "link": '/billing'
    },
    {
      "name": "Customer Service",
      "icon": cs,
      "link": '/customer'
    },
    {
      "name": "Travel Assistance",
      "icon": ta,
      "link": '/travel-assistance'
    },
    {
      "name": "Technical Support",
      "icon": ts,
      "link": '/technical-support'
    },
    {
      "name": "Health Safety",
      "icon": hs,
      "link": "/health-safety"
    }
  ]



  return (
    <div style={{ minHeight: '100vh', }}>
      <div style={{ height: "46vh", }}>
        <img src={img} style={{ objectFit: 'cover', height: '100%', width: '100%', filter: "blur(0px)" }} />
        <div className='container position-absolute' style={{ top: '25%', left: '0', right: '0' }}>
          <h1 className='text-light'>
            Need Help?
          </h1>
        </div>



      </div>
      <div className="container d-flex justify-content-center my-5" style={{ maxWidth: '1200px' }}>
        <div className='help-items'>
          {Data?.map((item) => (
              <Link to={item.link} style={{textTransform:'none', textDecoration:'none', color:'black'}}>
            <div className='help-item'>
                <div className='icon-div'>
                  <img src={item?.icon} height={70} />
                </div>
                <div className='content'>
                  <h4>{item?.name}</h4>
                </div>
            </div>
              </Link>
          ))}


        </div>
      </div>
    </div>
  )
}
