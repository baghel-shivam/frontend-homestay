import React from 'react'
import img from '../Images/bg.jpg'

export default function AboutUs(props) {
  return (
    <div className='container-about' id='about' ref={props.Ref}>
      <div className='mb-5'>
        <span className='headings mb-5'>About us</span>
     <hr style={{width:'90%', margin:'auto'}}/>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className='bg-about-image pt-5'>
            <img src={img} className="bg-image" />
          </div>
        </div>
        <div className="col-12 col-lg-6 p-3 px-4 text-start">
          <span className='sub-heading text-start'>Purpose
            <hr />
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex mollitia eligendi, non
            facilis, maiores suscipit tempore quibusdam odio fugiat
            dignissimos voluptas quae laudantium nisi itaque sint quod n
            ecessitatibus culpa veniam repellat fugit incidunt nesciunt
            at? Sequi ullam facilis quos quidem, aut nam harum iure nobis
            dolorum omnis dolore odit similique exercitationem beatae
          </p>
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
      </div>
    </div>
  )
}
