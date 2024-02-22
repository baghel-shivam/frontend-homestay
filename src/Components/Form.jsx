import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {

    const [data, setData] = useState()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })
    }
    const handleSubmit = () => {
        // alert(data)
        navigate('/search-rooms')
        // history.pushState()
    }

    return (
        <div className='sub_child p-3'>
            <form onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4 align-self-center my-1">
                        <label for="Location" id='color' class="col-sm-2  ">Location</label>
                        <input type="location" onChange={handleChange} name='location' class="form-control" id="exampleFormControlInput1" placeholder="Enter Location" />
                    </div>
                    <div class="col-sm-12 col-lg-3 col-md-6 align-self-center my-1">
                        <div class="">
                            <label for="staticEmail" id='color'  class="col-sm-2  ">Arrival</label>
                            <input type="date" onChange={handleChange} name='arrival' class="form-control" id="exampleFormControlInput1" placeholder="Select Arrival" />
                        </div>

                    </div>
                    <div class="col-sm-12 col-lg-3 col-md-6 align-self-center my-1">
                        <label for="staticEmail" id='color' class="col-sm-2  ">Departure</label>
                        <div class=" ">
                            <input type="date" onChange={handleChange} name='departure' class="form-control" id="exampleFormControlInput1" placeholder="Select Departure" />
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-2 col-md-6  align-self-center my-1">
                        <button type='submit'  id='button' className='btn btn- px-2 w-100 mt-4'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
