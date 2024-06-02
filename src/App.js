import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Rooms from './Components/Rooms';
import View_in_details from './Components/View_in_details';
import Login from './Components/Login';
import Otp from './Components/Otp';
import Sign_up from './Components/Sign_up';
import Checkout from './Components/Checkout';
import AddYourHomeStay from './Components/AddYourHomeStay';
import { useEffect } from 'react';
import NotFound from './Components/NotFound';
import Help from './Components/Help';
import Support from './Components/Support';
import Billing from './Components/Help/Billing'
import BookingAss from './Components/Help/BookingAss'
import Customer from './Components/Help/Customer'
import StaySupport from './Components/Help/StaySupport'
import HealthSafety from './Components/Help/HealthSafety'
import TechnicalSupport from './Components/Help/TechnicalSupport'
import TravelAssi from './Components/Help/TravelAssi'
import ChatBoat from './Components/ChatBoat/ChatBoat';
import WhoIsMonal from './Components/WhoIsMonal';

function App() {
  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/' && !path.startsWith('/search-rooms') && !path.startsWith('/view-details') && !path.startsWith('/booking') && !path.startsWith('/login') && !path.startsWith('/otp') && !path.startsWith('/sign-up') && !path.startsWith('/add-homestay')) {
      window.location.href = '/';
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ChatBoat />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/search-rooms" element={<Rooms />} />
          <Route path="/view-details" element={<View_in_details />} />
          <Route path="/booking" element={<Checkout />} />
          <Route path="/help" element={<Help />} />
          {/* <Route path="/who_is_monal" element={<WhoIsMonal />} /> */}

          <Route path="/technical-support" element={<TechnicalSupport />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/booking-assistance" element={<BookingAss />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/health-safety" element={<HealthSafety />} />
          <Route path="/stay-support" element={<StaySupport />} />
          <Route path="/technical-support" element={<TechnicalSupport />} />
          <Route path="/travel-assistance" element={<TravelAssi />} />


          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/sign-up" element={<Sign_up />} />
          <Route path="/support" element={<Support />} />
          <Route path="/add-homestay" element={<AddYourHomeStay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
