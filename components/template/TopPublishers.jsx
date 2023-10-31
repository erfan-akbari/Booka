import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function TopPublishers({ title }) {
    return (
        <>
        <section className="py-10">
        {title && <h2 className="text-indigo-600 text-3xl font-black mb-5">{title}</h2>}
            <Swiper
                slidesPerView={2}
                breakpoints={{
                    668: {
                        slidesPerView: 4
                    },
                    1200: {
                        slidesPerView: 6
                    }
                }}
                spaceBetween={30}
                className="mySwiper"
            >
                    <SwiperSlide>
                        <img src="/images/Publishers/brands_01.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Publishers/brands_02.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Publishers/brands_03.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Publishers/brands_04.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Publishers/brands_05.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Publishers/brands_06.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Publishers/brands_01.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Publishers/brands_02.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Publishers/brands_03.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Publishers/brands_04.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Publishers/brands_05.jpg" alt="poster" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/images/Publishers/brands_06.jpg" alt="poster" />
                    </SwiperSlide>
            </Swiper>
        </section>
        </>
    )
}

export default TopPublishers