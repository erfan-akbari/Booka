import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardV3 from '../module/CardV3';

function Carousel({ data, title }) {
    return (
        <>
        <section className="py-10">
        {title && <h2 className="text-indigo-600 text-3xl font-black">{title}</h2>}
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    }
                }}
                spaceBetween={30}
                className="mySwiper"
            >
                {data?.map(book => (
                    <SwiperSlide key={book.id}>
                        <CardV3 {...book} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
        </>
    )
}

export default Carousel