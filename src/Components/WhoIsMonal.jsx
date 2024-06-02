import React from 'react'
import monal from '../Images/monal_img/monal.png'
import '../../src/Components/Styles/Why_monal.css'

export default function WhoIsMona() {
  return (
    <div className='d-flex justify-content-center align-content-around' style={{ minHeight: '120vh', marginTop: '1.5rem' }}>
      <div id="monal-img-container" className=''>
        <img src={monal} alt='monal' id='monal_img' className="img-fluid" />
        <div className="monal-content">
          <h3 className='my-2'>Who is monal?</h3>
          <strong>The Himalayan Monal (Lophophorus impejanus)</strong>
          <p>

            is a colorful bird native to the Himalayas and parts of central Asia, including regions in India, Nepal, Bhutan, and Tibet.
            The Himalayan Monal is famous for its breathtaking appearance, with iridescent feathers in shades of blue, green, purple, and copper. The male Monal is particularly striking, with a crest on its head and a long, iridescent tail. Its beauty has made it a symbol of the Himalayan region and a popular subject for birdwatchers and wildlife enthusiasts.
            During harsh winters, Himalayan Monals may descend to lower elevations in search of food and shelter, but they stay foraging for berries, seeds, insects, and other food sources.
            In addition to its beauty,
            the Himalayan Monal plays a significant ecological role as a seed disperser and helps maintain the balance of its mountainous habitat.

          </p>
          <p>

            The Himalayan Monal also holds cultural significance in the local regions where it is found. It is often featured in local folklore, art, and religious ceremonies. In some cultures, it is considered a symbol of beauty, royalty, or good fortune. It is found in Uttarakhand state and is called "Monal" in the local hill language.
            Although the Himalayan Monal boasts a breathtaking appearance, it is confronted with challenges arising from habitat loss and hunting. Consequently, endeavors are currently in progress to safeguard this emblematic species. This website has been dedicated to raising global awareness regarding the perils faced by the bird as a result of habitat degradation and hunting activities.
          </p>
        </div>
      </div>
    </div>
  )
}
