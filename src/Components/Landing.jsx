import React, { useEffect, useRef } from 'react'
import './Styles/Landing.css'
import Form from './Form'
import bg from '../Images/bg.jpg'
import TopDestination from './TopDestination';
import WhyBook from './WhyBook';
import WasThisPageHelpfull from './WasThisPageHelpfull';
import AboutUs from './AboutUs';
import ContectUs from './ContectUs';
import { StoreAbout_us_Ref, StoreContactRef , StoreLanding_Ref} from '../Redux/RefShare/Reference_Slice';
import { useDispatch } from 'react-redux';


export default function Landing() {
    const ref_about = useRef(null)
    const ref_landing = useRef(null)
    const ref_contact = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(StoreContactRef(ref_contact.current))
        dispatch(StoreAbout_us_Ref(ref_about.current))
        dispatch(StoreLanding_Ref(ref_landing.current))
    }, [dispatch])


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

        <div className='only_for_bg' >

            <div style={bgStyle} ref={ref_landing}></div>

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
                <hr />
            </div>
            <TopDestination  />
            <AboutUs Ref={ref_about}/>
            <ContectUs Ref={ref_contact} />
            <WasThisPageHelpfull />
        </div>

    )
}
