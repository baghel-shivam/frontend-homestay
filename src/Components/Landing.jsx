import React, { useEffect, useRef } from 'react'
import './Styles/Landing.css'
import Form from './Form'
import bg from '../Images/bg-new.jpg'
import TopDestination from './TopDestination';
import WhyBook from './WhyBook';
import WasThisPageHelpfull from './WasThisPageHelpfull';
import AboutUs from './AboutUs';
import ContectUs from './ContectUs';
import { StoreAbout_us_Ref, StoreContactRef, StoreLanding_Ref } from '../Redux/RefShare/Reference_Slice';
import { useDispatch } from 'react-redux';
import ChatBoat from './ChatBoat/ChatBoat';
import DateRangePickerValue from './DateRange';

export default function Landing() {
    const ref_about = useRef(null)
    const ref_landing = useRef(null)
    const ref_contact = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        ref_landing.current.focus();
    }, [])

    useEffect(() => {
        dispatch(StoreContactRef((ref_contact.current)))
        dispatch(StoreAbout_us_Ref(ref_about.current))
        dispatch(StoreLanding_Ref(ref_landing.current))
    }, [dispatch])


    const bgStyle = {
               backgroundImage: `url(${bg})`,
       
    };

    const contentContainerStyle = {
        position: 'relative',
        zIndex: '2',
    };

    return (
        <div className='only_for_bg' >
            <div className='bg_style' style={bgStyle} tabIndex={0} ref={ref_landing}></div>
            <div id='Landing_form_container' style={contentContainerStyle}>
                <div className="container text-center p-4" id='Child_form'>
                    <div className='Main_title'>
                        <h1>Explore Exquisite Offbeat  <span id='homestay'>HomeStays</span> </h1>
                    </div>
                    <Form />
                </div>
            </div>
            <WhyBook />
            <div className='Landing-width-adjustment'>
                <TopDestination />
                <AboutUs Ref={ref_about} />
                <ContectUs Ref={ref_contact} />
                <WasThisPageHelpfull />
            </div>
        </div>

    )
}
