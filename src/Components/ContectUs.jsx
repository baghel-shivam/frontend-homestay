import React from 'react'
import img from '../Images/contact_us.jpg'
export default function ContectUs(props) {
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
          <span className='sub-heading text-start'>Social links
            <hr />
          </span>
          <div className="container-social px-5 mx-5">
   
            <div ><a 
             className='text-none' href="https://wa.me/your-whatsapp-number"><i className="bi bi-whatsapp fs-2"></i></a></div>
         
            {/* <div><a href="https://www.instagram.com/your-instagram"><i className="bi bi-instagram fs-2"></i></a></div> */}
            <div>
              <a href="mailto:Support@lazymonal.com">
                <i className="bi bi-envelope fs-2"></i>
              </a>
            </div>
            <div><a href="https://twitter.com/your-twitter"><i className="bi bi-twitter-x fs-2"></i></a></div>
          </div>

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
    </div>
  )
}
