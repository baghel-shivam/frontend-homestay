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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/search-rooms' element={<Rooms />} />
          <Route path='/view-details' element={<View_in_details />} />
          <Route path='/booking' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/sing-up' element={<Sign_up />} />
          <Route path='/add-homestay' element={<AddYourHomeStay />} />
          
        </Routes>
              <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
