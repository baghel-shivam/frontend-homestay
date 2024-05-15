import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import instagram from '../Images/IconsForFooter/instagram.png'
import facebook from '../Images/IconsForFooter/facebook.png'
import twitter from '../Images/IconsForFooter/twitter.png'
export default function Footer() {
  const navigate = useNavigate();
  const { Contact_ref, About_US_ref, Landing_ref } = useSelector((state) => state.Ref);

  const handleNav = async (ref_to) => {
    if (window.location.pathname === '/') {
      if (ref_to instanceof HTMLElement) {
        ref_to.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (window.location.pathname === '/add-homestay') {
      await navigate('/');
    } else {
      navigate('/');
    }
  };

  return (

    <footer className="shadow text-light" style={{ background: "#454545" }} >
      <div className="d-flex flex-column mx-auto pt-5 py-2" style={{ width: '90%' }}>
        <div className="flex-wrap d-flex justify-content-between">
          <div className='text-start'>
            <span className="h3 font-weight-bold " style={{ color: '#00000', fontFamily: 'Trebuchet MS, sans-seri', wordSpacing: '2px', letterSpacing: '3px' }}>HomeStay</span>
            <p className="my-3 text-start m-0 p-0" style={{ width: '250px', color: '#00000' }}>
              We are providing high quality resources and Rooms to Aid Guest during Travel
            </p>
          </div>
          <div className='text-start'>
            <p className="h5 mb-4" style={{ fontWeight: 600, color: '#00000' }}>
              HomeStay
            </p>
            <div id='' className="d-flex flex-column text-start " style={{ cursor: 'pointer', padding: 0, color: '#00000' }}>
              <a onClick={() => handleNav(Landing_ref)} className='nav-link active'>Home</a>
              <a onClick={() => handleNav(About_US_ref)} className='nav-link active mt-1'>About Us</a>
              <a onClick={() => handleNav(Contact_ref)} className='nav-link active mt-1'>Contact Us</a>
            </div>
          </div>
          <div className='text-start'>
            <p className="h5 mb-4" style={{ fontWeight: 600, color: '#00000' }}>
              Help
            </p>
            <div className="d-flex flex-column text-start " style={{ cursor: 'pointer', padding: 0, color: '#00000' }}>
              <Link to={'/support'} className='nav-link active'> Support</Link>
              {/* <Link to={'/support'} className='nav-link active'> Contact us </Link> */}

            </div>
          </div>
          <div className='text-start'>
            <p className="h5 mb-2" style={{ fontWeight: 600, color: '#00000' }}>
              Products
            </p>
            <div className="d-flex flex-column text-start " style={{ cursor: 'pointer', padding: 0, color: '#00000' }}>
              <div className="d-flex justify-content-evenly mt-4 mx-auto" style={{ width: '100%', color: '#00000' }}>
                <a href="https://www.facebook.com/your-facebook" className='text-light mx-3'>  <img src={facebook} height={30} /></a>
                <a href="https://twitter.com/?lang=en" className='text-light mx-3'>  <img src={twitter} height={30} /></a>
                <a href="https://www.instagram.com/your-instagram" className='text-light mx-3'>  <img src={instagram} height={30} /></a>

              </div>
            </div>
          </div>
        </div>
        <small className="text-center mt-5" style={{ width: '100%', color: '#00000' }}>
          &copy; @lazymonal, 2024. All rights reserved
        </small>
      </div>

    </footer>
  );
}
