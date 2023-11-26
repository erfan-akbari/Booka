import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import { EffectCube, Autoplay, Pagination, Navigation } from 'swiper/modules';


function HeroBanner() {
    return (
        <div className='grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 z-10 gap-5 py-6'>
            <div className="col-span-2 row-span-2">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='rounded-sm' src="/images/slide/banner-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-sm' src="/images/slide/banner-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-sm' src="/images/slide/banner-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-sm' src="/images/slide/banner-1.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="col-span-1 row-span-1">
                <Swiper
                    effect={'cube'}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[Autoplay, EffectCube, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='rounded-sm' src="/images/slide/banner-14.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-sm' src="/images/slide/banner-15.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-sm' src="/images/slide/banner-16.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="col-span-1 row-span-1">
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[Autoplay, EffectCube, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='rounded-sm' src="/images/slide/banner-17.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-sm' src="/images/slide/banner-18.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-sm' src="/images/slide/banner-19.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HeroBanner