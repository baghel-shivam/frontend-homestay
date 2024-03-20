import React, { useEffect } from 'react'
import '../Components/Styles/homeStayform.css'
import { useState } from 'react';
import states from '../Demo.json'
import Toast from './Toast.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { AddNewProperty } from '../Redux/AddNewPro/AddPropAction.js';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading.jsx';

export default function AddYourHomeStay() {
    const AddProp = useSelector((state) => state?.AddProp)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        site_name: '',
        full_address_one_line: '',
        about_this_room: '',
        area: '',
        pincode: '',
        front_img: '',
        state: '',
        city: '',
        contact_person: "",
        price_currency: "INR",
        contact_email: '',
        contact_phn: '',
        how_to_reach: '',
        nearest_attraction_1: '',
        nearest_attraction_2: '',
        category: '',
        base_price: 0,
        totalRooms: '',
        checked: false,
        is_couple_allowed: false,
        can_locals_stay: false,
        should_coupon_applied: false,
        is_wifi_available: false,
        is_tv_available: false,
        is_ac_available: false,
        is_parking_available: false,
        is_housekeeping_available: false,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        setFormData({ /* initial form data */ });
    }, [AddProp?.data])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(AddNewProperty(formData));
            setFormData({ /* initial form data */ });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='container add-your-home-stay pt-3'>
            {AddProp.status === 'loading' && <Loading />}
            {AddProp.status === 'succeeded' && <Toast msg={AddProp?.data} />}
            <h2 className='title'>Add your property</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mt-4 container my-5 p-4 child-add-your-home-stay">
                    {/* <div className="col-md-4">
                    <img src={img} className="img-fluid add-home-stay-form-img" alt="form-img" />
                </div> */}
                    <div className="col-md-6 ">
                        <h5 className='text-start mx-3 mb-4'>About room</h5>
                        <div className="container mt-2">
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="site_name" value={formData.homeStayName} onChange={handleChange} placeholder="Name of home stay" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="full_address_one_line" value={formData.address} onChange={handleChange} placeholder="Full address " />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3">
                                        <textarea required type="text" className="form-control" name="about_this_room" value={formData.about_this_room} onChange={handleChange} placeholder="About this room" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <select className="form-select" name="state" value={formData.state} onChange={handleChange} title="Total Room">
                                            <option value="">State</option>
                                            {states?.states.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} placeholder="Enter city" />
                                    </div>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="area" value={formData.area} onChange={handleChange} placeholder="Area" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input required type="number" className="form-control" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pin-code" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input
                                            required
                                            type="file"
                                            className="form-control"
                                            name="front_img"
                                            value={formData.front_img}
                                            onChange={handleChange}
                                            placeholder="front_img"
                                            accept=".jpg, .jpeg"
                                        />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="contact_person" value={formData.contact_person} onChange={handleChange} placeholder="Contact person name" />
                                    </div>


                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input required type="email" className="form-control" name="contact_email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="mb-3 input-group">
                                            <span class="input-group-text">+91</span>
                                            <input required type="tel" pattern="[0-9]{10}" minlength="10" maxlength="10" className="form-control" name="contact_phn" value={formData.contact_phn} onChange={handleChange} placeholder="Phone number" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="how_to_reach" value={formData.how_to_reach} onChange={handleChange} placeholder="How to reach" />
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 className=' mx-3 mb-4 text-start'>About features</h5>
                        <div className="container mt-2">
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="nearest_attraction_1" value={formData.nearest_attraction_1} onChange={handleChange} placeholder="Nearest attraction point-1" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="nearest_attraction_2" value={formData.nearest_attraction_2} onChange={handleChange} placeholder="Nearest attraction point-2" />
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3 input-group">
                                        <span class="input-group-text">&#8377;</span>
                                        <input required type="number" className="form-control" aria-label="Amount (to the nearest rupees)" name="base_price" value={formData.base_price} onChange={handleChange} placeholder="Price per room" />
                                        <span class="input-group-text">.00</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <select className="form-select" name="category" value={formData.roomType} onChange={handleChange} title="category">
                                            <option selected>Select Room Type</option>
                                            <option value="Single bed">Premium</option>
                                            <option value="Double bed">Economy</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-start">
                                <div className="col">
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_couple_allowed"
                                            checked={formData.is_couple_allowed}
                                            onChange={() => setFormData({ ...formData, is_couple_allowed: !formData.is_couple_allowed })}
                                        />
                                        <label className="form-check-label">Couple Allowed</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_tv_available"
                                            checked={formData.is_tv_available}
                                            onChange={() => setFormData({ ...formData, is_tv_available: !formData.is_tv_available })}
                                        />
                                        <label className="form-check-label">Is tv available</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="can_locals_stay"
                                            checked={formData.can_locals_stay}
                                            onChange={() => setFormData({ ...formData, can_locals_stay: !formData.can_locals_stay })}
                                        />
                                        <label className="form-check-label">Locals Can Stay</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="should_coupon_applied"
                                            checked={formData.should_coupon_applied}
                                            onChange={() => setFormData({ ...formData, should_coupon_applied: !formData.should_coupon_applied })}
                                        />
                                        <label className="form-check-label">Apply Coupon</label>
                                    </div>
                                </div>
                                {/* <div className="col"></div> */}

                                <div className="col-6 gap-2">
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_wifi_available"
                                            checked={formData.is_wifi_available}
                                            onChange={() => setFormData({ ...formData, is_wifi_available: !formData.is_wifi_available })}
                                        />
                                        <label className="form-check-label">Wi-Fi Available</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_wifi_available"
                                            checked={formData.is_parking_available}
                                            onChange={() => setFormData({ ...formData, is_parking_available: !formData.is_parking_available })}
                                        />
                                        <label className="form-check-label">Is parking available</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_wifi_available"
                                            checked={formData.is_ac_available}
                                            onChange={() => setFormData({ ...formData, is_ac_available: !formData.is_ac_available })}
                                        />
                                        <label className="form-check-label">Is ac available</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_wifi_available"
                                            checked={formData.is_housekeeping_available}
                                            onChange={() => setFormData({ ...formData, is_housekeeping_available: !formData.is_housekeeping_available })}
                                        />
                                        <label className="form-check-label">Is housekeeping available</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4 px-4">
                                <div className="mb-3 text-start form-check x-5">
                                    <input required type="checkbox" className="form-check-input " name="checked" checked={formData.checked} onChange={() => setFormData({ ...formData, checked: !formData.checked })} id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Accept terms & conditions</label>
                                </div>
                            </div>
                            <button type="submit" className="card-link mt-1 btn btn-success w-50">Submit</button>
                        </div>
                    </div>


                </div>
            </form>
        </div>
    )
}

{/* <div className="col-md-6">
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
</div> */} 