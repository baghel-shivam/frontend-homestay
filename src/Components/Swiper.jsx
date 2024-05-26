import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { blobUrl } from '../Redux/BaseURL';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './Styles//ViewPageSwiper.css'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SwiperComponent({ view_data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='' >
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {view_data?.map((item) => (
          <SwiperSlide>
            <img src={`${blobUrl}/${item?.image_field}`} />
          </SwiperSlide>
        ))}

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {view_data?.map((item) => (
          <SwiperSlide>
            <img src={`${blobUrl}/${item?.image_field}`} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}
