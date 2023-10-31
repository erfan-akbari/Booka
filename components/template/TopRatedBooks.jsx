import CardV3 from "../module/CardV3"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function TopRatedBooks({ data }) {
    return (
        <section>
            <h2 className="text-indigo-600 text-3xl font-black mt-10 mb-5">--- پرامتیازترین کتاب‌ها</h2>
            <div>
                <Swiper
                    slidesPerView={2}
                    breakpoints={{
                        750: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        }
                    }}
                    spaceBetween={30}
                    className="mySwiper2"
                >
                    {data?.map(book => (
                        <SwiperSlide key={book.id}>
                            <CardV3 {...book} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default TopRatedBooks