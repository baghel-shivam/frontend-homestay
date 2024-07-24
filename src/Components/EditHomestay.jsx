import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import '../Components/Styles/homeStayform.css';
import axios from "axios";
import { url } from "../Redux/BaseURL";
export default function EditHomestay() {
    const [formData, setFormData] = useState({
        registration_no: '',
        email: '',
        otp: '',
        homestay_obj: ''
    });
    const [homestayData, setHomestayData] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleRoomChanges = (e, rowindex = null) => {
        const { name, value } = e.target;
        setHomestayData((prevData) => {
            const updatedData = { ...prevData };
            if (rowindex === null) {
                if (!updatedData.homestayObj) {
                    updatedData.homestayObj = {};
                }
                updatedData.homestayObj[name] = value;
            } else {
                if (!updatedData.rooms) {
                    updatedData.rooms = [];
                }
                if (!updatedData.rooms[rowindex]) {
                    updatedData.rooms[rowindex] = {};
                }
                updatedData.rooms[rowindex][name] = value;
            }
    
            return updatedData;
        });
    }
    
    const [otpConter, setotpCounter] = useState(0)
    const [haveOtp, setOtpStatus] = useState(false)
    const [isVerfied, setVerifed] = useState(false)
    const [isSubmitting, setSubmitting] = useState(false)

    const handleGetOtp = async (e) => {
        e.preventDefault();
        e.target.disabled = true
        setSubmitting(true)
        try {
            const response = await axios.get(`${url}/edit_homestay?registration_no=${formData.registration_no}&email=${formData.email}`)
            if (response.status === 200) {
                toast.success(`${response.data.mssg}`)
                let updatedData = {
                    ...formData,
                    homestay_obj: response.data.homestay_obj
                }
                setFormData(updatedData)
                setOtpStatus(true)
            }
            else if (response.status === 207) {
                toast.error("Homestay is not approved yet for listing.")
            }
        }
        catch (error) {
            if (error.response.status === 404) {
            toast.error("Not Found, Please check you Reg no.")
            }
            else if (error.response.status === 401) {
                toast.error("Wrong Email Entered, Please enter registerd email only.")
            }
            else{
                toast.error("Something went wrong !")
            }
            
        }
e.target.disabled = false
setSubmitting(false)
    };
const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.disabled = true
    setSubmitting(true)
    try {
        const response = await axios.post(`${url}/edit_homestay`, formData)
        if (response.status === 200) {
            toast.success("Verified !")
            setHomestayData(response.data)
            setVerifed(true)
        }
    }
    catch (error) {
        if (error.response.status === 401) {
            toast.error("OTP expired !")
        }
        else if (error.response.status === 403) {
            if (otpConter > 3) {
                toast.error("You have entered Wrong Otp More Than 3 times !")
            }
            else {
                toast.error("Wrong Otp !")
                setotpCounter(otpConter + 1)
            }
        }
        else {
            toast.error("Something went wrong !")
        }
        e.target.disabled = false
        setSubmitting(false)
    }
};
const handleUpdate = async (e) => {
    e.preventDefault();
    e.target.disabled = true
    setSubmitting(true)
    const newUpdatedData = {
        ...formData,
        "homestayData": homestayData
    }
    try {
        const response = await axios.put(`${url}/edit_homestay`, newUpdatedData);
        if (response.status === 200) {
            toast.success("Updated !")
        }
    }
    catch (error) {
        toast.error(error.data);
    }
    setSubmitting(false)
    e.target.disabled = false

}


