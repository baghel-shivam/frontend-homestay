import React from 'react'
import '../Components/Styles/homeStayform.css'
import { useState } from 'react';
import img from '../Images/patrick-robert-doyle-AH8zKXqFITA-unsplash.jpg'
import states from '../Demo.json'
export default function AddYourHomeStay() {
    console.log(states)
    const [formData, setFormData] = useState({
        homeStayName: '',
        address: '',
        email: '',
        phoneNumber: '',
        contactPersonName: '',
        nearestAirport: '',
        nearestTrainStation: '',
        howToReach: '',
        roomType: '',
        pricePerRoom: '',
        state: '',
        district: '',
        nearestAttraction1: '',
        nearestAttraction2: '',
        totalRooms: '',
        checked: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };
    return (
        <div className='container add-your-home-stay'>
            <h2>Add your Home stay</h2>
            <div className="row mt-5 container my-5">
                <div className="col add-home-stay-form-img" style={{ backgroundImage: img }}>
                    <img src={img} height={'100%'} width={'100%'} alt='form-img' />
                </div>
                <div className="col">
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="homeStayName" value={formData.homeStayName} onChange={handleChange} placeholder="Name of home stay" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <select className="form-select" name="totalRooms" value={formData.state} onChange={handleChange} title="Total Room">
                                            <option selected>State</option>
                                            {states?.states.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="district" value={formData.district} onChange={handleChange} placeholder="Enter district" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="mb-3 input-group">
                                            <span class="input-group-text">+91</span>
                                            <input type="tel" className="form-control" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone number" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="contactPersonName" value={formData.contactPersonName} onChange={handleChange} placeholder="Contact person name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="nearestAirport" value={formData.nearestAirport} onChange={handleChange} placeholder="Nearest Airport" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="nearestAttraction1" value={formData.nearestAttraction1} onChange={handleChange} placeholder="Nearest attraction point-1" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="nearestAttraction2" value={formData.nearestAttraction2} onChange={handleChange} placeholder="Nearest attraction point-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="nearestTrainStation" value={formData.nearestTrainStation} onChange={handleChange} placeholder="Nearest train station" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="howToReach" value={formData.howToReach} onChange={handleChange} placeholder="How to reach" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <select className="form-select" name="roomType" value={formData.roomType} onChange={handleChange} title="Room type">
                                            <option selected>Select Room Type</option>
                                            <option value="Single bed">Single bed</option>
                                            <option value="Double bed">Double bed</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <select className="form-select" name="totalRooms" value={formData.totalRooms} onChange={handleChange} title="Total Room">
                                            <option selected>Total Room</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3 input-group">
                                        <span class="input-group-text">$</span>
                                        <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" name="pricePerRoom" value={formData.pricePerRoom} onChange={handleChange} placeholder="Price per room" />
                                        <span class="input-group-text">.00</span>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" name="checked" checked={formData.checked} onChange={() => setFormData({ ...formData, checked: !formData.checked })} id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                </div>
                            </div>


                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
