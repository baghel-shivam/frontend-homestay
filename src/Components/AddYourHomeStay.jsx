import React, { useEffect, useRef, useState } from 'react';
import '../Components/Styles/homeStayform.css';
import states from '../Demo.json';
import Terms from '../TermAndCond.json';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewProperty } from '../Redux/AddNewPro/AddPropAction.js';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading.jsx';
import TermsAndCond from './TermsAndCond.jsx';
import { ToastContainer, toast } from 'react-toastify';
import { resetAddPropStatus } from '../Redux/AddNewPro/AddPropSlice.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReCAPTCHA from 'react-google-recaptcha';

export default function AddYourHomeStay() {
    const AddProp = useSelector((state) => state?.AddProp);
    const ref = useRef(null);
    const [captchaValue, setCaptchaValue] = useState();
    const dispatch = useDispatch();
    const [lgShow, setLgShow] = useState(false);
    const [error, setError] = useState('');
    const [room, setRooms] = useState([]);
    const [show, setShow] = useState(false);
    const [ccError, setCcError] = useState('');

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        window.location.reload(true);
    };

    useEffect(() => {
        if (ref.current instanceof HTMLElement) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [ref]);

    const [roomForm, setRoomForm] = useState([]);
    const [formData, setFormData] = useState({
        site_name: '',
        full_address_one_line: '',
        about_this_room: '',
        area: '',
        pincode: '',
        front_img1: '',
        front_img2: '',
        front_img3: '',
        front_img4: '',
        front_img5: '',
        front_img6: '',
        registration_no: "",
        front_img7: '',
        category: "",
        state: '',
        city: '',
        contact_person: "",
        registration_year: '',
        expiration_year: '',
        price_currency: "INR",
        contact_email: '',
        contact_phn: '',
        how_to_reach: '',
        nearest_attraction_1: '',
        nearest_attraction_2: '',
        accept_payment_via_cc: false, // Initialize as false
        cc_number: '',
        checked: false,
        is_food_served: false,
        is_tv_available: false,
        can_locals_stay: false,
        should_coupon_applied: false,
        is_wifi_available: false,
        is_parking_available: false,
        is_ac_available: false,
        is_housekeeping_available: false,
        is_pets_allowed: false,
        is_smoking_allowed: false,
    });

    const handleFileChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        if (file && file.size <= 5242880) {
            setFormData({ ...formData, [name]: file });
        } else {
            alert('Please upload an image smaller than 5 MB.');
            e.target.value = '';
        }
    };

    const handleAddRoom = (e) => {
        e.preventDefault();
        if (roomForm?.category && roomForm?.base_price && roomForm?.room_quantity) {
            const updatedRooms = [...room, roomForm];
            setRooms(updatedRooms);
            const roomObjCounts = Object.keys(updatedRooms).length;
            setFormData({ ...formData, "rooms": updatedRooms, "roomObjCounts": roomObjCounts });
            setRoomForm({ category: '', base_price: "", room_quantity: "" });
            if (roomForm.category === 'Premium') {
                info(`Added. You Can Add Economy Rooms Also !`);
            }
            else {
                info(`Added. You Can Add Premium Rooms Also !`);
            }
        }
        else if (!roomForm.room_quantity) {
            notify("Please Enter Number of Rooms.")
        }
        else {
            notify('Select Valid price & Category');
        }
    };

    const handleDelete = (num) => {
        const filterData = room.filter((item, index) => index !== num);
        setRooms(filterData);
    };

    const validateCreditCard = (value) => {
        if (/^\d*$/.test(value)) {
            setCcError('');
            return true;
        } else {
            setCcError('Please enter a valid credit card number.');
            return false;
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'cc_number') {
            validateCreditCard(value);
        }
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const HandleChangeAddRoom = (e) => {
        const { value, name } = e.target;
        setRoomForm({ ...roomForm, [name]: value })
    };

    const notify = (msg) => toast.error(msg,
        {
            position: 'top-right',
            toastContainerClassName: 'custom-toast-container',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        }
    );

    const info = (msg) => toast.info(msg,
        {
            position: 'top-right',
            toastContainerClassName: 'custom-toast-container',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        }
    );

    const Agree = (accept, closeDialog) => {
        setLgShow(closeDialog)
        if (accept) {
            setFormData({ ...formData, checked: true });
        }
        setError('');
    };

    useEffect(() => {
        if (AddProp?.status === "succeeded") {
            handleShow();
            dispatch(resetAddPropStatus());
        } else if (AddProp?.status === "failed") {
            notify('HomeStay already exists!');
            dispatch(resetAddPropStatus());
        }
        
    }, [AddProp?.status, dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!formData.checked) {
            setError('Please accept the terms and conditions to proceed.');
            return;
        }
        if (parseInt(formData?.expiration_year) < parseInt(formData?.registration_year)) {
            notify('Expiration year should be greater than registration year!');
            return;
        }
        if (!formData.front_img1 || !formData.front_img2 || !formData.front_img3) {
            notify('Please add at least 3 Homestay images');
            return;
        }
        if (room.length === 0) {
            notify('Add room first.');
            return;
        } else {
            try {
                await dispatch(AddNewProperty(formData));
                ModalSuccess();
            } catch (error) {
                notify('Something went wrong!');
            }
        }
    };

    function ModalSuccess() {
        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className='text-success'>Your request has been sent!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Your request to add homestay is sent.
                            We will review the request and will get back to you soon.
                            Thanks
                            LazyMonal Team.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal >
            </>
        );
    }

    return (
        <div className='container add-your-home-stay pt-3' >
            {AddProp.status === 'loading' && <Loading />}
            {ModalSuccess()}
            <h2 className='title' ref={ref}>Add Your HomeStay</h2> 
             <form onSubmit={handleSubmit}>
                <div className="row px-0 mt-4 container-fluid my-5 py-3 child-add-your-home-stay">
                    <div className="col-md-6">
                        <h5 className='text-start mx-3 mb-4'>About Your Home Stay</h5>
                        <div className="container mt-2">
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="site_name" value={formData.site_name} onChange={handleChange} placeholder="Name of home stay" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="full_address_one_line" value={formData.full_address_one_line} onChange={handleChange} placeholder="Full address " />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3">
                                        <textarea required type="text" className="form-control" name="about_this_room" value={formData.about_this_room} onChange={handleChange} placeholder="Tell few awesome things about your home stay." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <select className="form-select" name="state" value={formData.state} onChange={handleChange} title="Total Room">
                                            <option value="">State</option>
                                            {states?.states?.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} placeholder="City or dist." />
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
                                        <input required type="number" min='0' className="form-control" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pin-code" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="contact_person" value={formData.contact_person} onChange={handleChange} placeholder="Contact person name" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input required type="email" className="form-control" name="contact_email" value={formData.contact_email} onChange={handleChange} placeholder="Enter email" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="mb-3 input-group">
                                            <span className="input-group-text">+91</span>
                                            <input required type="tel" pattern="[0-9]{10}" minlength="10" maxlength="10" className="form-control" name="contact_phn" value={formData.contact_phn} onChange={handleChange} placeholder="Phone number" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="upi_id" value={formData?.upi_id} onChange={handleChange} placeholder="Enter UPI ID" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="mb-3">
                                            <input required type="tel" className="form-control" name="upi_phn_no" value={formData?.upi_phn_no} onChange={handleChange} placeholder="G-pay, PhonePay, number etc" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="accept_payment_via_cc" checked={formData.accept_payment_via_cc} onChange={handleChange} value={formData?.accept_payment_via_cc} id="accept_payment_via_cc" />
                                            <label className="form-check-label" htmlFor="accept_payment_via_cc">
                                                Accept Payment Via CC
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input
                                            type='text'
                                            className={`form-control ${ccError ? 'is-invalid' : ''}`}
                                            id='cc_number'
                                            maxLength="16"
                                            minLength="16"
                                            name="cc_number"
                                            value={formData?.cc_number}
                                            onChange={handleChange}
                                            placeholder="Credit Card No."
                                            disabled={!formData.accept_payment_via_cc}
                                        />
                                        {ccError && <div className="invalid-feedback">{ccError}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-12">
                                        <div className="mb-12">
                                            <input required type="tel" className="form-control" name="registration_no" value={formData?.registration_no} onChange={handleChange} placeholder="Registration No" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <select
                                            required
                                            className="form-control"
                                            name="registration_year"
                                            value={formData?.registration_year}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Select Registration Year</option>
                                            {Array.from({ length: 101 }, (_, i) => 2001 + i).map(year => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <div className="mb-3">
                                            <select
                                                required
                                                className="form-control"
                                                name="expiration_year"
                                                value={formData?.expiration_year}
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>Select Expiration Year</option>
                                                {Array.from({ length: 101 }, (_, i) => 2001 + i).map(year => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="gst_no" value={formData?.gst_no} onChange={handleChange} placeholder="GST No" />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="how_to_reach" value={formData.how_to_reach} onChange={handleChange} placeholder="How to reach" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input required type="text" className="form-control" name="nearest_railway_station" value={formData.nearest_railway_station} onChange={handleChange} placeholder="Nearest railway station" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input required type="number" min='1' className="form-control" name="distance_from_rs" value={formData.distance_from_rs} onChange={handleChange} placeholder="Distance from railway station, (KM)" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="nearest_airport" value={formData.nearest_airport} onChange={handleChange} placeholder="Nearest airport" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="number" className="form-control" min='1' name="distance_from_ap" value={formData.distance_from_ap} onChange={handleChange} placeholder="Distance from airport, (KM)" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="nearest_metro_station" value={formData.nearest_metro_station} onChange={handleChange} placeholder="Nearest metro station" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="number" className="form-control" min='1' name="distance_from_ms" value={formData.distance_from_ms} onChange={handleChange} placeholder="Distance from metro station, (KM)" />
                                    </div>
                                </div>
                            </div>
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
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="nearest_attraction_3" value={formData.nearest_attraction_3} onChange={handleChange} placeholder="Nearest attraction point-3" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="nearest_attraction_4" value={formData?.nearest_attraction_4} onChange={handleChange} placeholder="Nearest attraction point-4" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <input type="text" className="form-control" name="nearest_attraction_5" value={formData?.nearest_attraction_5} onChange={handleChange} placeholder="Nearest attraction point-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 className=' mx-3 mb-4 text-start'>More Details About Your Homestay</h5>
                        <div className="container mt-2">
                            <div className="container px-2 py-2 rounded-3" style={{ background: '#ECECEC' }}>
                                <form onSubmit={handleAddRoom} >
                                    <div className='my-2 border-bottom'>
                                        <span className='fs-6 fw-bold py-2 w-100'>Add Your Rooms</span>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <select className="form-select" name="category" value={roomForm.category} onChange={HandleChangeAddRoom} title="category">
                                                    <option selected>Select Room Type</option>
                                                    <option value="Premium">Premium</option>
                                                    <option value="Economy">Economy</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3 input-group">
                                                <span className="input-group-text">&#8377;</span>
                                                <input required type="number" className="form-control" min="000" aria-label="Amount (to the nearest rupees)" name="base_price" value={roomForm?.base_price} onChange={HandleChangeAddRoom} placeholder="Price per room" />
                                                <span className="input-group-text">.00</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <input type='number' name='room_quantity' placeholder='Number of rooms' min="0" className='form-control' value={roomForm?.room_quantity} onChange={HandleChangeAddRoom} />
                                            </div>
                                        </div>
                                    </div>

                                    {room.length > 0 &&
                                        <div className="container">
                                            <div className="row text-dark">
                                                <div className="col">
                                                    <strong> Category</strong>
                                                </div>
                                                <div className="col">
                                                    <strong>Rooms</strong>
                                                </div>
                                                <div className="col">
                                                    <strong> Price</strong>
                                                </div>
                                                <div className="col">
                                                    <strong> Features</strong>
                                                </div>
                                                <div className="col">
                                                    <strong> Remove</strong>
                                                </div>
                                            </div>
                                            {room.map((item, index) => (
                                                <div key={index} className="row p-2 my-1 rounded-2 bg-light shadow-lg">
                                                    <div className="col">
                                                        <span>{item.category}</span>
                                                    </div>
                                                    <div className="col">
                                                        <span>{item.room_quantity}</span>
                                                    </div>
                                                    <div className="col">
                                                        <span>{item.base_price}</span>
                                                    </div>
                                                    <div className="col d-flex justify-content-evenly">
                                                        <span>
                                                            {item.is_ac_available || item.is_food_served || item.is_wifi_available || item.is_housekeeping_available
                                                                ? '1+'
                                                                : null
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="col">
                                                        <span className='mx-2 btn btn-sm' onClick={() => handleDelete(index)} title="Remove"><i className="bi bi-trash text-danger"></i></span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>}
                                    <div className="row mb-3">
                                        <div className="col text-end">
                                            <button className='btn btn-success' onClick={handleAddRoom} type='submit' >Add <span style={{ textTransform: 'pascel' }}>{roomForm?.category}</span> Rooms</button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="container px-2 py-2 rounded-3 mb-2" style={{ background: '#ECECEC' }}>
                                        <div className='mb-3 border-bottom'>
                                            <span className='fs-6 fw-bold py-2 w-100'>Add Some Pictures of Homestay/Rooms</span>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 mb-3">
                                                <label htmlFor="frontImage1">Add Main Image 1 <small className='text-danger'>* mandatory</small></label>
                                                <input
                                                    required
                                                    type="file"
                                                    className="form-control"
                                                    name="front_img1"
                                                    onChange={handleFileChange}
                                                    placeholder="Add Images *"
                                                    accept=".jpg, .jpeg"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 mb-3">
                                                <label htmlFor="frontImage1">Add Main Image 2 <small className='text-danger'>* mandatory</small></label>
                                                <input
                                                    required
                                                    type="file"
                                                    className="form-control"
                                                    name="front_img2"
                                                    onChange={handleFileChange}
                                                    placeholder="Add Images"
                                                    accept=".jpg, .jpeg"
                                                />
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="frontImage1">Add Main Image 3 <small className='text-danger'>* mandatory</small></label>
                                                <input
                                                    required
                                                    type="file"
                                                    className="form-control"
                                                    name="front_img3"
                                                    onChange={handleFileChange}
                                                    placeholder="Add Images"
                                                    accept=".jpg, .jpeg"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 mb-3">
                                                <label htmlFor="frontImage1">Add Main Image 4</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    name="front_img4"
                                                    onChange={handleFileChange}
                                                    placeholder="Add Images"
                                                    accept=".jpg, .jpeg"
                                                />
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="frontImage1">Add Main Image 5</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    name="front_img5"
                                                    onChange={handleFileChange}
                                                    placeholder="Add Images"
                                                    accept=".jpg, .jpeg"
                                                />
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="frontImage1">Add Main Image 6</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    name="front_img6"
                                                    onChange={handleFileChange}
                                                    placeholder="Add Images"
                                                    accept=".jpg, .jpeg"
                                                />
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="frontImage1">Add Main Image 7</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    name="front_img7"
                                                    onChange={handleFileChange}
                                                    placeholder="Add Images"
                                                    accept=".jpg, .jpeg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="row text-start">
                                <div className="col">
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_food_served"
                                            checked={formData.is_food_served}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Is food served</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_tv_available"
                                            checked={formData.is_tv_available}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Is tv available</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="can_locals_stay"
                                            checked={formData.can_locals_stay}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Locals can stay</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="should_coupon_applied"
                                            checked={formData.should_coupon_applied}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Apply coupon</label>
                                    </div>
                                </div>
                                <div className="col-6 gap-2">
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_wifi_available"
                                            checked={formData.is_wifi_available}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Wi-Fi available</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_parking_available"
                                            checked={formData.is_parking_available}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Is parking available</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_ac_available"
                                            checked={formData.is_ac_available}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Is ac available</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_housekeeping_available"
                                            checked={formData.is_housekeeping_available}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Is housekeeping available</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-start">
                                <div className="col">
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_pets_allowed"
                                            checked={roomForm.is_pets_allowed}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Is pets allowed</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="is_smoking_allowed"
                                            checked={roomForm.is_smoking_allowed}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label">Is smoking allowed</label>
                                    </div>
                                </div>
                            </div>
                            <div className='my-2 text-left px-2'>
                                <hr />
                                <small className='text-danger text-justify'>LazyMonal retains the right to withhold 10% of the total booking charges from customers in advance, while the remaining 90% will be collected by the HomeStay Owner through mutually agreed-upon payment methods between both parties.</small>
                            </div>
                            <div className="row mt-4 px-4">
                                <div className="mb-3 text-start form-check x-5">
                                    <TermsAndCond lgShow={lgShow} setLgShow={setLgShow} Agree={Agree} data={Terms?.Terms_and_Conditions_homestay} />
                                    <input
                                        required
                                        type="checkbox"
                                        className="form-check-input"
                                        name="accepted_t_c"
                                        checked={formData.checked}
                                        disabled
                                        id="exampleCheck1"
                                    />
                                    <label onClick={() => setLgShow(true)} style={{ color: '', opacity: "1", cursor: 'pointer' }} className="form-check-label text-primary" htmlFor="exampleCheck1">Accept terms & conditions</label><br />
                                    {error && <small className="error-message text-danger">{error}</small>}
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col d-flex justify-content-center">
                                    <ReCAPTCHA
                                        sitekey='6Lcd5fApAAAAAGhvn00_b-jl8k2Y-B3ASP-ESk4y'
                                        onChange={(val) => setCaptchaValue(val)}
                                    />
                                </div>
                                <div className="col d-flex justify-content-center align-content-center align-items-center">

                                    <button disabled={!captchaValue} type="submit" className="card-link py-1 btn btn-success w-100 add-homestay-button">Submit</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}
