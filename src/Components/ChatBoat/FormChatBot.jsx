import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChatMessages } from '../../Redux/ChatForm/ChatAction'

export default function FormChatBot({ setShowForm }) {
    const [data, setData] = useState()
    const result = useSelector((state) => state.ChatMessages_success)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data) {

            setShowForm(false);
            try {
                const response = await dispatch(ChatMessages(data));
                if (response?.payload) {
                    alert(response?.payload);
                } else {
                    alert('Something went wrong, Please try again!');
                }
            } catch (error) {
                alert('Something went wrong, Please try again!');
            }
        } else {
            alert("Missing required fields.")
        }
    };


    return (
        <div className="container-chat-form">
            <div className='d-flex justify-content-between'>
                <span className='fs-5 fw-bolder'>Contact</span>
                <button onClick={()=>setShowForm(false)}  type="button" className="btn-close" aria-label="Close"></button>

            </div>

            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    {/* <label for="exampleInputEmail1" className="form-label">Full Name</label> */}
                    <input required type="text" name='full_name' onChange={handleChange} placeholder='Full Name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    {/* <label for="exampleInputEmail1" className="form-label">Email</label> */}
                    <input required type="email" name='email' onChange={handleChange} placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    {/* <label for="exampleInputEmail1" className="form-label">Email</label> */}
                    <input required type="number" name='phn_no' onChange={handleChange} placeholder='Phone No.' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3 text-start">
                    <textarea required type="text" name='mssg' onChange={handleChange} className="form-control" style={{ minHeight: '100px' }} placeholder='Message*' id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
