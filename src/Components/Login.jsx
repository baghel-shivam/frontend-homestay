import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const handleSubmit = () => {
        console.log('data submitted')
    }
    return (
        <>
            <div className='container mt-5'>
                <div className='login-main-div'>

                    <div className='p-5 rounded-3 card' id='Login_form'>
                        <h2 id='text_color'>Login</h2>

                        <form onSubmit={handleSubmit}>
                            <div class=" mb-3 mt-4 mx-3">
                                <input type="number" id='text_color' className="form-control" placeholder="Enter number." />
                                <div className='mt-4'>
                                    <span onClick={()=>navigate('/sing-up')} className=''>Don't Have an account ? <span className='pointer-event' id='text_color'> Sign-up</span></span><br />

                                </div>
                                <button type='submit' id='button' className='btn mt-5 px-5'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
