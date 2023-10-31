import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardV4 from '../module/CardV4';

function BloggSlider({ title }) {
    return (
        <section className='py-10'>
            {title && <h2 className="text-gray-600 text-3xl font-black text-center mb-5">{title}</h2>}
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    668: {
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={30}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CardV4 />
                </SwiperSlide>
                <SwiperSlide>
                    <CardV4 />
                </SwiperSlide>
                <SwiperSlide>
                    <CardV4 />
                </SwiperSlide>
                <SwiperSlide>
                    <CardV4 />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default BloggSlider