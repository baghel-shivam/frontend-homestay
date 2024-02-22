import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Sign_up() {
  const navigate = useNavigate()
  const handleSubmit = () => {
    console.log('data submitted')
  }
  return (
    <div>
      <div className='container mt-5'>
        <div className='login-main-div'>

          <div className='p-5 rounded-3' id='Login_form'>
            <h2 id='text_color'>Sign-up</h2>

            <form onSubmit={handleSubmit}>
              <div class="mb-3 mt-4 mx-3">
                <input type="text" id='text_color' className=" form-control mt-3" placeholder="Enter name" />
                <input type="number" id='text_color' className=" form-control mt-3" placeholder="Enter number." />
                <div className='mt-4'>
                  <span className='' onClick={() => navigate('/login')}>Already Have an Account ? <span className='pointer-event' id="text_color">login</span></span><br />

                </div>
                <button type='submit' id='button' className='btn btn-success mt-5 px-5'>Sign-up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
