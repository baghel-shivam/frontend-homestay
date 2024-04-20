import React, { useState } from 'react'

export default function FormChatBot({ setShowForm }) {
    const [data, setData] = useState()
    const handleChange = (e) => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setShowForm(false)
        alert('Record submitted!')
    
    }
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
                <div class="mb-3 text-start">
                    <textarea type="text" name='message' onChange={handleChange} class="form-control" style={{ minHeight: '100px' }} placeholder='Message*' id="exampleInputPassword1" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
