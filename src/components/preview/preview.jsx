import React, { useState, useEffect } from "react"
import './preview.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Link } from "react-router-dom";

const Preview = () => {

  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  useEffect(() => {

    function handleResize() {
      setClientWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="preview">
      <h1 className="preview-label">
        <div className="label-col">
          <span>826</span><p>персонажей</p>
        </div>
        <div className="label-col">
          <span>126</span><p>локаций</p>
        </div>
        <div className="label-col">
          <span>51</span><p>эпизод</p>
        </div>
      </h1>
      <div className="preview-container">
        <Swiper
          slidesPerView={clientWidth > 1360 ? 6 : clientWidth > 820 ? 4 : 2}
          centeredSlides={false}
          spaceBetween={10}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/4.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/5.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/6.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/7.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/8.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/9.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/10.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/11.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/18.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/20.jpeg" /></Link></SwiperSlide>
          <SwiperSlide><Link to={'/characters'}><img src="https://rickandmortyapi.com/api/character/avatar/14.jpeg" /></Link></SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
};

export default Preview;