return (
    <div>

        <div className="container add-your-home-stay pt-3">
            <h2 className='title'>Edit Your HomeStay</h2>
            {isVerfied ? (
                <form>
                    <div className="row px-0 mt-6 container-fluid my-5 py-3 child-add-your-home-stay col-sm-6">
                        <div className="mt-2">
                            <div className="col-12 text-left row">
                                <div className="mb-3 col-sm-6">
                                    <label htmlFor="contact_phn">Phone No:</label>
                                    <input name="contact_phn" onChange={(e) => handleRoomChanges(e)} value={homestayData?.homestayObj?.contact_phn} type="number" className="form-control" id="contact_phn" />
                                </div>
                                <div className="mb-3 col-sm-6">
                                    <label htmlFor="upi_phn_no">UPI Phone No:</label>
                                    <input name="upi_phn_no" onChange={(e) => handleRoomChanges(e)} value={homestayData?.homestayObj?.upi_phn_no} type="number" className="form-control" id="upi_phn_no" />
                                </div>
                                <div className="mb-3 col-sm-12 text-center" >
                                    <h4>Available Rooms</h4>
                                </div>
                                <div className="col-sm-6 text-center mb-2">Catogary</div>
                                <div className="col-sm-3 text-center mb-2">Price</div>
                                <div className="col-sm-3 text-center mb-2">Rooms</div>
                                {homestayData?.rooms?.map((room, newIndex) => {
                                    return (
                                        <div className="mb-3 row col-sm-12" key={newIndex}>
                                            <div className="col-sm-6">
                                                <select
                                                    name="category"
                                                    onChange={(e) => handleRoomChanges(e, newIndex)}
                                                    value={homestayData?.rooms?.[newIndex]?.["category"]}
                                                    type="select"
                                                    className="form-control"
                                                    id={`category_${newIndex}_${newIndex}`}


                                                >
                                                    <option value="">Select</option>
                                                    <option value="Economy">Economy</option>
                                                    <option value="Premium">Premium</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-3">
                                                <input
                                                    name="base_price"
                                                    onChange={(e) => handleRoomChanges(e, newIndex)}
                                                    value={homestayData?.rooms?.[newIndex]?.["base_price"]}
                                                    type="text"
                                                    placeholder="Base Price"
                                                    className="form-control"
                                                    id={`base_price_${newIndex}_${newIndex}`}
                                                />
                                            </div>
                                            <div className="col-sm-3">
                                                <input
                                                    name="count"
                                                    onChange={(e) => handleRoomChanges(e, newIndex)}
                                                    value={homestayData?.rooms?.[newIndex]?.["count"]}
                                                    type="text"
                                                    placeholder="Count"
                                                    className="form-control"
                                                    id={`count_${newIndex}_${newIndex}`}
                                                />
                                            </div>
                                        </div>
                                    );

                                })}

                                <button className="btn btn-outline-dark" type="button" onClick={handleUpdate}>Update Data</button>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <form onSubmit={handleGetOtp}>
                    <div className="row px-0 mt-4 container-fluid my-5 py-3 child-add-your-home-stay col-sm-6">
                        <div className="mt-2">
                            <div className="col-12 text-left">
                                <div className="mb-3 col-sm-8">
                                    <label htmlFor="registration_no">Enter Your Registration No.</label>
                                    <input name="registration_no" onChange={handleChange} value={formData.registration_no} type="text" className="form-control" id="registration_no" />
                                </div>
                                <div className="mb-3 col-sm-8">
                                    <label htmlFor="email">Enter Your Registerd Email</label>
                                    <input name="email" onChange={handleChange} value={formData.email} type="email" className="form-control" id="email" />
                                </div>
                                {haveOtp && formData.email && (
                                    <div className="mb-3 col-sm-8">
                                        <label htmlFor="otp">Enter Otp</label>
                                        <input name="otp" onChange={handleChange} value={formData.otp} type="text" className="form-control" id="otp" />
                                    </div>
                                )}

                                <div className="col-sm-4">
                                    {haveOtp && formData.email ? (
                                        <button onClick={handleSubmit} className="btn btn-outline-success">{isSubmitting ? ("Submitting..") : ("Submit")}</button>
                                    ) : (formData.email && (<button className="btn btn-outline-dark"> {isSubmitting ? ("Sending Otp...") : ("Get OTP")} </button>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}

        </div>
        <ToastContainer />
    </div>
)
}