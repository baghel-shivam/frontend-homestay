import React, { useState } from 'react'
import img from '../Images/contact_us.jpg'
export default function ContectUs(props) {
  const [showContDetails, setShowContDetails] = useState({ data: "", open: false })
  return (
    <div className='container my-5' id="contact" ref={props.Ref}>
      <div className='mb-5'>
        <span className='headings mb-5' >Contact us</span>
        <div className="custom-hr">
          <hr />
        </div>
      </div>
      <div className="row rounded-3" style={{ border: '1px solid #f2f2f2', background: '#f2f2f2' }}>
        <div className="col-12 p-3 px-4 text-start col-lg-6 mt-3">
          <span className='sub-heading text-start'>Reach out to us
            <hr />
          </span>
          <div className="container-social px-5 mx-5">
            <div onClick={() => setShowContDetails({ data: "+919359843020", type: "Phone", open: true })} >
              <i class="bi bi-telephone fs-2"></i>
            </div>
            <div onClick={() => setShowContDetails({ data: "lazymonal@gmail.com", type: "Email", open: true })}>
              <i className="bi bi-envelope fs-2"></i>
            </div>
            {/* <div><a href="https://twitter.com/your-twitter"><i className="bi bi-twitter-x fs-2"></i></a></div> */}
          </div>
          {showContDetails?.open &&
            <div className='p-2 mt-3' style={{
              border: "none", borderRadius: '10px', minHeight: "70px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }}>
              <div className='d-flex justify-content-between'>
                <h5 className='text-bolder'>{showContDetails.type}</h5>
                <button onClick={() => setShowContDetails({ open: false })} type="button" class="btn-close" aria-label="Close"></button>

              </div>
              <hr className='m-0 p-0' />
              <div className='container'>
                <div className='m-auto'>
                  <p className='m-2 fs-6'>
                    {showContDetails.type}: {showContDetails.data}
                  </p>
                </div>


              </div>
            </div>
          }


          <span className='sub-heading'>Have a question, feedback, or just want to say hello? We'd love to hear from you!
            <hr /></span>
          <p>
            Feel free to reach out to us via phone or email during our business hours. We're here to assist you with any inquiries or assistance you may need. Thank you for choosing HOMESTAY!
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <div className='bg-about-image pt-1 h-100 d-flex align-item-center'>
            <img src={img} className="bg-image" alt="contact-img" />
          </div>
        </div>

      </div>
    </div >
  )
}
