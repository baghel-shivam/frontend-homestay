import React from 'react'

export default function Otp() {
    const handleSubmit = () => {
        console.log('data submitted')
    }
    return (
        <div>
            <div className='login-main-div'>

                <div className='p-4 rounded-3' id='Login_form'>
                    <h2 id='text_color'>OTP</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3 mt-4 mx-3">
                            <input type="number" id='text_color' className=" form-control" placeholder="Enter OTP" />
                            <div className='mt-4'>
                                {/* <span className=''>Don't Have account ? <span className='text-primary pointer-event'>Sign-up</span></span><br /> */}

                            </div>
                            <button type='submit'  id='button' className='btn mt-5 px-5'>Proceed</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
