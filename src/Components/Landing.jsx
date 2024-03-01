import React from 'react'
import './Styles/Landing.css'
import Form from './Form'
import bg from '../Images/bg.jpg'
import TopDestination from './TopDestination';
import img from '../Images/city-img (1).jpg'
import WhyBook from './WhyBook';
import WasThisPageHelpfull from './WasThisPageHelpfull';
import AboutUs from './AboutUs';
import ContectUs from './ContectUs';

export default function Landing() {
    const wrapperStyle = {
        // position: 'relative',
        // height: '60%',
        // overflow:'hidden',
        // width: '100%',
        // border:'2px solid red'
    };

    const bgStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '70%',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(2px)',
        WebkitFilter: 'blur(2px)',
        zIndex: '-99999',
    };

    const contentContainerStyle = {
        position: 'relative',
        zIndex: '2',
    };
    return (

        <div className='only_for_bg' style={wrapperStyle}>

            <div style={bgStyle}></div>

            <div id='Landing_form_container' style={contentContainerStyle}>
                <div className="container text-center p-4" id='Child_form'>
                    <div className='Main_title'>

                        <h1>Discover Unique <span id='homestay'>HomeStays</span> in Your Area.</h1>
                    </div>
                    <Form />
                </div>
            </div>
            <WhyBook />
            <div class="custom-hr">
              <hr/>
            </div>
            <TopDestination />
            {/* <hr/> */}
            <AboutUs/>
            <ContectUs/>
            <WasThisPageHelpfull/>
        </div>

    )
}
