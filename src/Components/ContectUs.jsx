import React from 'react'
import img from '../Images/bg.jpg'
export default function ContectUs(props) {
  return (
    <div className='container-contact mb-5' id="contact" ref={props.Ref}>
      <div className='mb-5'>
        <span className='headings mb-5'>Contact us</span>
        <hr style={{ width: '90%', margin: 'auto' }} />
      </div>
      <div className="row">
        <div className="col-12 p-3 px-4 text-start col-lg-6">
          <span className='sub-heading text-start'>Social links
            <hr />
          </span>
          <div className="container-social px-5 mx-5">
            <div><i className="bi bi-whatsapp fs-2"></i></div>
            <div><i className="bi bi-facebook fs-2"></i></div>
            <div><i className="bi bi-instagram fs-2"></i></div>
            <div><i className="bi bi-envelope fs-2"></i></div>
            <div><i className="bi bi-twitter-x fs-2"></i></div>
          </div>
          <span className='sub-heading'>Purpose
            <hr /></span>
          <p>
            delectus natus officiis adipisci excepturi cumque dolorem,
            accusantium numquam. Molestias nesciunt praesentium dolor.
            Nesciunt impedit saepe ducimus nostrum quia optio sed.
            Reiciendis alias hic non debitis quasi quae doloremque
            vitae beatae, error nobis eum laboriosam illum voluptatem
            cumque saepe natus incidunt dolorem ab dignissimos? Por
            ro aut deleniti voluptatum, est suscipit quo hic illum
            , necessitatibus voluptas, temporibus dolor architecto.
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <div className='bg-about-image pt-5'>
            <img src={img} className="bg-image" />
          </div>
        </div>

      </div>
    </div>
  )
}
