import React from 'react';

export default function Footer() {
  return (

    <footer className="shadow" style={{ background: 'rgb(238 238 238)', color: '#000000' }}>
      <div className="d-flex flex-column mx-auto py-5" style={{ width: '90%' }}>
        <div className="flex-wrap d-flex justify-content-between">
          <div  className='text-start'>
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
              <a href="/" className='nav-link active'>Home</a>
              <a href="/" className='nav-link active mt-1'>About Us</a>
              <a href="/" className='nav-link active mt-1'>Contact</a>
            </div>
          </div>
          <div  className='text-start'>
            <p className="h5 mb-4" style={{ fontWeight: 600, color: '#00000' }}>
              Help
            </p>
            <div className="d-flex flex-column text-start " style={{ cursor: 'pointer', padding: 0, color: '#00000' }}>
              <a href="/" className='nav-link active'>Support</a>
              <a href="/" className='nav-link active mt-1'>Sign Up</a>
              <a href="/" className='nav-link active mt-1'>Sign In</a>
            </div>
          </div>
          <div  className='text-start'>
            <p className="h5 mb-2" style={{ fontWeight: 600, color: '#00000' }}>
              Products
            </p>
            <div className="d-flex flex-column text-start " style={{ cursor: 'pointer', padding: 0, color: '#00000' }}>
              <div className="d-flex mt-4 mx-auto" style={{ width: '100%', color: '#00000' }}>

                <button className="btn btn-dark btn-flat px-3 mx-2">
                  <i class="bi bi-facebook"></i>
                </button>
                <button className="btn btn-dark btn-flat px-3 mx-2">
                  <i class="bi bi-twitter-x"></i>
                </button>
                <button className="btn btn-dark btn-flat px-3 mx-2">
                  <i class="bi bi-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <small className="text-center mt-5" style={{ width: '100%', color: '#00000' }}>
          &copy; HomeStay, 2024. All rights reserved.
        </small>
      </div>

    </footer>
  );
}
