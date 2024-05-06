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
        if(data){

            setShowForm(false);
            try {
                const response = await dispatch(ChatMessages(data));
                if (response?.payload) {
                    alert(response?.payload);
                } else{
                    alert('Something went wrong, Please try again!');
                }
            } catch (error) {
                alert('Something went wrong, Please try again!');
            }
        }else{
            alert("Missing required fields.")
        }
    };
    

    return (
        <div className="container-chat-form">

            <span className='fs-5 fw-bolder'>Form</span>
            <hr />
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    {/* <label for="exampleInputEmail1" class="form-label">Full Name</label> */}
                    <input type="text" name='full_name' onChange={handleChange} placeholder='Full Name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    {/* <label for="exampleInputEmail1" class="form-label">Email</label> */}
                    <input type="email" name='email' onChange={handleChange} placeholder='Email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    {/* <label for="exampleInputEmail1" class="form-label">Email</label> */}
                    <input type="number" name='phn_no' onChange={handleChange} placeholder='Phone no.' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3 text-start">
                    <textarea type="text" name='mssg' onChange={handleChange} class="form-control" style={{ minHeight: '100px' }} placeholder='Message*' id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
