import React, { useState } from 'react'
import './Styles/Landing.css'
import Form from './Form'
import bg from '../Images/bg.jpg'

export default function Landing() {
    const wrapperStyle = {
        position: 'relative',
        height: '100%',
        width: '100%',
    };

    const bgStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(2px)',
        WebkitFilter: 'blur(2px)',
        zIndex: '1',
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
                        <h1>Discover Unique <span id='homestay'>HomeStays</span> in Your Area</h1>
                    </div>
                    <Form />
                </div>
            </div>
        </div>

    )
}
