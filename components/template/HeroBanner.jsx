import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs"
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroBanner() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='z-10'>
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='relative'>
                    <img className="w-full" src="/images/slide/slide1.jpg" alt="banner" />
                    <div className="hidden md:flex absolute z-10 top-1/4 left-20 flex-col items-end gap-4">
                        <h2 data-aos="fade-up-right" className="bg-gradient-to-r from-red-500 to-rose-500 rounded-md text-white shadow-md font-bold text-3xl p-2 w-fit">آرشیوی از برترین کتاب‌های سال</h2>
                        <p data-aos="fade-up-right" data-aos-duration={600} className="bg-stone-50 rounded-md text-black p-2 w-fit text-xl font-semibold">نصب اپلیکیشن کتابخانه روی دسکتاپ</p>
                        <Link data-aos="fade-up-right" data-aos-duration={800} href={''} className='flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-stone-50 w-fit px-2 py-1 rounded-md hover:bg-blue-400 transition-colors'>
                            <BsArrowRight />
                            مشاهده ویژگی ها
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className="w-full" src="/images/slide/slide2.jpg" alt="banner" />
                    <div className="hidden md:flex absolute z-10 top-1/4 left-20 flex-col items-end gap-4">
                        <h2 data-aos="fade-up-right" className="bg-gradient-to-r from-red-500 to-rose-500 rounded-md text-white shadow-md font-bold text-3xl p-2 w-fit">اپلیکیشن موبایلی کتابخانه بوکا</h2>
                        <p data-aos="fade-up-right" data-aos-duration={600} className="bg-stone-50 rounded-md text-black p-2 w-fit text-xl font-semibold">تنها با چند کلیک به راحتی کتاب مورد علاقه خود را پیدا و مطالعه کنید.</p>
                        <Link data-aos="fade-up-right" data-aos-duration={800} href={''} className='flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-stone-50 w-fit px-2 py-1 rounded-md hover:bg-blue-400 transition-colors'>
                            <BsArrowRight />
                            دانلود اپلیکیشن
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className="w-full" src="/images/slide/slide3.jpg" alt="banner" />
                    <div className="hidden md:flex absolute z-10 top-1/4 left-20 flex-col items-end gap-4">
                        <h2 data-aos="fade-up-right" className="bg-gradient-to-r from-red-500 to-rose-500 rounded-md text-white shadow-md font-bold text-3xl p-2 w-fit">بیش از صد هزار جلد کتاب در بوکا</h2>
                        <p data-aos="fade-up-right" data-aos-duration={600} className="bg-stone-50 rounded-md text-black p-2 w-fit text-xl font-semibold">مشاهده لیست تمام ناشران</p>
                        <Link data-aos="fade-up-right" data-aos-duration={800} href={''} className='flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-stone-50 w-fit px-2 py-1 rounded-md hover:bg-blue-400 transition-colors'>
                            <BsArrowRight />
                            خرید کتاب
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className="w-full" src="/images/slide/slide4.jpg" alt="banner" />
                    <img className='hidden md:block absolute z-10 top-10 left-96' src="/images/slide/plane.png" alt="plane" />
                    <div className="hidden md:flex absolute z-10 top-1/4 left-20 flex-col items-end gap-4">
                        <h2 data-aos="fade-up-right" className="bg-gradient-to-r from-red-500 to-rose-500 rounded-md text-white shadow-md font-bold text-3xl p-2 w-fit">اپلیکیشن موبایلی کتابخانه بوکا</h2>
                        <p data-aos="fade-up-right" data-aos-duration={600} className="bg-stone-50 rounded-md text-black p-2 w-fit text-xl font-semibold">در هر مکان و زمانی به راحتی به کتابخانه شخصی خود دسترسی دارید!</p>
                        <Link data-aos="fade-up-right" data-aos-duration={800} href={''} className='flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-stone-50 w-fit px-2 py-1 rounded-md hover:bg-blue-400 transition-colors'>
                            <BsArrowRight />
                            برنامه‌های جانبی
                        </Link>
                    </div>
                    <div className="hidden md:block absolute -bottom-10 w-52 lg:w-80 right-20 xl:right-40">
                        <img src="/images/slide/books.png" alt="books" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeroBanner